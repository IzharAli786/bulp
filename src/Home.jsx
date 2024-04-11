import React from "react";
import ImageSlider from "./components/ImageSlider";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimony from "./components/Testimony";
function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Testimony />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
