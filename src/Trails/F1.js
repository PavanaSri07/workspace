import React, { useEffect, useState } from "react";
import "./F1.css"; // Import the CSS file for styling

const testimonialData = [
  {
    id: 1,
    name: "L.Samba Murthy",
    testimonial:
      "GAMAYAS boasts an exceptional team of developers and designers who are not only highly capable and responsive but also constantly bring innovative and out-of-the-box thinking to the table. We entrusted them with the task of redesigning our outdated website, and their comprehensive solutions breathed new life into it. As a result, our website now attracts a broader client base. With their abundant creativity and talent, this team comes highly recommended.",
    image:
      "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual image path
  },
  {
    id: 2,
    name: "K.Prashanth Kumar",
    testimonial:
      "When faced with a small project that required quick turnaround and adherence to budget, GAMAYAS exceeded our expectations. Not only did they grasp our business needs accurately, but they also delivered more than anticipated. Their performance marketing strategy proved highly effective, even within limited budgets. Overall, GAMAYAS offers timely and top-notch solutions.",
    image:
      "https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual image path
  },
  {
    id: 3,
    name: "Shashidhar",
    testimonial:
      "Partnering with Gamayas for our brand outreach has yielded exceptional results. Their strategies, tools, and custom landing pages have significantly boosted our conversion rates, leading to increased engagement, user retention, and greater profitability. We are fortunate to have such talented marketers who continuously push boundaries to achieve remarkable outcomes.",
    image:
      "https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual image path
  }
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Automatically scroll to the next testimonial every 5 seconds
    const timer = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        prevTestimonial === testimonialData.length - 1 ? 0 : prevTestimonial + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, []);

  return (
    <div className="testimonial-container">
      <h2>WHAT THEY SAY ABOUT US</h2>
      <div className="testimonial-carousel">
        {testimonialData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === currentTestimonial ? "active" : ""
            }`}
          >
            <img
              className="testimonial-image"
              src={testimonial.image}
              alt="Testimonial"
            />
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-author">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
