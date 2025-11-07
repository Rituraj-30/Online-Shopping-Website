import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    const LoginUser = allUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (!LoginUser) {
      toast.error("Invalid email or password!");
      return;
    }

    // Store current user data for session
    localStorage.setItem("currentUser", JSON.stringify(LoginUser));

    // Store email & phone separately for Order.jsx auto-check
    localStorage.setItem("loggedInUserEmail", LoginUser.email);
    localStorage.setItem("loggedInUserPhone", LoginUser.phoneNmr);

    toast.success(`Welcome back, ${LoginUser.firstname}!`);
    setIsLoggedIn(true);

    navigate("/");
  }

  return (
    <div className="flex items-center justify-center pt-[20px] pb-[40px]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Login to continue shopping
        </p>

        <form onSubmit={submitHandler} className="flex flex-col gap-y-5">
          {/* Email Field */}
          <label className="w-full">
            <p className="text-gray-700 font-medium mb-1">
              Email Address <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter your email"
              className="bg-gray-100 rounded-lg text-gray-800 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
            />
          </label>

          {/* Password Field */}
          <label className="w-full relative">
            <p className="text-gray-700 font-medium mb-1">
              Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              className="bg-gray-100 rounded-lg text-gray-800 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
            />
            <span
              className="absolute right-3 top-[43px] cursor-pointer text-gray-500"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? (
                <AiOutlineEyeInvisible fontSize={22} />
              ) : (
                <AiOutlineEye fontSize={22} />
              )}
            </span>

            <Link to="#" className="text-xs mt-2 text-blue-500 float-right">
              Forgot Password?
            </Link>
          </label>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Log In
          </button>
        </form>

        {/* Create Account Section */}
        <div className="text-center mt-6">
          <p className="text-gray-700">New to the app?</p>
          <Link to="/signup">
            <button className="w-full bg-white hover:bg-green-50 border border-green-600 text-green-700 font-semibold py-3 rounded-lg transition duration-300 mt-3">
              Create an Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
