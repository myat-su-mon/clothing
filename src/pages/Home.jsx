import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import NewArrivals from "../components/NewArrivals";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NewArrivals />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
