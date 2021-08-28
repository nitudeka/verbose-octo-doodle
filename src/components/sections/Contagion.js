import React from "react";
import ContagionCard from "../Cards/Contagion";
import Group18544 from "../../images/svg/Group18544.svg";
import Group18542 from "../../images/svg/Group18542.svg";
import Group18540 from "../../images/svg/Group18540.svg";
import SVGPath1470 from "../../images/svg/path1470.svg";

const Contagion = () => {
  return (
    <div className="container pb-40 lg:mt-0 mt-40">
      <div className="lg:px-0 px-16 flex flex-col justify-center items-center">
        <p className="text-primary font-heading text-4xl">Covid-19</p>
        <p className="text-secondary font-heading mt-5 text-5xl">Contagion</p>
        <p className="text-3xl sm:w-56rem text-center mb-12 mt-10 leading-relaxed">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type
        </p>
      </div>
      <div className="flex relative flex-wrap items-center justify-center">
        <img
          src={SVGPath1470}
          alt="path"
          className="absolute -z-1 -left-24 bottom-0"
        />
        <ContagionCard
          img={Group18544}
          heading="Air Transmission"
          paragraph="Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify"
        />
        <ContagionCard
          img={Group18542}
          heading="Human Contacts"
          paragraph="Washing your hands is one of thesimplest ways you can protect"
        />
        <ContagionCard
          img={Group18540}
          heading="Containted Objects"
          paragraph="Use the tissue while sneezing,In this way, you can protect your droplets."
        />
      </div>
    </div>
  );
};

export default Contagion;
