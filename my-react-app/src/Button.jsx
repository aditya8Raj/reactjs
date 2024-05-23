import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click me! ⛓️</button>
      <p>Button clicked {count} times</p>
    </>
  );
}

export default Button;
