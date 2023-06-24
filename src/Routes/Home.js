import React from "react";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Scrolling from "../Components/ScrollingComponent";
import TestimonialCarousel from  "../Trails/F1";
import ImageGrid from  "../Trails/F3";
import Workflow from  "../Trails/F4";
import MyComponent from  "../Trails/F51";
import CompanyWebsite from  "../Trails/F61";
import C2 from "../Components/C2";
import C1 from "../Components/C1";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    
    <>
    <Navbar/>
    <div className="home-container">
  <Slider {...settings}>
    <div>
      <div className="slick-slide">
        <img
        src ="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Slide 1"
        />
        <div className="overlay">
          <h1 className="slide-title">Achieve distinction as a trusted and memorable brand </h1>
          <p className="slide-description">
          Effective branding is essential for businesses to avoid appearing ordinary. Our impactful branding solutions have
         the ability to differentiate you from competitors, capturing your audience's attention and fostering a lasting connection.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="slick-slide">
              <img src="https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Slide 2"
        />
        <div className="overlay">
          <h1 className="slide-title">Effective branding is essential for businesses to avoid appearing ordinary</h1>
          <p className="slide-description">
          Our digital marketing agency excels in implementing effective strategies that attract the right audience, increasing online visibility and promotion for your business.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="slick-slide">
        <img
        src="https://images.pexels.com/photos/7698836/pexels-photo-7698836.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Slide 3"
        />
        <div className="overlay">
          <h1 className="slide-title">As a top global agency for website design, development, and digital marketing</h1>
          <p className="slide-description">
          we offer end-to-end solutions. From conceptualization to coding, we create compelling websites, blogs, and online stores that effectively promote your products, drive sales, and minimize the need to chase after customers.
          </p>
        </div>
      </div>
    </div>
  </Slider>
      </div>
      
{/* <ImageGrid/> */}
<C2 />
<C1 />
      <CompanyWebsite />

<MyComponent/>
<Workflow/>
{/*  */}
<TestimonialCarousel/>
<Scrolling/>
  <Footer/>
</>
  );
};

export default HomePage;
