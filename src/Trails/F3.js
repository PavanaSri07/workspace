import React from "react";
import "./F3.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="row">
        <div className="col-md-6">
          <div className="image-card big-image">
          <img
              src="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
            />
            <div className="image-caption">Big Image</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/3862605/pexels-photo-3862605.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Image 1"
            />
            <div className="image-caption">IT INDUSTRY</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/6942039/pexels-photo-6942039.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Health Care"
            />
            <div className="image-caption">HEALTH CARE</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/3779187/pexels-photo-3779187.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 3"
            />
            <div className="image-caption">Education</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/6347540/pexels-photo-6347540.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 4"
            />
            <div className="image-caption">RETAIL INDUSTRY</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 5"
            />
            <div className="image-caption">NON PROFIT</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 6"
            />
            <div className="image-caption">FINANCE INDUSTRY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
