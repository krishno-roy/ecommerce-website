import React, { useState, useEffect } from "react";
import Rating from "../Home/Rating";
import { FaCartPlus } from "react-icons/fa";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectCatagory, setSelectCatagory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const filteredProduct = products.filter((product) => {
    const matchCategory = selectCatagory
      ? product.category === selectCatagory
      : true;
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  const priceOptions = [
    [0, 100],
    [101, 200],
    [201, 300],
    [301, 1000],
  ];

  return (
    <div className="container mx-auto flex gap-10 py-12">
      {/* Left Sidebar */}
      <aside className="flex-col w-[200px] border-r-4 border-gray-200/45">
        <h2 className="text-3xl font-bold">Category</h2>
        <ul className="space-y-3 text-xl pt-7">
          <li>
            <button
              onClick={() => setSelectCatagory("")}
              className="text-red-600 hover:underline capitalize"
            >
              All Products
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`hover:underline capitalize cursor-pointer ${
                  selectCatagory === category ? "font-bold text-red-600" : ""
                }`}
                onClick={() => setSelectCatagory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Price Range Options */}
        <div>
          <h2 className="text-3xl font-bold pt-10">Price Range</h2>
          <ul className="space-y-3 pt-3">
            {priceOptions.map(([min, max], index) => (
              <li key={index} className="text-xl">
                <button
                  onClick={() => setPriceRange([min, max])}
                  className={`hover:underline cursor-pointer ${
                    priceRange[0] === min && priceRange[1] === max
                      ? "font-bold text-red-500"
                      : ""
                  }`}
                >
                  ${min} - ${max}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-1">
        <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProduct.map((product) => (
            <div
              key={product.id}
              className="relative p-4 rounded-lg shadow text-center space-y-2"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-80 mx-auto object-contain"
              />
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-xl font-bold">${product.price}</p>
              <div className="flex justify-center">
                <Rating rating={product.rating} />
              </div>
              <div className="absolute top-2 right-2 bg-red-600 p-3 text-white rounded-full">
                <FaCartPlus />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Shop;
