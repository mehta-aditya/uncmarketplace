"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navbarLinks = [
    {
      name: "Sign In",
      href: "/signin",
    },
    {
      name: "Sign Up",
      href: "/signup",
    },
  ];

  return (
    <>
      <div className="font-mono flex-col flex bg-secondary text-white bg-blue-200">
        <div className="flex justify-between items-center h-16 p-10 py-16 mr-1">
          <div className="cursor-pointer tracking-widest">
            <Link href="/" className="lg:text-5xl text-2xl">
              Tar Heel Trade
            </Link>
          </div>

          <div className="items-center block">
            {navbarLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="tracking-wider
                hover:text-white-500 ml-10 hover:underline hidden lg:inline text-3xl"
              >
                {link.name}
              </Link>
            ))}

            {dropdownOpen ? (
              <div
                className="lg:hidden cursor-pointer hover:scale-110 transition"
                onClick={() => setDropdownOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="white"
                    d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.7a1 1 0 1 0-1.42 1.42L10.59 12 5.7 16.88a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L12 13.41l4.88 4.89a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l4.89-4.88a1 1 0 0 0 0-1.41z"
                  />
                </svg>
              </div>
            ) : (
              <div
                className="lg:hidden cursor-pointer hover:scale-110 transition"
                onClick={() => setDropdownOpen(true)}
              >
                <svg
                  width="43"
                  height="32"
                  viewBox="0 0 48 37"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="7.67925" rx="3.83962" fill="white" />
                  <rect
                    y="13.9623"
                    width="48"
                    height="7.67925"
                    rx="3.83962"
                    fill="white"
                  />
                  <rect
                    y="29.3207"
                    width="48"
                    height="7.67925"
                    rx="3.83962"
                    fill="white"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        {dropdownOpen && (
          <div className="flex flex-col pb-5 lg:hidden text-2xl">
            {navbarLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="px-5 py-2 hover:bg-baseDark hover:text-white mb-2 mx-2 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
