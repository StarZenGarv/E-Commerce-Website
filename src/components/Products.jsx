import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-900 min-h-screen">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
        >
          <Link to={`/product/${product.id}`} className="block">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white">
              <h1 className="text-lg font-semibold mb-1 truncate">
                {product.title}
              </h1>
              <h4 className="text-yellow-400 text-md font-medium">
                ₹{product.price}
              </h4>
            </div>
          </Link>
          <div>
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.title,
                  product.category,
                  product.imgSrc
                )
              }
              className="text-white p-2 text-center w-full border border-orange-500 rounded-bl-lg rounded-br-lg hover:bg-orange-500 hover:font-bold"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
