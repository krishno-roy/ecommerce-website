import React from 'react'
import CatagoriImg from "../../assets/category-1.jpg"
import CatagoriImg2 from "../../assets/category-2.jpg"
import CatagoriImg3 from "../../assets/category-3.jpg"
import CatagoriImg4 from "../../assets/category-4.jpg"

const CatagoriList = [
  {
    id: 1,
    imgage: CatagoriImg,
    title: "Accessories",
  },
  {
    id: 2,
    imgage: CatagoriImg2,
    title: "Dress Collection",
  },
  {
    id: 3,
    imgage: CatagoriImg3,
    title: "Jewellery",
  },
  {
    id: 4,
    imgage: CatagoriImg4,
    title: "Cosmetics",
  },
];

const Catagori = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 py-12 md:w-5xl mx-auto'>
        {CatagoriList.map((catagori, id) => (
          <div key={catagori.id} className='space-y-3'>
            <img src={catagori.imgage} alt="" className='h-30 rounded-full mx-auto'/>
            <h2 className='text-2xl font-bold text-center'>{catagori.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catagori