import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    const confirm = window.confirm("Are you sure you want to checkout?");
    if (!confirm) return;

    // Simulate checkout
    setTimeout(() => {
      toast.success("✅ Purchase successful! Thank you!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }, 1000);
    setCart([]);
    localStorage.removeItem(cart);
  };

  return (
    <div className="p-6 text-white">
      {cart.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-xl">
          🛒 Your cart is empty.
        </div>
      ) : (
        <>
          <div className="flex justify-end gap-4 mb-6">
            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              Checkout
            </button>
            <button
              onClick={handleClearCart}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
            >
              Clear Cart
            </button>
          </div>

          <div className="flex flex-wrap gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-lg p-4 w-64 shadow-md relative"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Category: {item.category}
                </p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-sm px-2 py-1 rounded text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
