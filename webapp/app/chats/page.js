"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { queryChats } from "@/firebase/firestore/chatStore";
import { useAuthContext } from "@/context/AuthContext";
import getData from "@/firebase/firestore/getData";
import { useRouter } from "next/navigation";

function Chat({ chat }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">
        Chat About: {chat.description}
      </h2>
      <Link
        href={`/chats/${chat.id}`}
        className="text-blue-500 hover:text-blue-600 underline"
      >
        Open Chat
      </Link>
    </div>
  );
}

export default function Home() {
  const { user } = useAuthContext();
  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  useEffect(() => {
    const fetchChats = async () => {
      const { result, error } = await queryChats(user.uid);
      if (error) {
        setError(error);
      } else {
        setChats(result);
      }
    };

    fetchChats();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Tar Heel Trade</h1>
        <hr className="mb-6 border-gray-300" />
        <nav className="mb-6">
          <ul className="flex justify-center space-x-4 text-blue-500">
            <li>
              <Link href="/marketplace" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Your Chats</h2>
        {error && (
          <p className="text-red-500 mb-4">
            Error fetching chats: {error.message}
          </p>
        )}
        <ul className="space-y-4">
          {chats.map((chat) => (
            <li key={chat.id}>
              <Chat chat={chat} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
