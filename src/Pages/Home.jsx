import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Header from "../components/Header";
import WhychooseUs from "../components/WhychooseUs";
import PetSetting from "../components/PetSetting";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <>
      <div className="mx-auto">
        <Navbar />
        <Header />
        <About />
        <GetStarted />
        <WhychooseUs />
        <PetSetting />
        <StatsSection />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Home;
