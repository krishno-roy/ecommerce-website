import React from 'react'
import Heroimg from "../../assets/header.png";
const Hero = () => {
  return (
    <section className="container mx-auto px-12 rounded bg-[#f4e5ec]">
      <div className="pt-10 flex justify-between items-center">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-red-600 text-2xl">UP TO 20% DISCOUNT ON</p>
          <h2 className="text-8xl font-bold">Girl's Fashion</h2>
          <p className='md:w-3xl '>
            Discover the latest trends and express your unique style with our
            Women's Fashion website. Explore a curated collection of clothing,
            accessories, and footwear that caters to every taste and occasion.
          </p>
          <button className="py-2 px-4 bg-red-600 text-white rounded text-xl">
            EXPLORE NOW
          </button>
        </div>
        <div>
          <img src={Heroimg} alt="" className='h-140'/>
        </div>
      </div>
    </section>
  );
}

export default Hero