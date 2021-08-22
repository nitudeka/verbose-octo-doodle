import React from "react";
import SVGGroup15404 from "../../images/svg/Group15404.svg";
import SVGPath1470 from "../../images/svg/path1470.svg";
import Button from "../Button";
import "./overview.scss";

const Overview = () => {
  return (
    <div className="relative overflow-x-hidden">
      <img
        src={SVGPath1470}
        alt="path"
        className="absolute w-1/5 -right-36 transform rotate-45 bottom-0"
      />
      <img
        src={SVGPath1470}
        alt="path"
        className="absolute right-40 transform rotate-45 -bottom-40"
      />
      <div className="container">
        <div className="flex items-center justify-center relative">
          <img
            style={{ zIndex: "-1" }}
            className="w-1/2 absolute lg:opacity-100 opacity-30 lg:relative"
            src={SVGGroup15404}
          />
          <div className="lg:w-1/2 lg:px-0 px-16">
            <p className="text-primary font-heading text-4xl">
              What Is Covid-19
            </p>
            <p className="text-secondary font-heading mt-5 text-5xl">
              Coronavirus
            </p>
            <p className="text-3xl mb-12 mt-10 leading-relaxed">
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type has caused
              a recent outbreak of respiratory illness now called
              COVID-19.Lauren Sauer, M.S., the director of operations with the
              Johns Hopkins Office of Critical Event Preparedness and Response
            </p>
            <Button secondary>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
