import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="title">Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color</label>
      <input type="color" onChange={handleColorChange} value={color} />
    </div>
  );
}

export default ColorPicker;
