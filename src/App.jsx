import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify"; // <-- include ToastContainer
import "react-toastify/dist/ReactToastify.css"; // <-- required CSS
import AllProducts from "./components/AllProducts";
import Navbar from "./components/Navbar";
import TrendingSlider from "./components/TrendingSlider";
import Cart from "./pages/Cart";
import ProductByCategory from "./pages/ProductByCategory";
import SearchProduct from "./pages/SearchProduct";
import ProductDetails from "./pages/ProductDetails";
import { items } from "./utils/Data";

const App = () => {
  const [products, setProducts] = useState(items);
  const [cart, setCart] = useState([]);

  const addToCart = (id, title, category, imgSrc) => {
    const obj = { id, title, category, imgSrc };
    const updatedCart = [...cart, obj];
    setCart(updatedCart);
    toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <AllProducts
              products={products}
              setProducts={setProducts}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/product/category/:cat"
          element={<ProductByCategory addToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route
          path="/product/search/:term"
          element={<SearchProduct addToCart={addToCart} />}
        />
      </Routes>
      <TrendingSlider />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
