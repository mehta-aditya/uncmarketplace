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

    // else successful
    console.log(result);
    return router.push("/signin");
  };
  return (
    <div>
      <header><a href="/homepage">Home</a></header>
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

function SU() {
  return (
    <div className="mx-auto px-4 max-w-4xl">
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Create Your Account
          </h2>
          <div className="mb-6 text-center">
            <div>
              <label
                for="Username"
                className="block mb-2 text-sm font-medium text-white-900 dark:text-black"
              >
                Enter Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Chloe Smith"
                required
              />
            </div>
            <div>
              <label
                for="Password"
                className="block mb-2 text-sm font-medium text-white-900 dark:text-black"
              >
                Enter Password
              </label>
              <input
                type="text"
                id="password"
                className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Squirrel123"
                required
              />
            </div>
            <div>
              <label
                for="Confirm Your Password"
                className="block mb-2 text-sm font-medium text-white-900 dark:text-black"
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="confirm password"
                className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="***********"
                required
              />
            </div>
            <div>
              <label
                for="Email"
                className="block mb-2 text-sm font-medium text-white-900 dark:text-black"
              >
                Enter Your Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="csmith@unc.edu"
                required
              />
            </div>
            <img
              className="w-64 mx-auto"
              src="img/UNC-Logo.jpg"
              alt="University of North Carolina at Chapel Hill"
            />
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="confirmation"
                  type="confirmation box"
                  value=""
                  className="w-4 h-4 border border-black-230 rounded bg-black-50 focus:ring-3 focus:ring-blue-300 dark:bg-black-700 dark:border-black-600 dark:focus:ring-blue-600 dark:ring-offset-black-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-black-900 dark:text-black-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
