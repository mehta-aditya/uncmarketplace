"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";

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
    return router.push("/");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Page;

function signUp() {
  return(
    <div class="mx-auto px-4 max-w-4xl">
        <div class="flex justify-center">
            <div class="w-full lg:w-3/4">
                <h2 class="text-2xl font-semibold text-center mb-8">Create Your Account</h2>
                <div class="mb-6 text-center">
                    <div>
                    <label for="Username" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Enter Username</label>
                    <input type="text" id="username" class="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Chloe Smith" required />
                    </div>
                    <div>
                    <label for="Password" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Enter Password</label>
                    <input type="text" id="password" class="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Squirrel123" required />
                    </div>
                    <div>
                    <label for="Confirm Your Password" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Confirm Password</label>
                    <input type="text" id="confirm password" class="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="***********" required />
                    </div>
                    <div>
                    <label for="Email" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Enter Your Email</label>
                    <input type="text" id="email" class="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-blue dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="csmith@unc.edu" required />
                    </div>
                    <img class="w-64 mx-auto" src="img/UNC-Logo.jpg" alt="University of North Carolina at Chapel Hill"/>
                    <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                    <input id="confirmation" type="confirmation box" value="" class="w-4 h-4 border border-black-230 rounded bg-black-50 focus:ring-3 focus:ring-blue-300 dark:bg-black-700 dark:border-black-600 dark:focus:ring-blue-600 dark:ring-offset-black-800" required />
                    </div>
                  <label for="remember" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                </div>
              </div>
            </div>
        </div>

  );
}
