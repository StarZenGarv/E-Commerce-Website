import React from "react";
import { Videos, items } from "../utils/Data";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import VideoPlayer from "../components/VideoPlayer";

const ProductByCategory = ({ addToCart }) => {
  const { cat } = useParams();
  const video = Videos.find(
    (vid) => vid.category.toLowerCase() == cat.toLowerCase()
  );
  const products = items.filter(
    (pro) => pro.category.toLowerCase() == cat.toLowerCase()
  );
  return (
    <>
      <VideoPlayer src={video?.url} />
      <Products products={products} addToCart={addToCart} />
    </>
  );
};

export default ProductByCategory;
