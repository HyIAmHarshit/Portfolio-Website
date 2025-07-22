import React from "react";
import { motion } from "framer-motion";
import gymImg from "./assets/gym.jpg";
import listing from "./assets/listing.png";
import quiz from "./assets/quiz.jpg";
import spotify from "./assets/spotify.png"
// Project Data
const projects = [
  {
    title: "GYM-WEBSITE",
    description: "A responsive Gym site built with React and TailwindCSS.",
    img: gymImg,
    demoLink: "https://rrfitness.vercel.app/",
  },
  {
    title: "Explorer",
    description: "A full-stack Home Listing app with CRUD operations and MongoDB.",
    img: listing,
    demoLink: "https://bexplorer.up.railway.app/listings",
  },
  {
    title: "QUIX APP",
    description: "A Quiz website with HTML, CSS, and JS.",
    img: quiz,
    demoLink: "https://hyiamharshit.github.io/Quiz-App/",
  },
  {
    title: "Spotify Clone",
    description: "A Spotify Clone with HTML and CSS and JS.",
    img: spotify,
    demoLink: "https://hyiamharshit.github.io/Spotify-Clone/",
  },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white py-20 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 text-white"
      >
        Projects
      </motion.h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-900 rounded-2xl shadow-md hover:shadow-cyan-600/30 transition border border-zinc-800 p-6 flex gap-6 items-center min-h-[220px]"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-36 h-36 object-cover rounded-xl"
            />

            {/* Right Side Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-base text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md font-medium transition"
              >
                View Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
