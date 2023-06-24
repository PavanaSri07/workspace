import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div className="gamayas">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyjFcjH21kPc6EEDOEtEX0A6GF3sxwt4C7rHAgbV8Og&s" alt="" className="navbar-logo-img" />
          <h1 className="navbar-logo"> GAMAYAS</h1></div>
        
        
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        {/* <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul> */}
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <li key={index} className="dropdown">
                  <a className={item.cName} href={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                  <div className="dropdown-content">
                    {item.dropdown.map((subItem, subIndex) => {
                      return (
                        <a key={subIndex} href={subItem.url}>
                          {subItem.title}
                        </a>
                      );
                    })}
                  </div>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
