"use client";

import Image from "next/image";
import Link from "next/link";
import "../CSS/postpage.css";

import React, { useEffect, useState } from "react";
import { queryChats } from "@/firebase/firestore/chatStore";
import { useAuthContext } from "@/context/AuthContext";
import getData from "@/firebase/firestore/getData";

function Chat({ chat }) {
  const { user } = useAuthContext();

  return (
    <>
      <div className="chat-summary">
        <h2>Chat With: {chat.to}</h2>
        <h3>About: {}</h3>

        {chat.from == user.uid ? (
          <p>Your Post</p>
        ) : (
          <>
            <Link href={`/chats/${chat.id}`} className="hover:text-blue-600">
              Open Chat
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default function Home() {
  const { user } = useAuthContext();
  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    if (user == null) {
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
  }, []);

  return (
    <>
      <main>
        <h1 className="text-4xl">Tar Heel Trade</h1>
        <hr></hr>
        <header>
          <nav>
            <div id="sidenav">
              <ul>
                <li>
                  <a href="/marketplace">Home</a>
                </li>
                <li>
                  <a href="/">Sign Out</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div>
          <h1>Your Chats</h1>
          {error && <p>Error fetching chats: {error.message}</p>}
          <ul>
            {chats.map((chat) => (
              <li key={chat.id}>
                <Chat chat={chat} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
