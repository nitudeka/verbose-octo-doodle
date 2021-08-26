import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Overview from "../components/sections/Overview";
import Contagion from "../components/sections/Contagion";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
      <Contagion />
    </Layout>
  );
};

export default IndexPage;
