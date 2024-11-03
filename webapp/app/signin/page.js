"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import "../CSS/logon.css";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/marketplace");
  };

  return (
    <div>
      <header>
        <a href="/">
          <p className="text-white">Home 🏠</p>
        </a>
      </header>
      <div className="form-wrapper">
        <h1>Sign In</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleForm}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
