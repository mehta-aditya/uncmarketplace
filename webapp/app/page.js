import Image from "next/image";
import Link from "next/link";
import "./CSS/homepg.css";

export default function Home() {
  return (
    <>
      <body>
        <h1>Welcome to Tar Heel Trade!</h1>
        <h2>
          Click <a href="/signin">here</a> to sign in!
        </h2>
        <div class="picbg flex">
          <img src="/rammybg.png" alt="rammy"/>
        </div>
      </body>
    </>
  );
}
