import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#92bbcf]">
      <h1 className="text-4xl mb-4">Welcome to Tar Heel Trade!</h1>
      <h2 className="text-lg mb-8">
        Click{" "}
        <Link href="/signin" className="text-blue-500 underline">
          here
        </Link>{" "}
        to sign in!
      </h2>
      <h2 className="text-lg mb-8">
        Click{" "}
        <Link href="/signup" className="text-blue-500 underline">
          here
        </Link>{" "}
        to SIGN UP!
      </h2>

      <div className="flex justify-center">
        <Image
          src="/rammybg.png"
          alt="rammy"
          layout="intrinsic"
          width={500}
          height={300}
        />
      </div>
    </main>
  );
}
