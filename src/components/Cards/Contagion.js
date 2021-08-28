import React from "react";

import "./contagion.scss";

const ContagionCard = ({ img, heading, paragraph }) => {
  return (
    <div className="card-contagion-container bg-white border-b-4 border-transparent hover:border-red-500 py-14 px-12 m-6 rounded-lg flex flex-col justify-center items-center">
      <img className="w-96 h-96" src={img} />
      <h2 className="text-secondary font-medium mt-12 text-4xl">{heading}</h2>
      <p className="text-2xl text-center mt-6 leading-relaxed">{paragraph}</p>
    </div>
  );
};

export default ContagionCard;
