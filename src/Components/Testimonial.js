import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Testimonial</h1>
        <p className="primary-text">
          Listening to customer feedback helps us to make necessary adjustments and continuously improving the food services to meet and exceed customer expectations.
          
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          I appreciate the taste, quality, and flavor of the dishes offered.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Max Planck</h2>
      </div>
    </div>
  );
};

export default Testimonial;