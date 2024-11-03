"use client";

import { useEffect, useState } from "react";
import { queryChatMessages, sendMessage } from "@/firebase/firestore/chatStore";
import { useParams } from "next/navigation";
import getData from "@/firebase/firestore/getData";
import { useAuthContext } from "@/context/AuthContext";

export default function ChatPage() {
  const params = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatDocument, setChatDocument] = useState();
  const { user } = useAuthContext();

  const fetchMessages = async () => {
    const { result, error } = await queryChatMessages(params.chatId);
    setMessages(result);
  };

  useEffect(() => {
    if (params.chatId) {
      setChatDocument(
        getData("chats", params.chatId).then(({ result, err }) => result)
      );
      fetchMessages();
    }
  }, [params.chatId]);

  const handleSendMessage = async () => {
    await sendMessage(params.chatId, newMessage, user.uid);
    setNewMessage("");
    fetchMessages();
  };

  return (
    <div>
      <h1>Chat with {chatDocument && chatDocument.from}</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.from}</strong>: {msg.message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}
