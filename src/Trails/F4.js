import React from "react";
import "./F4.css";

const Workflow = () => {
  return (
    <div className="workflow-container">
      <h2>Our Workflow</h2>
      <div className="workflow-steps">
        <div className="workflow-step">
          <img
            src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Step 1"
          />
          <h3>Idea Discovery</h3>
        </div>
        <div class="direction-symbol">
          <div class="step-direction"></div>
        </div>

        <div className="workflow-step">
          <img
            src="https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Step 2"
          />
          <h3>Project Planning</h3>
        </div>
        <div class="direction-symbol">
          <div class="step-direction"></div>
        </div>

        <div className="workflow-step">
          <img
            src="https://images.pexels.com/photos/3862373/pexels-photo-3862373.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Step 3"
          />
          <h3>Product Design</h3>
        </div>
        <div class="direction-symbol">
          <div class="step-direction"></div>
        </div>
        <div className="workflow-step">
          <img
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Step 4"
          />
          <h3>Iterative Development</h3>
        </div>
        <div class="direction-symbol">
          <div class="step-direction"></div>
        </div>
        <div className="workflow-step">
          <img
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Step 5"
          />
          <h3>Maintainace and Optimisation</h3>
        </div>
        {/* <div class="direction-symbol">
          <div class="step-direction"></div>
        </div>
        <div className="workflow-step">
          <img src="step6.jpg" alt="Step 6" />
          <h3>Step 6</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> */}
      </div>
    </div>
  );
};

export default Workflow;
