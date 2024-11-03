import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";
import firebase_app from "@/firebase/config";
import addData from "../firestore/addData";

//uid, title, picture, price, description, and category

const storage = getStorage(firebase_app);

export async function uploadPost(
  uid,
  title,
  file,
  price,
  description,
  category
) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          addData("/posts", {
            uid: uid,
            title: title,
            fileid: downloadURL,
            price: price,
            description: description,
            category: category,
          }).then(resolve(downloadURL));
        });
      }
    );
  });
}
