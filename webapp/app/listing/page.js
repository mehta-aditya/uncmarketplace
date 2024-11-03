"use client";
import { useState, useContext } from "react";
import { uploadPost } from "@/firebase/storage/uploadPost";
import { useAuthContext } from "@/context/AuthContext";

function Page() {
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useAuthContext();

  const handleForm = async (event) => {
    event.preventDefault();
    uploadPost(
      user.uid,
      "placeholder title",
      image,
      price,
      description,
      category
    );
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="container">
          <h1 id="title" className="text-center">
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
  );
}

export default Page;
