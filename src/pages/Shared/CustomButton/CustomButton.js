import React from "react";

const CustomButton = ({children}) => {
  return (
    <button className="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white px-6">
      {children}
    </button>
  );
};

export default CustomButton;
