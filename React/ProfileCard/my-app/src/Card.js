import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  return (
    <div className="container">
      <div className="card">
        <img
          src={data.image}
          alt="profile-image"
          width="100px"
          height="100px"
        />
        <h6 className="designation">{data.designation}</h6>
        <h2 className="name">{data.Name}</h2>
        <p className="about">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua..{" "}
        </p>
        <button onClick={() => alert(data.Name)}>See More</button>
      </div>
    </div>
  );
};

export default Card;
