import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Order = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "cod",
  });

  // Auto-fill email & phone from logged-in user
  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const loggedInPhone = localStorage.getItem("loggedInUserPhone");

    setFormData((prev) => ({
      ...prev,
      email: loggedInEmail || "",
      phone: loggedInPhone || "",
    }));
  }, []);

  //  Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //  Submit Order
  const handleSubmit = (e) => {
    e.preventDefault();


      toast.success("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center pt-[90px] bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🛒 Complete Your Order
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
                placeholder="Your login email"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
                placeholder="Your login number"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="2"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none resize-none"
              placeholder="House No, Street, Landmark"
            ></textarea>
          </div>

          {/* City, State, Pincode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="City"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="State"
            />
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Pin Code"
            />
          </div>

          {/* Payment Options */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Payment Method</h3>
            <div className="flex flex-col gap-2">
              {[
                { value: "cod", label: "Cash on Delivery" },
                { value: "upi", label: "UPI Payment" },
                { value: "card", label: "Credit/Debit Card" },
                { value: "netbanking", label: "Net Banking" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={option.value}
                    checked={formData.payment === option.value}
                    onChange={handleChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition mt-4"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
