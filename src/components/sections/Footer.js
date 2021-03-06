import React from "react";
import Button from "../Button";
import SVGLogo from "../../images/svg/Logo.svg";
import LogoFB from "../../images/svg/Facebook.svg";
import LogoYT from "../../images/svg/Youtube.svg";
import LogoVimeo from "../../images/svg/Vimeo.svg";
import LogoTwitter from "../../images/svg/Twitter.svg";
import SVGPath1470 from "../../images/svg/path1470.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="contact" className="container mt-20 relative">
      <img
        src={SVGPath1470}
        alt="path"
        className="absolute right-24 transform rotate-45 top-0 -z-1"
      />
      <img
        src={SVGPath1470}
        alt="path"
        className="hidden sm:block absolute w-1/5 -right-96 transform rotate-45 bottom-18 -z-1"
      />
      <h3
        style={{ color: "#0C6C44" }}
        className="flex flex-col justify-center items-center font-semibold mt-5 text-6xl"
      >
        <span>Have Question in mind?</span>
        <span className="mt-6">Let us help you</span>
      </h3>
      <div className="footer__input-container relative mt-10 h-28 overflow-hidden mx-auto">
        <input
          placeholder="snmonydemo@gmail.com"
          className="h-full focus:outline-none text-2xl pl-10 pr-60 absolute w-full bg-white shadow-lg"
        />
        <div className="absolute mt-0.5 right-3 top-3">
          <Button>Send</Button>
        </div>
      </div>
      <div className="flex mt-20 flex-col md:flex-row items-center justify-between">
        <img src={SVGLogo} alt="logo" className="h-20" />
        <ul
          style={{ color: "#00402E" }}
          className="md:my-0 my-10 flex items-center text-2xl"
        >
          <li className="mx-4">
            <a href="#overview">Overview</a>
          </li>
          <li className="mx-4">
            <a href="#symptomps">Symptoms</a>
          </li>
          <li className="mx-4">
            <a href="#prevention">Prevention</a>
          </li>
          <li className="mx-4">
            <a href="#map">Treatment</a>
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="mx-4">
            <a href="https://www.facebook.com/" target="_blank">
              <img className="h-6" src={LogoFB} />
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.youtube.com/" target="_blank">
              <img className="h-6" src={LogoYT} />
            </a>
          </li>
          <li className="mx-4">
            <a href="https://vimeo.com/" target="_blank">
              <img className="h-6" src={LogoVimeo} />
            </a>
          </li>
          <li className="mx-4">
            <a href="https://twitter.com/" target="_blank">
              <img className="h-6" src={LogoTwitter} />
            </a>
          </li>
        </ul>
      </div>
      <p style={{ color: "#415E56" }} className="text-center text-xl py-10">
        2020 @ All rights reserved by pixelspark.co
      </p>
    </div>
  );
};

export default Footer;
