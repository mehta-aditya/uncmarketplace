import Image from "next/image";
import Link from "next/link";
import "./CSS/homepg.css";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl mb-4">Welcome to Tar Heel Trade!</h1>
        <h2 className="text-lg mb-8">
          Click <Link href="/signin" className="text-blue-500 underline">here</Link> to sign in!
        </h2>
        <div className="picbg flex justify-center">
          <Image src="/rammybg.png" alt="rammy" layout="intrinsic" width={500} height={300} />
        </div>
      </main>
    </>
  );
}
