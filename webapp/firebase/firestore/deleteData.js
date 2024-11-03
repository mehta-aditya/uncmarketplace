import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export async function deleteData(collectionName, docId) {
  try {
    await deleteDoc(doc(db, collectionName, docId));
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
