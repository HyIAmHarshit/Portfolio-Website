import React from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/AboutMe.jpg";

function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white py-16 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
        {/* Image Box */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-teal-500 w-[300px] sm:w-[380px] h-[220px] sm:h-[250px] bg-zinc-900">
            <img
              src={profilePic}
              alt="Harshit"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Box */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 bg-zinc-900 border-l-4 border-teal-500 rounded-2xl p-6 shadow-lg"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
            Hello! I’m{" "}
            <span className="text-teal-400 font-semibold">Harshit Khandelwal</span>, a MERN stack developer focused on crafting modern, responsive, and clean web apps. I’m enthusiastic about new technologies and enjoy building projects that are both functional and visually appealing. Always ready to learn, collaborate, and innovate.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
