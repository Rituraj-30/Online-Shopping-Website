import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { CiShop } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import { clearCart } from "../redux/Slices/CartSlice";



const Navbar = (props) => {
  const { cart } = useSelector((state) => state);
  const { islogin: isLoggedIn, setislogin: setIsLoggedIn } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setIsLoggedIn(false);
    dispatch(clearCart());
    toast.success("Logged Out");

    


  };

  const handleSearchClick = () => {
    toast("Search feature coming soon!", { duration: 2000 });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-800 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg shadow-gray-700/30" : ""
      }`}
    >
      <nav className="flex items-center justify-between h-[100px] px-6">
        {/* LEFT: Logo */}
        <NavLink to="/">
        <div className="ml-0 sm:ml-80">
          <img
            src="../logo.png"
            className="h-16 rounded-lg"
            alt="2930 shop Logo"  />
        </div>
              </NavLink>
            
        

        {/* CENTER: Search + Home + Cart */}
        <div className="flex justify-center items-center space-x-10 w-1/3">
          {/* Search Bar */}
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-14 pl-4 pr-10 rounded-full border border-gray-700 bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSearchClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-400"
            >
              <FaSearch className="text-[30px]" />
            </button>
          </div>

          {/* Home */}
          <NavLink
            to="/"
            className="text-white hover:text-green-400 text-[25px] transition-colors duration-200"
          >
            Home
          </NavLink>

          {/* Cart */}
          {isLoggedIn && (
            <NavLink
              to="/cart"
              className="relative text-white hover:text-green-400 transition-colors duration-200"
            >
              <FaShoppingCart className="text-4xl " />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white font-bold animate-bounce">
                  {cart.length}
                </span>
              )}
            </NavLink>
          )}
        </div>

        {/* RIGHT: Seller + Login/Signup */}
        <div className="flex justify-end items-center space-x-10 text-white text-sm sm:text-base font-medium w-3/3">
          {/* Seller */}
          <button
            onClick={() =>
              toast("Seller section coming soon!", {
                icon: "🛍️",
                style: { background: "#333", color: "#fff" },
              })
            }
            className="flex items-center space-x-1 hover:text-green-400 transition-colors duration-200"
          >
            <CiShop className="text-[55px]" />
            <span className="hidden text-[25px] sm:inline">Become A Seller</span>
          </button>

          {/* 3 Dots Menu */}
          <div className="relative group">
            <BsThreeDotsVertical className="text-4xl cursor-pointer hover:text-green-400 transition-colors duration-200" />
            <div className="absolute right-0 top-4 mt-6 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-20 hidden group-hover:block transition-all duration-300 transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <ul className="text-gray-800 text-base font-normal">
                <li className="px-4 py-2 hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-150">
                  Coupons & Rewards
                </li>
                <li className="px-4 py-2 hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-150">
                  24x7 Customer Service
                </li>
                <li className="px-4 py-2 hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-150">
                  Download App
                </li>
              </ul>
            </div>
          </div>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-3 py-4 border text-[25px] border-green-500 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="hover:text-green-400 text-[25px] transition-colors duration-200"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
