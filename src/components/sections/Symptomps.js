import React from "react";
import Group15444 from "../../images/svg/Group15444.svg";
import path1762 from "../../images/svg/path1762.svg";
import Path1764 from "../../images/svg/path1764.svg";

const Symptomps = () => {
  return (
    <div id="symptomps" className="container">
      <div className="lg:px-0 px-16 flex flex-col justify-center items-center">
        <p className="text-primary font-heading text-4xl">Covid-19</p>
        <p className="text-secondary font-heading mt-5 text-5xl">Symptomps</p>
        <p className="text-3xl w-56rem text-center mb-12 mt-10 leading-relaxed">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory
        </p>
      </div>
      <div className="p-8 relative">
        <img className="absolute -z-1 -left-60 top-2/4" src={path1762} />
        <img className="absolute -z-1 -right-72 -bottom-10" src={Path1764} />
        <img src={Group15444} />
      </div>
    </div>
  );
};

export default Symptomps;
