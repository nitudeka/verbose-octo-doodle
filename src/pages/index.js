import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Overview from "../components/sections/Overview";
import Contagion from "../components/sections/Contagion";
import Symptomps from "../components/sections/Symptomps";
import Prevention from "../components/sections/Prevention";
import Map from "../components/sections/Map";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
      <Contagion />
      <Symptomps />
      <Prevention />
      <Map />
    </Layout>
  );
};

export default IndexPage;
