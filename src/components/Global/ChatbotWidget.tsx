"use client";

import { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";

type Message = {
  id: number;
  role: "user" | "bot";
  content: string;
};

const CHAT_URL = "https://rag.findora.ai/webhook/chat"

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending , setPending] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      content: "Hi! How can I help you today?",
    },
  ]);

  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setPending(true)

    let sessionId = localStorage.getItem("session_id")

    setMessages(prev => [...prev , {id : new Date().getMilliseconds(), role : "user" , content : input}])

    fetch(`${CHAT_URL}`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({query : input, sessionID: sessionId})
    }).then(res => {
        if(res.ok){
          return res.json()
        }
    }).then(data => {
        localStorage.setItem("session_id" , data?.sessionID)
        setMessages(prev => [...prev , {id : new Date().getMilliseconds() ,role : "bot" , content : data?.ans}])
    }).finally(()=>{
        setInput("")
        setPending(false)
    })
    
  };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(item => !item)}
        className="pointer-events-auto fixed bottom-5 right-5 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl flex items-center justify-center hover:scale-105 transition sm:hidden"
        aria-label="Open chat"
      >
        AI
      </button>

      <button
        onClick={() => setOpen(item => !item)}
        className="pointer-events-auto fixed bottom-5 right-5 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl hidden sm:flex items-center justify-center hover:scale-105 transition"
        aria-label="Open chat"
      >
        AI
      </button>

      {open && (
        <div
          className={`
            pointer-events-auto fixed
            inset-0 sm:inset-auto
            sm:bottom-24 sm:right-5
            w-full sm:w-96
            h-full sm:h-[520px]
            bg-white
            rounded-none sm:rounded-xl
            shadow-2xl
            flex flex-col
            overflow-hidden
          `}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-indigo-600 text-white">
            <span className="font-semibold text-sm">Findora Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="text-xl leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div
            ref={messagesRef}
            className="flex-1 p-4 overflow-y-auto bg-slate-500 text-sm"
          >

            {messages.map((msg , index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-slate-800 shadow"
                  }`}
                >
                  <Markdown components={{
                    a : (props) => <a {...props} className="text-blue-400 mb-2"/>
                  }}>
                    {msg.content}
                  </Markdown>
                </div>
              </div>
            ))}

             {pending && (<div className="justify-start">
              <div className="w-[75%] px-3 py-2 rounded-xl bg-white text-slate-800 shadow">
                Pending...
              </div>
            </div>)}

          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={sendMessage}
              className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"
              aria-label="Send"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
