"use client";
import "../CSS/styles.css";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import queryCategories from "@/firebase/firestore/queryCategories";
import { startChat } from "@/firebase/firestore/chatStore";

function Posting({ image_uri, description, price, uid, pid, lid }) {
  const router = useRouter();
  return (
    <main className="relative">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          uid != pid
            ? () => {
                startChat(uid, pid, lid, description);
                router.push("/chats");
              }
            : true;
        }}
      >
        <section id="postings" className="group">
          <div className="relative">
            {image_uri && (
              <Image
                src={image_uri}
                alt={description}
                height={135}
                width={240}
                unoptimized
                className="transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {uid == pid ? (
                <span className="text-white text-lg font-semibold">
                  Your Post
                </span>
              ) : (
                <>
                  <span className="text-white text-lg font-semibold">
                    Start Chat
                  </span>
                </>
              )}
            </div>
          </div>
        </section>
        <label className="mt-2 text-center">
          <strong>{price}</strong>
          <label className="block text-gray-700">
            <em>{description}</em>
          </label>
        </label>
      </div>
    </main>
  );
}

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [listingArr, setListingArr] = React.useState([]);
  const runQuery = async (category) => {
    const arr = await queryCategories(category);
    console.log(arr);
    setListingArr(arr.result);
  };

  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    } else {
      runQuery("");
    }
  }, [user]);

  return (
    <>
      <h1 className="text-4xl">Tar Heel Trade</h1>
      <hr />
      <header>
        <nav>
          <div id="sidenav">
            <ul>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    runQuery("");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    runQuery("Clothing");
                  }}
                >
                  Clothes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    runQuery("Technology");
                  }}
                >
                  Tech
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    runQuery("School Supplies");
                  }}
                >
                  School Supplies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    runQuery("Miscellaneous");
                  }}
                >
                  Miscellaneous
                </a>
              </li>

              <li>
                <p className="text-white"> | </p>
              </li>

              <li>
                <a href="/listing">Make Posting</a>
              </li>
              <li>
                <a href="/chats">Chats</a>
              </li>
              <li>
                <a href="/">Sign Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {listingArr.length > 0 &&
          listingArr.map((listing) => (
            <Posting
              image_uri={listing.fileid}
              description={listing.description}
              price={"$" + listing.price}
              key={listing.id}
              uid={user.uid}
              lid={listing.id}
              pid={listing.uid}
            ></Posting>
          ))}
      </main>
    </>
  );
}

export default Page;
