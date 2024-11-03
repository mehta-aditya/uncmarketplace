import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  or,
  orderBy,
} from "firebase/firestore";
import firebase_app from "../config.js";

const db = getFirestore(firebase_app, "uncmarket");

//lid = listing id
export async function startChat(from, to, lid, description) {
  let result = null;
  let error = null;

  try {
    const docRef = doc(collection(db, "chats"));
    result = await setDoc(docRef, { from: from, to: to, lid: lid });
    const messageRef = doc(collection(db, "chats", docRef.id, "messages"));
    result = await setDoc(messageRef, {
      message: "Message about " + description,
      from: from,
    });
  } catch (e) {
    console.log(e);
    error = e;
  }

  return { result, error };
}

export async function sendMessage(chat_id, message, from) {
  let result = null;
  let error = null;

  try {
    const messageRef = doc(collection(db, "chats", chat_id, "messages"));
    result = await setDoc(messageRef, {
      message: message,
      from: from,
    });
  } catch (e) {
    console.log(e);
    error = e;
  }

  return { result, error };
}

export async function queryChatMessages(chatId) {
  let result = [];
  let error = null;

  try {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef);
    const querySnapshot = await getDocs(q);
    result = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.error("Error fetching messages:", e);
    error = e;
  }

  return { result, error };
}

export async function queryChats(user_id) {
  let result = [];
  let error = null;

  try {
    const chatsRef = collection(db, "chats");
    const q = query(
      chatsRef,
      or(where("from", "==", user_id), where("to", "==", user_id))
    );

    const querySnapshot = await getDocs(q);
    const chatDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    for (const chat of chatDocs) {
      const messagesRef = collection(db, "chats", chat.id, "messages");
      const messagesSnapshot = await getDocs(messagesRef);

      const messages = messagesSnapshot.docs.map((msgDoc) => ({
        id: msgDoc.id,
        ...msgDoc.data(),
      }));

      result.push({
        chatId: chat.id,
        ...chat,
        messages,
      });
    }
  } catch (e) {
    console.log("Error fetching documents:", e);
    error = e;
  }

  return { result, error };
}
