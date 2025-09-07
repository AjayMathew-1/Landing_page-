import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "../../data/featuresData.jsx";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Features Built for Success
        </h2>
        <p className="mt-4 text-gray-600">
          Explore the powerful tools PropertyPulse offers to help you manage your
          real estate business efficiently, from lead to close.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
