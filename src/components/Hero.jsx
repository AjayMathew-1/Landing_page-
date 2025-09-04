import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null); // new ref for button

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(headingRef.current, { y: 0, opacity: 1, duration: 3 })
      .to(subtextRef.current, { y: 0, opacity: 1, duration: 2 }, "-=1")
      .to(buttonRef.current, { y: 0, opacity: 1, duration: 1.5 }, "-=0.5"); // animate button
  }, []);

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url('/BackGroundImage.jpg')] bg-cover bg-no-repeat min-h-screen text-center overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1
          ref={headingRef}
          className="opacity-0 translate-y-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-snug drop-shadow-lg"
        >
          Unlock the <span className="text-blue-800">Power</span> of Real Estate Data
        </h1>

        <p
          ref={subtextRef}
          className="opacity-0 translate-y-8 mt-6 text-lg sm:text-xl text-white drop-shadow"
        >
          Gain deep location insights, manage portfolios, and streamline
          property onboarding with our SaaS platform.
        </p>

        <button
          ref={buttonRef}
          className="opacity-0 translate-y-8 mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
