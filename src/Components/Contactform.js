// import "./Contactform.css";
// function ContactForm() {
//   return (
//     <div className="form-container">
//       <h1>Send a message to us!</h1>
//       <form>
//         <input placeholder="Name" />
//         <input placeholder="Email" />
//         <input placeholder="Subject" />
//         <textarea placeholder="Message" rows="4"></textarea>
//         <button className="button"> Send Message</button>
//       </form>
//     </div>
//     // <div className="container form-container">
//     //   <h1>Send a message to us!</h1>
//     //   <form>
//     //     <div className="mb-3">
//     //       <input className="form-control" type="text" placeholder="Name" />
//     //     </div>
//     //     <div className="mb-3">
//     //       <input className="form-control" type="email" placeholder="Email" />
//     //     </div>
//     //     <div className="mb-3">
//     //       <input className="form-control" type="text" placeholder="Subject" />
//     //     </div>
//     //     <div className="mb-3">
//     //       <textarea className="form-control" placeholder="Message" rows="4"></textarea>
//     //     </div>
//     //     <button className="btn btn-primary">Send Message</button>
//     //   </form>
//     // </div>
//   );
// }
// export default ContactForm;

import React from "react";
import "./Contactform.css";

function ContactForm() {
  return (
    <div className="contactcontainer">
      <div className="content-container">
        <div className="form-container">
          <h1>Send a message to us!</h1>
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
            <div className="button">
              <button className="button">Send Message</button>
            </div>
          </form>
        </div>
        <div className="text-container">
          <img src="https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          <div className="text">
            {/* <h2>Let's Start a Conversation</h2> */}
            {/* <p>
            Ready to take your digital marketing efforts to the next level? At Gamayas, we're experts in driving online success through strategic and innovative digital marketing solutions. Let's have a conversation about your business goals and how we can help you achieve them. Our team of skilled marketers is dedicated to maximizing your online presence, boosting your brand visibility, and driving targeted traffic to your website. Contact us today to start a conversation and unlock the full potential of your digital marketing strategy.






            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

