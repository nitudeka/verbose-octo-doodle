import React from "react";
import "./button.scss";

const Button = ({ children }) => {
  return (
    <button className="button bg-primary px-16 py-6 text-white font-bold text-3xl tracking-wider">
      {children}
    </button>
  );
};

export default Button;
