import React from 'react';
import Link from 'next/link';
import ProjectCards from './ProjectCard';
const projects = [
    {
        id: 1,
        title: 'Sociuus',
        subtitle: 'Social Media App',
        description: 'A simple social media app built with next js, planetscale, clerk, tailwind and redis.',
        image: 'hero.webp',
    },
    {
        id: 1,
        title: 'Entropy',
        subtitle: 'Social Media App',
        description: 'This is the description of Project 2.',
        image: 'amie.png',
    },



];
const MasonryLayout = () => {
    return (
        <div className='mb-32'>
            <div className="mx-auto w-screen max-w-3xl px-8 sm:px-9 xl:max-w-5xl xl:px-0 pt-32  ">

                <div className="flex cursor-default flex-col space-y-4 ">
                    <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl dark:text-white">
                        Projects
                    </h1>
                    <h2 className="text-3xl font-medium opacity-70  sm:text-6xl md:text-6xl xl:text-5xl">
                        Playing with the web.
                    </h2>
                </div>
            </div>
            <div className="py-16 px-4 ">
                <div className=" m-auto max-w-[65rem] ">

                    <div className=" gap-8 space-y-28 ">

                        {projects.map((project) => (
                            <ProjectCards
                                key={project.id}
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                image={project.image}
                            />
                        ))}




                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasonryLayout;
