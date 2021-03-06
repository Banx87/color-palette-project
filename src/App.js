import React from "react";
import Palette from "./components/Palette";
import seedColors from "./components/seedColors";
import { generatePalette } from "./Utilities/colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
