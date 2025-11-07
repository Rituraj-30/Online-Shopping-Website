import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phoneNmr: "+91 ",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function isValidIndianNumber(number) {
    const cleaned = number.replace("+91", "").replace(/\s/g, "");
    return /^[6-9]\d{9}$/.test(cleaned);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password.length <= 5) {
      toast.error("Plz.. create a stronger password!");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!isValidIndianNumber(formData.phoneNmr)) {
      toast.error("Enter a valid 10-digit mobile number");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    const newUser = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phoneNmr: formData.phoneNmr,
      password: formData.password,
    };

    if (existingUsers.find((user) => user.email === newUser.email)) {
      toast.error("User with this email already exists!");
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(existingUsers));

    // ✅ Automatically log in the new user
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    
    localStorage.setItem("loggedInUserEmail", newUser.email);
    localStorage.setItem("loggedInUserPhone", newUser.phoneNmr);

    toast.success(`Welcome, ${newUser.firstname}! Account Created Successfully.`);
    console.log("SIGNING UP:", newUser);

    setIsLoggedIn(true);
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center pt-[20px] pb-[40px]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Create Your Account 🌿
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill in your details to sign up and start shopping
        </p>

        <form onSubmit={submitHandler} className="flex flex-col gap-y-5">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="w-full">
              <p className="text-gray-700 font-medium mb-1">
                First Name <sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={changeHandler}
                placeholder="Enter first name"
                className="bg-gray-100 rounded-lg text-gray-800 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
              />
            </label>

            <label className="w-full">
              <p className="text-gray-700 font-medium mb-1">
                Last Name <sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={changeHandler}
                placeholder="Enter last name"
                className="bg-gray-100 rounded-lg text-gray-800 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
              />
            </label>
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                placeholder="Enter email"
                className="bg-gray-100 rounded-lg text-gray-800 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
              />
            </label>

            <label className="w-full">
              <p className="text-gray-700 font-medium mb-1">
                Mobile Number <sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type="tel"
                name="phoneNmr"
                value={formData.phoneNmr}
                onChange={changeHandler}
                maxLength={14}
                placeholder="+91 9876543210"
                className="bg-gray-100 rounded-lg text-gray-800 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
              />
            </label>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="w-full relative">
              <p className="text-gray-700 font-medium mb-1">
                Create Password <sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type={showPass ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password"
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
            </label>

            <label className="w-full relative">
              <p className="text-gray-700 font-medium mb-1">
                Confirm Password <sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type={showConfirmPass ? "text" : "password"}
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={changeHandler}
                placeholder="Confirm password"
                className="bg-gray-100 rounded-lg text-gray-800 w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
              />
              <span
                className="absolute right-3 top-[43px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPass((prev) => !prev)}
              >
                {showConfirmPass ? (
                  <AiOutlineEyeInvisible fontSize={22} />
                ) : (
                  <AiOutlineEye fontSize={22} />
                )}
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md mt-2"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-700">Already have an account?</p>
          <Link to="/login">
            <button className="w-full bg-white hover:bg-green-50 border border-green-600 text-green-700 font-semibold py-3 rounded-lg transition duration-300 mt-3">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
