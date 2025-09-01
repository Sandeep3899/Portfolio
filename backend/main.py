import os
import io
import requests
import fitz  # PyMuPDF
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from groq import Groq
from backend.links import LINKS

# ---------------------------
# Load Environment Variables
# ---------------------------
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY is missing. Add it to your .env file.")

client = Groq(api_key=GROQ_API_KEY)

app = FastAPI()

# ---------------------------
# Enable CORS
# ---------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://localhost:5173", "https://sandeep3899.github.io"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    
)

# ---------------------------
# Resume Loader
# ---------------------------
RESUME_URL = "https://drive.google.com/uc?id=11l9x7FunF-mImDugyjNYBuSiBhHNGQG7"

def fetch_resume_text():
    """Fetch and extract text from Google Drive resume PDF."""
    try:
        res = requests.get(RESUME_URL)
        res.raise_for_status()
        pdf_file = io.BytesIO(res.content)
        doc = fitz.open(stream=pdf_file, filetype="pdf")
        text = "".join([page.get_text() for page in doc])
        return text.strip()
    except Exception as e:
        print("Error reading resume:", e)
        return "Resume not available."

RESUME_TEXT = fetch_resume_text()

# ---------------------------
# Request Model
# ---------------------------
class ChatRequest(BaseModel):
    question: str
    history: list

# ---------------------------
# Routes
# ---------------------------
@app.get("/")
async def root():
    return {"message": "Portfolio Chatbot Backend is running 🚀"}

@app.post("/chat")
async def chat(req: ChatRequest):
    try:
        # Format chat history properly
        formatted_history = [
            {"role": "assistant" if msg["role"] == "bot" else msg["role"], "content": msg["content"]}
            for msg in req.history
            if "role" in msg and "content" in msg
        ]

        # Links + Resume Context
        links_context = "\n".join([f"{k.capitalize()}: {v}" for k, v in LINKS.items()])
        context = (
            f"You are a helpful assistant that always speaks in third person about Sandeep.\n"
            f"Here are Sandeep's important links:\n{links_context}\n\n"
            f"Here is Sandeep's resume content:\n{RESUME_TEXT}\n\n"
            f"Answer the question based on this information.\n\n"
            f"Question: {req.question}"
        )

        # Call Groq API
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "Always answer in third person about Sandeep."},
                *formatted_history,
                {"role": "user", "content": context},
            ],
        )

        answer = response.choices[0].message.content
        return {"answer": answer}

    except Exception as e:
        print(f"Error in /chat: {e}")
        raise HTTPException(status_code=500, detail=str(e))
