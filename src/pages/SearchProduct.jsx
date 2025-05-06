import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../utils/Data";
import VideoPlayer from "../components/VideoPlayer";
import Products from "../components/Products";
const SearchProduct = ({ addToCart }) => {
  const { term } = useParams();
  const products = items.filter((pro) =>
    pro.title.toLowerCase().includes(term.toLowerCase())
  );
  return (
    <>
      <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4" />
      <Products products={products} addToCart={addToCart} />
    </>
  );
};

export default SearchProduct;
