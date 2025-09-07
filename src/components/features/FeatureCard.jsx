import React, { useRef } from "react";
import { gsap } from "gsap";

const FeatureCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      rotationY: 180,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="w-full h-64 sm:h-72 md:h-80 perspective"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-3xl shadow-lg transform-style-preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl backface-hidden border border-blue-100 p-6">
          {/* Gradient Circle for Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-400 shadow-md text-white text-2xl">
            {icon}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
            {title}
          </h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-3xl backface-hidden border border-blue-100 transform rotate-y-180 p-6 text-center shadow-inner">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
