import React from "react";
import { useState } from "react";
import "./Testinomials.css";
import { testnomialsData } from "./TestinomialsData.js";
const Testinomials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testnomialsData.length;
  return (
    <div className="Testnomials">
      <div className="left-t">
        <span>Testinomials</span>
        <span className="stroke-text"> What they</span>
        <span>say about us</span>
        <span>{testnomialsData[0].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testnomialsData[selected].name}
          </span>{" "}
          -{testnomialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <img src={testnomialsData[selected].image} alt="" />
        <div className="arrows">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};
export default Testinomials;
