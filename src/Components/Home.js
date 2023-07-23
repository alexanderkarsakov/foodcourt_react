import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
          
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Enjoy the Delight of Your Preferred Cuisine
          </h1>
          <p className="primary-text">
            Health-conscious chefs handle all the preparation, including peeling, chopping, and marinating, empowering you to cook up a fresh and nutritious meal.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;