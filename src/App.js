import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 30) {
      console.warn("Maximum temperature reached");
      return;
    }

    const newTemperature = temperatureValue + 1;
    console.log("Increasing temperature to:", newTemperature);
    setTemperatureValue(newTemperature);

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) {
      console.warn("Minimum temperature reached");
      return;
    }

    const newTemperature = temperatureValue - 1;
    console.log("Decreasing temperature to:", newTemperature);
    setTemperatureValue(newTemperature);

    if (newTemperature < 20) {
      setTemperatureColor("cold");
    }
  };


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
