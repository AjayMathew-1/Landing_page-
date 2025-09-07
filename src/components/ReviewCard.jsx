import React from "react";
import { ThumbsUp, ThumbsDown, Star } from "lucide-react";

const ReviewCard = ({ avatar, name, date, text, rating, likes, dislikes }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-left">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        {/* Rating */}
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-blue-500 fill-blue-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-gray-600">{text}</p>

      {/* Likes & Dislikes */}
      <div className="flex space-x-6 mt-4 text-gray-500">
        <div className="flex items-center space-x-1">
          <ThumbsUp className="w-5 h-5" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <ThumbsDown className="w-5 h-5" />
          <span>{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
