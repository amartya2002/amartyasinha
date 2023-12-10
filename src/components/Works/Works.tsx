import Link from "next/link";
import projectDetails from "@/data/projectDetails.json";

export default function Works() {
  return (
    <main className=" bg-white ">
      <div className="max-w-7xl mx-auto  px-6 md:p-16 py-12">
        <p className=" text-4xl md:text-6xl font-semibold text-zinc-900 tracking-tight">
          Projects
        </p>
        <p className="text-3xl md:text-5xl text-zinc-300 font-semibold  tracking-tight">
          I&apos;ve worked on
        </p>

        <div className="mt-10 md:mt-12 mb-5 dark: border-b  border-zinc-300"></div>

        {projectDetails.map((project, index) => (
          <div key={index} className="w-full">
            <p className="text-2xl md:text-4xl font-semibold text-zinc-800 mb-3 tracking-tight">
              {project.title}
            </p>
            <p className="text-lg md:text-lg text-zinc-500 max-w-xl mb-6 ">
              {project.smallDescription}
            </p>
            <Link
              href={project.githubLink}
              target="_blank"
              className=" text-center px-9 w-full py-2.5  text-white font-semibold  bg-zinc-900 rounded-full hover:scale-105 shadow-md duration-200"
            >
              Learn More &#x27A3;
            </Link>
            <div className="mt-8 md:mt-10 mb-5 dark: border-b  border-zinc-300"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
