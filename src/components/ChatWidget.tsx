import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

interface Message {
  role: string;
  content: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hi! I'm Sandeep's AI Assistant 🤖. I can tell you about his skills, experience, and projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          <FiMessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="bg-white border rounded-lg shadow-lg flex flex-col"
          style={{
            width: "400px",
            height: isMinimized ? "60px" : "550px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-2 bg-blue-500 text-white rounded-t-lg">
            <span>Chat with Sandeep's Assistant</span>
            <div>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="px-2"
              >
                {isMinimized ? "🔼" : "🔽"}
              </button>
              <button onClick={() => setIsOpen(false)} className="px-2">
                ❌
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="p-3 flex-1 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 ${
                      msg.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-2 rounded-lg ${
                        msg.role === "user"
                          ? "bg-blue-200 text-blue-900"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      {msg.content}
                    </span>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-2 flex border-t">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 p-2 border rounded"
                  placeholder="Ask me something..."
                />
                <button
                  onClick={sendMessage}
                  className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
