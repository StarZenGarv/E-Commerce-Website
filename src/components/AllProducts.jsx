import React from "react";
import VideoPlayer from "./VideoPlayer";
import ShopByCategory from "./ShopByCategory";
import Products from "./Products";
import { useLocation } from "react-router-dom";

const AllProducts = ({ products, setProducts, addToCart }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4" />
      {pathname == "/" && (
        <ShopByCategory products={products} setProducts={setProducts} />
      )}

      <Products products={products} addToCart={addToCart} />
    </div>
  );
};

export default AllProducts;
