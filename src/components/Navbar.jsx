import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 sticky top-0 shadow z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <FaShoppingCart className="text-yellow-400 text-2xl" />
          <span className="text-xl font-bold">ShopMe</span>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-grow max-w-md mx-4 w-full"
        >
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 px-4 py-2 rounded-r-md hover:bg-yellow-500"
          >
            <FaSearch />
          </button>
        </form>

        {/* Category Links */}
        <ul className="flex gap-4 mx-4 text-sm md:text-base">
          {["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
            <li key={category}>
              <Link
                to={`/product/category/${category}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="relative bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 flex items-center"
        >
          <FaShoppingCart className="text-xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
