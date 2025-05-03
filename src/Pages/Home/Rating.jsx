import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const totalStar = 5;

  return (
    <div className="flex mx-auto">
      {Array.from({ length: totalStar }, (_, index) => {
        const starNumber = index + 1;

        if (rating >= starNumber) {
          // full star
          return <FaStar key={index} className="text-yellow-500" />;
        } else if (rating >= starNumber - 0.5) {
          // half star
          return <FaStarHalfAlt key={index} className="text-yellow-500" />;
        } else {
          // Empty Star
          return <FaRegStar key={index} className="text-yellow-500" />;
        }
      })}
    </div>
  );
};

export default Rating;
