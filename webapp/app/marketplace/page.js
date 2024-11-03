"use client";
import "../CSS/styles.css";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
          <section className="postings">
            <div></div>
          </section>
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

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <>
      <h1>Tar Heel Trade</h1>
      <hr></hr>
      <header>
        <nav>
          <div id="sidenav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Clothes</a>
              </li>
              <li>
                <a href="#">Tech</a>
              </li>
              <li>
                <a href="#">School Supplies</a>
              </li>
              <li>
                <a href="#">Sign Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Posting
        image_uri="https://t3.ftcdn.net/jpg/05/63/11/94/360_F_563119416_FYsrymsf3cf7pzkPufCgmFkF40Ea6kzy.jpg"
        name="ram painting"
        price="$100000"
      />
    </>
  );
}

export default Page;
