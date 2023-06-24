import React from 'react'

function NewC2() {
  return (
    <div class="row">
  <div class="col-lg-6 col-md-12 col-sm-6 col-xs-12">
    <div class="contact-form">
      <h2 class="form-heading">Take Your Project Goal to the Next Stage</h2>
      <p class="form-subheading">Fill in your requirements and leave the rest to us!</p>
      <form id="contact-form" method="post" novalidate>
        <div class="form-group">
          <input type="text" id="name" name="name" placeholder="Your Name" class="form-control"/>
        </div>
        <div class="form-group">
          <input type="email" id="email" name="email" placeholder="Email Id" class="form-control"/>
        </div>
        <div class="form-group">
          <input type="tel" id="phone" name="phone" placeholder="Phone no." class="form-control"/>
        </div>
        <div class="form-group">
          <textarea id="message" name="message" placeholder="Your Message" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Schedule Your Call</button>
        </div>
      </form>
    </div>
  </div>
  <div class="col-lg-6 col-md-12 col-sm-6 col-xs-12">
    <div class="features">
      <img src="https://www.example.com/image.jpg" alt="Web Development Agency" class="img-fluid"/>
      <h3 class="features-heading">Engage & Discover</h3>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div class="feature">
            <img src="https://www.example.com/feature1.jpg" alt="Drive More Traffic" class="img-fluid"/>
            <p class="feature-description">Drive More Traffic</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div class="feature">
            <img src="https://www.example.com/feature2.jpg" alt="Enhance User Experience" class="img-fluid"/>
            <p class="feature-description">Enhance User Experience</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div class="feature">
            <img src="https://www.example.com/feature3.jpg" alt="Convert More Leads" class="img-fluid"/>
            <p class="feature-description">Convert More Leads</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default NewC2