import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
