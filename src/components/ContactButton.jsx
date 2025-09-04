import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Phone, Facebook, Instagram } from "lucide-react";

const ContactButton = () => {
  const contactRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Initial entrance animation
    gsap.to(contactRef.current, {
      bottom: "2.5rem",
      right: "2.5rem",
      left: "auto",
      xPercent: 0,
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 2,
      ease: "power2.inOut",
      delay: 1,
    });
  }, []);

  return (
    <div
      ref={contactRef}
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 scale-0 opacity-0 z-20 
      flex items-center justify-center cursor-pointer transition-all duration-500 shadow-lg 
      bg-gradient-to-r from-blue-500 to-teal-400 overflow-hidden
      ${hovered ? "w-56 h-16 rounded-xl" : "w-14 h-14 rounded-full"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated Border Effect */}
      <div
        className={`absolute inset-0 rounded-xl border-2 border-transparent 
        ${hovered ? "animate-border-spin border-gradient" : ""}`}
      ></div>

      {hovered ? (
        <div className="flex items-center justify-around w-full px-4 text-white relative z-10">
          <span className="font-semibold">Contact Us</span>
          <Phone className="w-5 h-5 hover:scale-125 transition" />
          <Instagram className="w-5 h-5 hover:scale-125 transition" />
          <Facebook className="w-5 h-5 hover:scale-125 transition" />
        </div>
      ) : (
        <span className="text-white font-bold text-xl relative z-10">+</span>
      )}
    </div>
  );
};

export default ContactButton;
