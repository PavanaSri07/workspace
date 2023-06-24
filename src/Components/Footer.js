import "./FooterStyles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Gamayas</h1>
          <p> GAMAYAS Plot No: 1, AP colony,</p>
          <p> Mallapur, Hyderabad. PIN:-500076.</p>
          <p>Phone: +917801073175,+917801073176</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
          {/* <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">Contact Us</a> */}
        </div>

        <div>
           <h4>Our Focus Area</h4>
          <ul>
            <li><a href="/">Web Design</a></li>
            <li><a href="/">Web Development</a></li>
            <li><a href="/">Mobile Apps Development</a></li>
            <li><a href="/">Digital Marketing</a></li>
          </ul>

         
{/*           
          <a href="/">Web Development</a>
          <a href="/">Mobile Apps Development</a>
          <a href="/">Digital Marketing</a> */}
        </div>
        <div>
          <h4>Industries We Serve</h4>
          <ul>
            <li><a href="/">IT Industry</a></li>
            <li><a href="/">Healthcare Industry</a></li>
            <li><a href="/">Manufacturing Industry</a></li>
            <li><a href="/">Financial Services Industry</a></li>
          </ul>
          {/* <a href="/">IT Industry</a>
          <a href="/">Healthcare Industry</a>
          <a href="/">Manufacturing Industry</a>
          <a href="/">Financial Services Industry</a> */}
        </div>
      </div>

      <div className="copyright">
        <div className="Container">
          <strong>&copy;</strong> All Rights Reserved | Powered By{" "}
          <a
            href="https://mkdigitalmare.com/"
            style={{ color: "#d33536" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            MK DIGITALMARE PVT LTD
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
