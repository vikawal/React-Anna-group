import React from 'react';
import "./nameColor.css";

function NameColor ({ name, sex}) {
  const color = sex === "m" ? "blue" : "red";
  
  return ( 
  <button className={color}>
    {name}
  </button>
);
}

export default NameColor;

