import React from "react";
import './button.css';

function Button ({handleClick}) {
  return <button onClick={handleClick} >Click and get a dog!!!</button>;
}

export default Button;
