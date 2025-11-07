import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import CartItem from "../components/CartItem";
import Img from "../components/img";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate(); 
  
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2) : "0.00";
  };

  const handleOrder = () => {
    navigate("/order");
  };

  return (
    <div className="relative min-h-screen pt-[40px]">
      {cart.length > 0 ? (
        <div className="max-w-[1400px] mx-[100px] flex flex-col md:flex-row">
          {/* Left Side - Cart Items */}
          <div className="w-full overflow-y-auto gap-7 grid grid-cols-1 sm:grid-cols-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Side - Order Summary */}
          <div className="md:w-[38%] md:fixed md:right-5 flex flex-col items-center gap-5">
            <Img />

            <div className="bg-white shadow-lg rounded-lg border border-gray-200 h-fit w-full p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="font-semibold text-2xl text-green-800">
                    Your Cart
                  </h2>
                  <h3 className="font-bold text-4xl text-green-700 mt-1">
                    Summary
                  </h3>
                </div>

                <p className="text-lg font-medium text-gray-700">
                  Total Items:{" "}
                  <span className="font-semibold text-green-800">
                    {cart.length}
                  </span>
                </p>

                <p className="text-lg font-medium text-gray-700">
                  Total Amount:{" "}
                  <span className="font-bold text-green-800">
                    ${formatPrice(totalAmount)}
                  </span>
                </p>

                {/* Navigate to /order */}
                <button
                  onClick={handleOrder}
                  className="bg-green-700 hover:bg-green-600 text-white rounded-lg transition duration-300 ease-in-out mt-3 font-bold p-3 text-lg border-2 border-green-700 hover:text-white"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
              Shop Now
            </button>
          </Link>
        </div>
      )}

      <div className="h-[300px]"></div>
    </div>
  );
};

export default Cart;
