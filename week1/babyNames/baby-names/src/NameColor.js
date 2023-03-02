import React from 'react';

function NameColor ({ name, sex}) {
  const color = sex === "m" ? "blue" : "red";
  
  return ( 
  <button className={color}>
    {name}
  </button>
);
}

export default NameColor;

