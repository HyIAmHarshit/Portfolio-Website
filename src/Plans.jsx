import React from 'react';

const plans = [
  {
    price: "₹1000",
    duration: "1 Month",
    image: "https://as2.ftcdn.net/v2/jpg/07/40/66/79/1000_F_740667928_1aLv81FioKsEort10CDta4gREzRA2snD.jpg"
  },
  {
    price: "₹2000",
    duration: "2 Months",
    image: "https://as1.ftcdn.net/v2/jpg/08/27/87/60/1000_F_827876077_k0EWo3jSiWZPR8fRgsSbZFT9SkrozNuj.jpg"
  },
  {
    price: "₹3000",
    duration: "3 Months",
    image: "https://as1.ftcdn.net/v2/jpg/06/74/96/46/1000_F_674964630_8sbi0HVwMwGPLPSg3w2CRq0kPKFUO5LR.jpg"
  },
];

const PlansSection = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white px-4 py-20 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center animate-bounce text-orange-400 tracking-wide">
        Our Exclusive Plans
      </h2>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-zinc-900 border-2 border-gray-700 rounded-2xl shadow-xl p-8 flex flex-col justify-between items-center transform transition-transform duration-500 hover:scale-105 hover:border-orange-500"
          >
            {/* Price */}
            <h3 className="text-4xl font-bold text-orange-300 mb-4">{plan.price}</h3>

            {/* Duration */}
            <p className="text-xl text-gray-300 mb-2">{plan.duration}</p>

            {/* Extra Note */}
            <p className="text-sm text-gray-400 mb-6">+ ₹500 if Cardio Included</p>

            {/* Image */}
            <img
              src={plan.image}
              alt={`Plan ${plan.duration}`}
              className="w-full h-48 object-cover rounded-lg border border-gray-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
