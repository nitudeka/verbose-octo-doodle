import React from "react";
import "./button.scss";

const Button = ({ children, secondary }) => {
  return (
    <button
      className={[
        secondary ? "bg-opacity-20 text-primary" : "text-white",
        "button bg-primary px-16 py-6 font-bold text-3xl tracking-wider",
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
