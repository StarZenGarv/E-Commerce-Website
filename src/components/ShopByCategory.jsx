import React, { useState } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaThLarge,
} from "react-icons/fa";
import { items } from "../utils/Data";

const ShopByCategory = ({ products, setProducts }) => {
  const categories = [
    { name: "All Products", icon: <FaThLarge /> },
    { name: "Mobiles", icon: <FaMobileAlt /> },
    { name: "Laptops", icon: <FaLaptop /> },
    { name: "Tablets", icon: <FaTabletAlt /> },
    { name: "Watches", icon: <FaClock /> },
  ];
  const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000];

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedPrice, setSelectedPrice] = useState(80000);

  const filterByCategory = (cat) => {
    if (cat == "All Products") {
      setSelectedCategory(cat);
      setProducts(items);
      return;
    }
    setSelectedCategory(cat);
    setProducts(
      items.filter((pro) => pro.category.toLowerCase() == cat.toLowerCase())
    );
  };
  const filterByPrice = (price) => {
    setSelectedPrice(price);
    setProducts(items.filter((pro) => pro.price <= price));
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex flex-wrap gap-4 justify-center mt-5">
      {categories.map(({ name, icon }) => (
        <div
          key={name}
          onClick={() => filterByCategory(name)}
          className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md border ${
            selectedCategory === name
              ? "bg-yellow-500 text-black"
              : "hover:bg-gray-700"
          }`}
        >
          {icon}
          <span>{name}</span>
        </div>
      ))}
      <div className="w-full"></div>
      {priceRanges.map((price) => (
        <div
          key={price}
          onClick={() => filterByPrice(price)}
          className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md border ${
            selectedPrice === price
              ? "bg-blue-500 text-black"
              : "hover:bg-gray-700"
          }`}
        >
          <span>₹ {price}</span>
        </div>
      ))}
    </div>
  );
};

export default ShopByCategory;
