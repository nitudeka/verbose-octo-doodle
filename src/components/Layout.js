import React from "react";
import Navbar from "./Navbar";
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
