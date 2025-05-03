import React from 'react'
import DiscoutnImg1 from "../../assets/card-1.png"
import DiscoutnImg2 from "../../assets/card-2.png"
import DiscoutnImg3 from "../../assets/card-3.png";

const Discount = () => {
  return (
    <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        className="py-30 bg-cover pl-50 "
        style={{ backgroundImage: `url(${DiscoutnImg1})` }}
      >
        <p className="text-xl font-semibold text-red-500">2025 Trend</p>
        <h2 className="text-3xl font-bold">Womens Shirt</h2>
        <button className="underline text-xl font-semibold cursor-pointer">
          Discover More+
        </button>
      </div>
      <div
        className="py-30 pl-60 bg-cover "
        style={{ backgroundImage: `url(${DiscoutnImg2})` }}
      >
        <p className="text-xl font-semibold text-red-500">2025 Trend</p>
        <h2 className="text-3xl font-bold">Womens Shirt</h2>
        <button className="underline text-xl font-semibold cursor-pointer">
          Discover More+
        </button>
      </div>
      <div
        className="py-30 pl-60 bg-cover "
        style={{ backgroundImage: `url(${DiscoutnImg3})` }}
      >
        <p className="text-xl font-semibold text-red-500">2025 Trend</p>
        <h2 className="text-3xl font-bold">Womens Shirt</h2>
        <button className="underline text-xl font-semibold cursor-pointer">
          Discover More+
        </button>
      </div>
    </div>
  );
}

export default Discount