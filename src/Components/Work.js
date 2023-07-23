import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "The restaurant prepares the food items as per the order received, ensuring they are fresh and ready for delivery.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Customers can track their delivery in real-time through mobile apps or websites, allowing them to know the estimated time of arrival.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "The delivery staff transports the food from the restaurant to the customer's specified delivery address.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We offer convenience and a wide range of food choices to customers who prefer to dine at home or have meals delivered to their workplaces.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;