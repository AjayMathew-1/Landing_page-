import React from "react";

const CTASection = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 flex justify-center">
      <div className="w-full max-w-5xl bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl shadow-lg text-center text-white py-12 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to Transform Your Real Estate Strategy?
        </h2>
        <p className="mt-4 text-lg sm:text-xl opacity-90">
          Join thousands of successful investors and agents using our platform
          to make smarter, data-driven decisions.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
};

export default CTASection;
