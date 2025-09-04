import React from "react";

const Map = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Here’s where we’re located 👇</h1>

      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Jayanagar Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.821713876118!2d77.58584611482252!3d12.925631819472244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c331afef9f%3A0x8b07d0aa725a9e8f!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691248363412!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
