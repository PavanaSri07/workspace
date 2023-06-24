import React from "react";
import "./ScrollingComponent.css";

const ScrollingComponent = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://pcaedu.in/wp-content/uploads/2019/09/why-us-800x400.jpg"
          alt="Image"
        />
      </div>
      <div className="scrolling-container">
        <h1>Why Us</h1>
        <div className="scrolling-text">
          <p>*****We are a bunch of Techno Junkies who want to build sustainable and innovative products that help and make our lives easier and comfortable.</p>
          <p>****We put strategy first ,at the forefront of the process.From there we create unbreakable solutions.</p>
          <p>****Assurance of timely delivery</p>
          <p>****End-to-End Solutions</p>

        </div>
      </div>
    </div>
  );
};

export default ScrollingComponent;
