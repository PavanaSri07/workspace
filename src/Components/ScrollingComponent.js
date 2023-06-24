import React from "react";
import "./ScrollingComponent.css";

const ScrollingComponent = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://media.istockphoto.com/id/803223214/photo/businessman-hand-holding-why-choose-us-sign-isolated-on-grey-background-business-concept-stock.jpg?s=612x612&w=0&k=20&c=jAg2giHT6tBKFUDAJrxncbrcaYwb5sz67Gp6k3M9Gpo="
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
