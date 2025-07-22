import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-4 flex flex-col items-center justify-center gap-4">
      {/* Footer Title */}
      <h2 className="text-2xl font-semibold tracking-wider text-orange-400">
        Harshit Khandelwal
      </h2>

      {/* Social Icons */}
      <div className="flex gap-6 text-2xl mt-2">
        <a
          href="https://github.com/HyIAmHarshit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/harshit-khandelwal-126776312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 mt-4">
        © 2025 <span className="text-orange-400">DevHarshit</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
