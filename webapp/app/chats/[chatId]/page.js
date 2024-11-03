"use client";

import { useEffect, useState } from "react";
import { queryChatMessages, sendMessage } from "@/firebase/firestore/chatStore";
import { useParams } from "next/navigation";

export default function ChatPage() {
  const params = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (params.chatId) {
      const fetchMessages = async () => {
        const { result, error } = await queryChatMessages(params.chatId);
        console.log(result);
        setMessages(result);
      };
      fetchMessages();
    }
  }, [params.chatId]);

  const handleSendMessage = async () => {
    await sendMessage(params.chatId, newMessage);
    setNewMessage("");
  };

  return (
    <div>
      <h1>Chat with {params.chatId}</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.from}</strong>: {msg.message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}
