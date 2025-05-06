import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../utils/Data";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = items.find((pro) => pro.id == id);
  const relatedProducts = items.filter(
    (pro) =>
      pro.category.toLowerCase() === product?.category.toLowerCase() &&
      pro.id != product.id
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {product ? (
        <>
          {/* Product Info */}
          <div className="flex flex-col md:flex-row gap-10 mb-14">
            <div className="w-full md:w-1/2 relative group">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-full object-contain rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-white text-blue-700 font-semibold px-3 py-1 rounded-full shadow-md">
                {product.category}
              </span>
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <div>
                <h1 className="text-5xl font-extrabold mb-6 text-white">
                  {product.title}
                </h1>
                <p className="text-gray-50 text-lg mb-4 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-3xl font-bold text-green-600 mb-8">
                  ₹{product.price}
                </p>
              </div>
              <button
                onClick={() =>
                  addToCart(
                    product.id,
                    product.title,
                    product.category,
                    product.imgSrc
                  )
                }
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Add To Cart
              </button>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-white text-center ">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {relatedProducts.map((relPro) => (
                <div
                  key={relPro.id}
                  className="relative bg-white border rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <img
                    src={relPro.imgSrc}
                    alt={relPro.title}
                    className="w-full h-48 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold text-gray-700">
                    {relPro.title}
                  </h3>
                  <p className="text-green-500 font-semibold mt-2 text-lg">
                    ₹{relPro.price}
                  </p>
                  <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                    {relPro.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-red-500 text-xl font-medium">
          Product not found.
        </p>
      )}
    </div>
  );
};

export default ProductDetails;
