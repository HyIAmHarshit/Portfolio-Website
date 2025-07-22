import React from 'react';

const WorkoutSection = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white px-4 py-16 flex flex-col items-center justify-center">
      
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 animate-pulse tracking-wide">
        Workout Sections
      </h2>

      {/* Content Blocks */}
      <div className="flex flex-col gap-16 w-full max-w-6xl">

        {/* Cardio Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Left */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-semibold text-orange-400 mb-4">Cardio</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Boost your heart health, burn calories, and improve endurance with our high-intensity cardio workouts designed for all levels.
            </p>
          </div>

          {/* Image Right */}
          <div className="md:w-1/2">
            <img
              src="https://cdn.bhdw.net/im/beautiful-woman-working-out-with-rope-in-gym-wallpaper-91989_w635.webp"
              alt="Cardio Workout"
              className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-700"
            />
          </div>
        </div>

        {/* Strength Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Text Right */}
          <div className="md:w-1/2 text-left md:text-right">
            <h3 className="text-3xl font-semibold text-orange-400 mb-4">Strength</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Build muscle, increase power, and sculpt your body with strength training sessions using advanced equipment and guidance.
            </p>
          </div>

          {/* Image Left */}
          <div className="md:w-1/2">
            <img
              src="https://as1.ftcdn.net/v2/jpg/04/31/55/92/1000_F_431559277_rkkDdPgYlypnPwf4EoDIlvkVDiWNBBft.jpg"
              className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSection;
