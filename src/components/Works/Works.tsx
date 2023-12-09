import Link from "next/link";
import MasonryLayout from "./MasonryLayout";
export default function Works() {
  return (
    <main className=" bg-white ">
      <div className="max-w-7xl mx-auto  px-6 md:p-16 py-12">
        <p className=" text-4xl md:text-6xl font-semibold text-zinc-900 tracking-tight">
          Projects
        </p>
        <p className="text-3xl md:text-5xl text-zinc-300 font-semibold  tracking-tight">
          I've worked on
        </p>

        <div className="mt-10 md:mt-12 mb-5 dark: border-b  border-zinc-300"></div>
        <div>
          <p className="text-2xl md:text-4xl font-semibold text-zinc-800 mb-3 tracking-tight">
            Broadcast.
          </p>
          <p className="text-lg md:text-lg text-zinc-500 max-w-xl mb-6 ">
            Created an interactive social media platform for sharing content and
            connecting with users in real time.
          </p>
        </div>

        <Link
          href="/"
          className=" text-center   px-9 w-full py-2.5  text-white font-semibold  bg-zinc-900 rounded-full"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
}
