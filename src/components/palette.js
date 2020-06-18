import React, { Component } from "react";
import ColorBox from "./Colorbox";
import "../Styles/Palette.css";

////// SLIDER IMPORTS //////////////////////////
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
////////////////////////////////////////////////

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
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* NavBar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer eventually */}
      </div>
    );
  }
}
