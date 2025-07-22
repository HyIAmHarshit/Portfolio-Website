import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 animate-pulse tracking-wide">
        ABOUT US
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full">
        {/* Image Left */}
        <div className="w-full md:w-1/2">
          <img
            src="https://as1.ftcdn.net/jpg/06/08/15/96/1000_F_608159635_oQ0NJZIj1XCGlSaptlc0m1g0jb5M1SL8.webp"
            alt="Gym Motivation"
            className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-700"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 p-6 bg-zinc-900 rounded-2xl shadow-lg border border-gray-800 text-lg leading-8 tracking-wide">
          <p>
            At <span className="font-semibold text-orange-400">RR FITNESS</span>, we are dedicated to helping you reach your fitness goals with modern equipment, expert trainers, and a motivating environment. Whether you're a beginner or a pro, we’ve got your back.
          </p>
          <p className="mt-4">
            Join us and transform your body and mind. Because at RR Fitness, it's not just a workout – it's a lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
