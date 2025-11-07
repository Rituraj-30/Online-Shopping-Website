import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2) : "0.00";
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-4 justify-between bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="flex justify-center items-center w-full md:w-[30%] max-w-[160px] mx-auto">
        <img
          className="w-[140px] h-[140px] object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>

      {/* Details */}
      <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-between w-full md:w-[70%]">
        <h1 className="text-lg font-semibold text-slate-800 line-clamp-2">
          {item.title}
        </h1>

        <p className="text-sm text-slate-600 mt-2 hidden sm:block line-clamp-3">
          {item.description.substring(0, 100)}...
        </p>

        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-lg text-green-700">
            ${formatPrice(item.price)}
          </p>

          <button
            onClick={removeFromCart}
            className="flex items-center justify-center bg-red-100 hover:bg-red-300 text-red-800 hover:text-white rounded-full p-3 transition-all duration-300"
          >
            <AiFillDelete size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
