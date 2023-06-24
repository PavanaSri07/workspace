import { Component } from "react";
import "./C1-Dy.css";
class C1Dy extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="text">
          <h1>{this.props.heading}</h1>
          <h3>{this.props.subheading}</h3>
          <p>{this.props.matter}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default C1Dy;
