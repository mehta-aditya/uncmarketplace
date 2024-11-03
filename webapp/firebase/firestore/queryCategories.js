import firebase_app from "../config.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(firebase_app, "uncmarket");

export default async function queryCategories(category) {
  let result = [];
  let error = null;

  try {
    const postsRef = collection(db, "posts");
    const q =
      category != ""
        ? query(postsRef, where("category", "==", category))
        : query(postsRef);

    const querySnapshot = await getDocs(q);
    result = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.log("Error fetching documents:", e);
    error = e;
  }

  return { result, error };
}
