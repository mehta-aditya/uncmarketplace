import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app, "uncmarket");

export default async function getData(collection, id) {
  const docRef = doc(db, collection, id);
  let result = null;
  let error = null;


  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      result = docSnap.data();
    } else {
      error = new Error("No such document!");
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
