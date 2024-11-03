"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

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
    <div className="flex items-center justify-center min-h-screen bg-[#4b9cd3] font-sans text-[#13294b]">
      <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <a href="/">
            <p className="text-xl text-[#13294b] hover:underline">Home 🏠</p>
          </a>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <form onSubmit={handleForm} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-left font-semibold mb-1"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b9cd3]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-left font-semibold mb-1"
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b9cd3]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-[#13294b] rounded hover:bg-[#0d1f3c] focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
