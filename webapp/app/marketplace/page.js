"use client";
import "../CSS/styles.css";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import queryCategories from "@/firebase/firestore/queryCategories";

function Posting({ image_uri, name, price }) {
  return (
    <main>
      <label>
        <section id="postings">
          <div>
            {image_uri && (
              <Image
                src={image_uri}
                alt={name}
                height={250}
                width={250}
                unoptimized
              />
            )}
          </div>
        </section>
        <label>
          <strong>{price}</strong>
          <label className="pricelabel">
            <em>{name}</em>
          </label>
        </label>
      </label>
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
      <h1>Tar Heel Trade</h1>
      <hr />
      <header>
        <nav>
          <div id="sidenav">
            <ul>
              <li>
                <a
                  href="#"
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
                <a href="/listing">Make Posting</a>
              </li>
              <li>
                <a href="#">Sign Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <ul>
        {listingArr.length > 0 &&
          listingArr.map((listing) => (
            <li key={listing.id}>
              <Posting
                image_uri={listing.fileid}
                name={listing.description}
                price={"$"+listing.price}
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default Page;
