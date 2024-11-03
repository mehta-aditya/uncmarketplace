"use client";
import { useState, useContext } from "react";
import { uploadPost } from "@/firebase/storage/uploadPost";
import { useAuthContext } from "@/context/AuthContext";
import "../CSS/postpage.css";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Clothing");
  const { user } = useAuthContext();
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    await uploadPost(
      user.uid,
      "placeholder title",
      image,
      price,
      description,
      category
    );
    router.push("/marketplace");
  };

  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user]);

  return (
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
        <div className="container">
          <form onSubmit={handleForm}>
            <div className="">
              <h1 id="title" className="text-center font-extrabold text-2xl">
                Design Your Post{" "}
              </h1>
              <p id="description" className="description text-center"></p>
              <input
                type="file"
                multiple={true}
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            <div className="userprice">
              <label id="number-label" required>
                Price
              </label>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                id="number"
                min="0"
                max="99999"
                className="form-control"
                placeholder="30"
                required
              />
            </div>

            <div className="userinput">
              <p>Item Category?</p>
              <select
                id="dropdown"
                name="role"
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option disabled value>
                  Select an option
                </option>
                <option>Clothing</option>
                <option>Technology</option>
                <option>School Supplies</option>
                <option>Miscellaneous</option>
              </select>
            </div>

            <div className="userinput">
              <p>Description?</p>
              <textarea
                className="input-textarea"
                name="comment"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="2020 Apple Macbook Air; Gently used; 16gb 256 ssd. Contact #: 704-xxx-xxx"
                required
              ></textarea>
            </div>
            <div className="userinput">
              <button type="submit" id="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Page;
