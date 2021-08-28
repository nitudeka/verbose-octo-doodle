import React from "react";
import HeroSvg from "../../images/svg/hero.svg";
import Button from "../Button";
import "./hero.scss";

const Hero = () => {
  return (
    <div id="overview" className="hero h-screen overflow-hidden pt-16">
      <div className="flex h-full justify-center items-center">
        <div className="hero__content container mx-auto relative">
          <h1 className="font-heading">
            <span className="text-primary text-4xl">COVID-19 Alert</span>
            <p className="text-secondary mt-5 lg:w-2/4 text-5xl sm:text-6xl">
              <span className="block">Stay At Home Quarantine</span>
              <span className="block mt-4">To Stop Corona Virus</span>
            </p>
          </h1>
          <h2 className="text-3xl mb-12 mt-10 leading-relaxed hero__heading-secondary">
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to .
          </h2>
          <Button>Let Us Help</Button>
          <img
            style={{ zIndex: "-1" }}
            className="hero__img right-0 lg:-right-56 lg:opacity-100 opacity-10 absolute top-1/2 transform -translate-y-1/2"
            src={HeroSvg}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
