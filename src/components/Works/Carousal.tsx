"use client"
import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// Sample project data (replace this with your actual project data)
const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: '/project1.jpg',
    text: 'Description of Project 1',
  },
  {
    id: 2,
    title: 'Project 2',
    image: '/project2.jpg',
    text: 'Description of Project 2',
  },
  // Add more projects here...
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? projects.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === projects.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative overflow-hidden ">
      <div className="flex  transition-transform duration-300" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {projects.map((project) => (
          <div key={project.id} className="w-full flex-none p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={handlePrevSlide}
      >
        <BsChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={handleNextSlide}
      >
        <BsChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default Carousel;
