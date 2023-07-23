import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
          Proper nutrition relies on food being a vital element in a diet
        </h1>
        <p className="primary-text">
         Different food groups offer various benefits, and a well-balanced diet ensures that we receive a diverse range of nutrients necessary for growth, development, and overall well-being.


        </p>
        <p className="primary-text">
          The right balance of carbohydrates, proteins, fats, vitamins, and minerals supports various bodily functions, such as energy production, cell repair, immune system support, and brain function. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>

     

    </div>
  );
};

export default About;