import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function HeroSection() {
  const fullText = "FIITNESS";
  const [displayedLetters, setDisplayedLetters] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLetters((prev) => [...prev, fullText[index]]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-16 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-zinc-950 z-50 px-4 md:px-16 shadow-md border-b border-zinc-800">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-bold text-red-500 tracking-widest">
            RR FITNESS
          </div>

          {/* Hamburger for small screens */}
          <div className="md:hidden text-xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Menu for medium+ screens */}
          <div className="hidden md:flex items-center gap-4">
            {['Home', 'Plans', 'Location', 'Contact Us'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="px-4 py-2 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition text-sm md:text-base"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl font-semibold transition shadow-md text-sm md:text-base"
            >
              Admin
            </a>
          </div>
        </div>

        {/* Menu for small screens */}
        {menuOpen && (
          <div className="md:hidden flex flex-wrap justify-center gap-3 pb-4 transition-all duration-300">
            {['Home', 'Plans', 'Location', 'Contact Us'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="px-4 py-2 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition text-sm"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl font-semibold transition shadow-md text-sm"
            >
              Admin
            </a>
          </div>
        )}
      </nav>

      {/* Main Hero Section */}
      <div className="pt-32 md:pt-40 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left border-l-4 border-red-500 pl-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8"
          >
            RR{' '}
            <span className="text-red-500 inline-flex">
              {displayedLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#location"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition shadow-lg text-sm md:text-base"
            >
              Location
            </a>
            <a
              href="#contact"
              className="border border-red-500 px-6 py-3 rounded-xl hover:bg-red-600 transition font-semibold text-sm md:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 border-4 border-red-500 rounded-2xl overflow-hidden shadow-[inset_0_0_30px_rgba(239,68,68,0.5)] max-w-full"
        >
          <img
            src="https://images.wallpaperscraft.com/image/single/gym_dumbbells_inventory_219519_3840x2400.jpg"
            alt="Gym"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
