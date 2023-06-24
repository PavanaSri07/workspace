import React from "react";
import Accordion from "./F5";
import "./F5.css";
const MyComponent = () => {
  return (
    <div className=" Accocomponent"> 
      <h1 >Unleash your business's full potential for growth and success.</h1>
      <Accordion title="Lead and impact your industry with confidence." content="Elevate your website to become a valuable digital asset with our exceptional solutions for midsize businesses, propelling you towards becoming a leading brand." />
      <Accordion title="Embrace your limitless potential and soar towards success." content="Keep expanding and enhancing your digital assets with our enterprise-level Web design solutions. Explore limitless possibilities and transform your digital identity with a headstart towards greatness." />
      <Accordion title="Small beginnings, boundless possibilities." content="Turn your small business idea into an online success with our web development solutions. We'll help you create stunning, intuitive, and affordable website designs that amplify your ideas and reach a wider audience." />
    </div>
  );
};

export default MyComponent;

