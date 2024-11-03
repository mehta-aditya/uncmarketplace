"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import "../CSS/logon.css";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    return router.push("/signin");
  };
  return (
    <div>
      <header>
        <a href="/homepage">Home</a>
      </header>
      <div className="form-wrapper">
        <h1>Sign up</h1>
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
