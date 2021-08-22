import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Overview from "../components/sections/Overview";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
    </Layout>
  );
};

export default IndexPage;
