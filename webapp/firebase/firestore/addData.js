import firebase_app from "../config.js";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app, "uncmarket");

export default async function addData(collectionName, data) {
  let result = null;
  let error = null;

  try {
    const docRef = doc(collection(db, collectionName));
    result = await setDoc(docRef, data);
  } catch (e) {
    console.log(e);
    error = e;
  }

  return { result, error };
}
