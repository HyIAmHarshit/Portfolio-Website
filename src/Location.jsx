import React from "react";

const Location = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-950 flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
      {/* Left Circle Image */}
      <div className="flex justify-center items-center">
        <img
          src="src/assets/map.png"
          alt="Map Location"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-orange-400 shadow-lg"
        />
      </div>

      {/* Right Text Box */}
      <div className="bg-zinc-900 border-2 border-gray-700 rounded-2xl p-8 shadow-xl max-w-md w-full text-center md:text-left">
        <h2 className="text-3xl font-bold text-orange-300 mb-4">Our Location</h2>
        <p className="text-lg text-gray-300 mb-6">
          RR Fitness Gym, Near Alpha Market, JECRC University Road, Jaipur - 302022
        </p>
        <button className="mt-2 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
          View on Map
        </button>
      </div>
    </section>
  );
};

export default Location;
