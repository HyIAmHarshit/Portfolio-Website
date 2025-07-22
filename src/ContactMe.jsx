import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white py-20 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 text-white"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          <p className="mb-4">
            Have a project in mind or looking to hire a developer? I'm always excited to work on something new and bring ideas to life.
          </p>
          <p>
            Feel free to get in touch by filling out the form. Let's collaborate and build something amazing together.
          </p>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md outline-none focus:ring-2 focus:ring-cyan-600 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 rounded-md transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactMe;
