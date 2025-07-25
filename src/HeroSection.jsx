import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Menu, X } from "lucide-react";
import profilePic from "./assets/profile.jpg";
import { motion } from "framer-motion";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Nav items with matching hrefs
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact Me", link: "#contact" },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white" id="home">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-lg bg-zinc-900/60 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-widest text-teal-400">
          Harshit.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className="hover:text-teal-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/90 backdrop-blur px-6 py-4 space-y-3 shadow-lg">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)} // close menu on click
                className="block text-gray-300 hover:text-teal-400 transition"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-20 gap-12 max-w-6xl mx-auto">
        {/* Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Hi, I’m <span className="text-teal-400">Harshit</span> 👋
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-300">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Enthusiast",
                "Tailwind CSS Expert",
                "MERN Stack Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto md:mx-0">
            I design and develop modern websites with clean code and beautiful
            UI. Passionate about building full-stack projects and solving
            real-world problems through code.
          </p>
          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 hover:bg-teal-600 transition px-6 py-2 text-white rounded-lg shadow-md"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-teal-500 overflow-hidden shadow-xl bg-zinc-900">
            <img
              src={profilePic}
              alt="Harshit Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
