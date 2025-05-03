import React, { useEffect, useState } from "react";
import Rating from "../Home/Rating";
import { FaCartArrowDown } from "react-icons/fa";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  const priceOptions = [
    [0, 1000], // default all
    [50, 100],
    [100, 240],
    [240, 300],
  ];

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Sidebar */}
      <aside className="col-span-1 space-y-6">
        {/* Category Filter */}
        <div>
          <h2 className="text-xl font-bold mb-2">Category</h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSelectedCategory("")}
                className="text-blue-600 hover:underline"
              >
                All
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`hover:underline ${
                    selectedCategory === category ? "font-bold" : ""
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Options */}
        <div>
          <h2 className="text-xl font-bold mb-2">Price Range</h2>
          <ul className="space-y-2">
            {priceOptions.map(([min, max], index) => (
              <li key={index}>
                <button
                  onClick={() => setPriceRange([min, max])}
                  className={`hover:underline ${
                    priceRange[0] === min && priceRange[1] === max
                      ? "font-bold text-red-600"
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

      {/* Right Product Grid */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative p-4 rounded-lg shadow bg-white text-center"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-red-600 font-bold text-xl">${product.price}</p>
            <div className="flex justify-center">
              <Rating rating={product.rating} />
            </div>
            <div className="absolute top-2 right-2 cursor-pointer text-xl bg-red-500 p-2 text-white">
              <FaCartArrowDown />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;
