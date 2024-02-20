import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "./Section";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <>
        <div className="min-w-[1050px] max-w-[1300px] mx-auto"></div>
        <Navbar />
        <Hero />
        <Section />
        <Footer />
      </>
    </div>
  );
};

export default Home;
