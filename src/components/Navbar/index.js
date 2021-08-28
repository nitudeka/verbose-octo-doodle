import React, { useState } from "react";
import SVGLogo from "../../images/svg/Logo.svg";

const LinkMobile = ({ onClick, id, title }) => {
  return (
    <li
      onClick={onClick}
      className="py-4 border-t px-8 cursor-pointer hover:text-primary"
    >
      <a href={`#${id}`}>{title}</a>
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: "overview", title: "Overview" },
    { id: "symptomps", title: "Symptoms" },
    { id: "prevention", title: "Prevention" },
    { id: "map", title: "Treatment" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full bg-opacity-80 bg-white sm:bg-transparent">
      <div className="container flex justify-between text-blue-500 py-4 sm:py-10 items-center">
        <img src={SVGLogo} className="h-20" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex sm:hidden items-center justify-center p-2 rounded-xl text-gray-800 hover:text-white hover:bg-primary bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          {menuOpen ? (
            <svg
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <ul
          style={{ color: "rgb(35,85, 84)" }}
          className="md:my-0 hidden sm:flex my-10 items-center text-2xl"
        >
          <li className="mx-4 text-primary relative">
            <a href="#overview">Overview</a>
            <div className="rounded-full bg-primary h-1.5 w-1.5 absolute left-1/2 transform -translate-x-1/2"></div>
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
          <li className="mx-4">
            <a href="#contact">
              <button
                style={{ border: "2px solid #FA5652" }}
                className="button text-primary px-12 py-4 font-medium tracking-wider"
              >
                Contact
              </button>
            </a>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <ul className="block bottom-0 list-none w-full sm:hidden text-4xl">
          {links.map((link) => {
            return (
              <LinkMobile
                key={link.id}
                onClick={() => setMenuOpen(false)}
                title={link.title}
                id={link.id}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
