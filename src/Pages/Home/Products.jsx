import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { FaCartArrowDown } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleProduct, setVisibleProduct] = useState(8);

  const lodeMoreProduct = () => {
    setVisibleProduct((prev) => prev + 4);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="md:w-3xl mx-auto text-center py-4 space-y-5">
        <h2 className="text-4xl font-bold">Trending Products</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          similique facilis cupiditate corrupti ex nobis dolores impedit error
          omnis. Modi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {products.slice(0, visibleProduct).map((product) => (
          <div
            key={product.id}
            className="relative p-4 rounded-lg shadow-lg bg-white text-center space-y-3"
          >
            {/*  Cart Icon at top-right */}
            <div className="absolute top-3 right-2 text-xl cursor-pointer bg-red-600 text-white p-2">
              <FaCartArrowDown />
            </div>

            <img
              src={product.images[0]}
              alt={product.title}
              className="mx-auto h-40 object-contain"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-xl font-bold">${product.price}</p>
            <Rating rating={product.rating} className="text-center" />
          </div>
        ))}
      </div>

      {visibleProduct < products.length && (
        <div className="text-center py-7">
          <button
            onClick={lodeMoreProduct}
            className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white text-xl font-semibold rounded"
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
