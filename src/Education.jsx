import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center px-6 md:px-20 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-cyan-400"
      >
        Education
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12 items-start md:items-center justify-between max-w-6xl mx-auto">
        {/* Text Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-[52%] space-y-6 text-base md:text-lg text-gray-300 bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800"
        >
          <p>
            <span className="text-cyan-400 font-semibold">12th:</span> APS School, 2024 — Scored 77%
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">BCA:</span> JECRC University, 2024 - 2027 (Present)
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">1st Year CGPA:</span> 8.0
          </p>
        </motion.div>

        {/* Visual Box */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-[42%] h-[250px] w-full rounded-2xl bg-zinc-900 shadow-xl border border-zinc-800 flex items-center justify-center"
        >
          <div className="text-cyan-200 text-2xl font-medium tracking-wide">
            🎓 Learning in Progress
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
