"use client";

import { useEffect, useState } from "react";
import { queryChatMessages, sendMessage } from "@/firebase/firestore/chatStore";
import { useParams } from "next/navigation";
import getData from "@/firebase/firestore/getData";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";

export default function ChatPage() {
  const params = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatDocument, setChatDocument] = useState();
  const { user } = useAuthContext();

  const fetchMessages = async () => {
    const { result } = await queryChatMessages(params.chatId);
    setMessages(result);
  };

  useEffect(() => {
    if (params.chatId) {
      getData("chats", params.chatId).then(({ result }) =>
        setChatDocument(result)
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
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Chat with interested customer
      </h1>
      <div className="flex-grow overflow-y-auto bg-white rounded-lg shadow-md p-4">
        <ul className="space-y-2">
          {messages.map((msg) => (
            <li key={msg.id} className="flex items-start">
              <strong className="mr-2 text-blue-600">
                {msg.from == user.uid ? "Me" : "Buyer"}:
              </strong>
              <span className="bg-gray-200 p-2 rounded-lg">{msg.message}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white rounded-r-lg px-4 hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>

        <Link href="/marketplace" className="text-blue-600 hover:underline">
          Go to Marketplace
        </Link>
      </div>
    </div>
  );
}
