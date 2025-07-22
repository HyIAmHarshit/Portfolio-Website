import React from 'react';

const Form = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white px-6 py-20 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-orange-400 mb-16 text-center tracking-wide">
        Contact Us
      </h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl gap-10">
        
        {/* Left Text Box */}
        <div className="flex-1 bg-zinc-900 border-2 border-gray-700 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-semibold text-orange-300 mb-4">Let’s Talk Fitness!</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Ready to transform your body and mind? Reach out now, and let's build your fitness journey together.
          </p>
          <p className="mt-4 text-gray-400 italic">
            We usually respond within 24 hours.
          </p>
        </div>

        {/* Right Form Box */}
        <div className="flex-1 bg-zinc-900 border-2 border-gray-700 rounded-2xl p-8 shadow-xl">
          <form className="flex flex-col space-y-6">
            <div>
              <label className="block text-sm text-orange-300 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm text-orange-300 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                placeholder="Enter your phone"
              />
            </div>
            <div>
              <label className="block text-sm text-orange-300 mb-1">Gmail</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm text-orange-300 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
