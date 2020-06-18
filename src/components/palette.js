import React, { Component } from "react";
import ColorBox from "./Colorbox";
import seedColors from "./seedColors";
import { generatePalette } from "../Utilities/colorHelpers";
import "../Styles/Palette.css";

export default class palette extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* NavBar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer eventually */}
      </div>
    );
  }
}
