import React from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "../data/reviewsData";

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Reviews
        </h2>
        <p className="mt-4 text-gray-600">
          Hear from our happy clients who have experienced the benefits
          firsthand.
        </p>

        {/* Reviews Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
