import React, { Component } from "react";

import "../Styles/Palette.css";

import ColorBox from "./Colorbox";
import Navbar from "./Navbar";

// import seedColors from "./seedColors";
// import { generatePalette } from "../Utilities/colorHelpers";

export default class palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer eventually */}
      </div>
    );
  }
}
