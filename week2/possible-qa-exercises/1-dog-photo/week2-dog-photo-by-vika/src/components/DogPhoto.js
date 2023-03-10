import React from "react";
import './dogPhoto.css';

function DogPhoto ({url}) {
  return (
    <div className="container">
      <img src= {url} alt="dog"/>
    </div>
  );
}

export default DogPhoto;
