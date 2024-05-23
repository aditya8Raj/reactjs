import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const minus = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  const plus = () => {
    setNumber(number + 1);
  };

  return (
    <div className="counter-container">
      <h1>Number: {number}</h1>
      <br />
      <button onClick={minus}>➖</button>
      <button onClick={reset}>Reset</button>
      <button onClick={plus}>➕</button>
    </div>
  );
}

export default Counter;
