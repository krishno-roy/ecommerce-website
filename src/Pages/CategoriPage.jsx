import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; // ✅ useParams should be from 'react-router-dom'
import Rating from "./Home/Rating";


const CategoriPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.products.filter(
          (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setFilteredProducts(filtered);
      });
  }, [categoryName]);

  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <section className="min-h-[300px] bg-[#f4e5ec] space-y-3 rounded p-8 mb-8 pt-20">
        <h2 className="text-4xl font-bold text-center capitalize">
          {categoryName}
        </h2>
        <p className="md:w-3xl mx-auto text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          repellendus voluptates itaque et perspiciatis nostrum quas iusto
          praesentium velit a.
        </p>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 items-center mb-30">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 rounded shadow text-center">
            <img
              src={product.images[0]}
              alt={product.title}
              className="mx-auto object-contain mb-2"
            />
            <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
            <p className="text-lg font-bold mb-2">${product.price}</p>
            <div className="flex justify-center">
              <Rating rating={product.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriPage;
