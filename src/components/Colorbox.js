import React, { Component } from "react";
import "../Styles/ColorBox.css";

export default class Colorbox extends Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className="ColorBox">
        <span>{this.props.name}</span>
        {/* <span>MORE</span> */}
      </div>
    );
  }
}
