import React from "react";

const TopNavbar = () => {
  const menuItems = [
    "MOBILES & MORE",
    "MEN",
    "WOMEN",
    "HOME & KITCHEN",
    "APPLIANCES",
    "SPORTS & MORE",
    "ESSENTIALS",
    "OFFERS",
    "GLOBAL SHOPPING",
  ];

  return (
    <div className="fixed top-[100px] left-0 w-full bg-gray-300 border-b border-gray-700 text-green py-4 z-40">
      <div className="flex items-center justify-center w-full px-6">
        <ul className="flex space-x-14 text-sm font-semibold tracking-wide">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:underline hover:text-green-600 cursor-pointer transition-all duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
