import React from 'react'
import Hero from './Hero';
import Catagori from './Catagori';
import Discount from './Discount';
import Products from './Products';
import Offer from './Offer';
import Blog from './Blog';

const Home = () => {
  return (
    <div>
      <Hero />
      <Catagori />
      <Discount />
      <Products />
      <Offer />
      <Blog/>
    </div>
  );
}

export default Home