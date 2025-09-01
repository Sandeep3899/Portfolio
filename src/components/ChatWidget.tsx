import { useState } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];
    setMessages(newMessages);

    try {
      const res = await fetch(
        "https://portfolio-backend-7e12.onrender.com/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input, history: messages }),
        }
      );

      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "bot", content: data.answer || "Error fetching response" },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { role: "bot", content: "⚠️ Unable to reach server. Try again." },
      ]);
    }
    setInput("");
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[400px] bg-white shadow-2xl rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-lg">
        <span className="font-semibold">Chat with Sandeep's Assistant</span>
        <div className="space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="bg-blue-400 px-2 py-1 rounded"
          >
            {isMinimized ? "🔼" : "🔽"}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-red-500 px-2 py-1 rounded"
          >
            ❌
          </button>
        </div>
      </div>

      {/* Chat Body */}
      {!isMinimized && (
        <div className="flex flex-col p-4 h-[500px]">
          <div className="flex-1 overflow-y-auto mb-2">
            {messages.map((m: Message, i: number) => (
              <div
                key={i}
                className={`p-2 my-1 rounded-lg ${
                  m.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              className="flex-1 border rounded-l p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me something..."
            />
            <button
              className="bg-blue-500 text-white px-4 rounded-r"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
