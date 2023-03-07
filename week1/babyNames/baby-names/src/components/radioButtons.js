import React from 'react';
import maleImage from './pics/male.png';
import femaleImage from './pics/female.png';
import maleFemaleImage from './pics/f&m.png';
import "./radioButtons.css";

function RadioButtons({ gender, setGender }) {
  return (
    <div className="buttons">
      <label>
        <input type="radio" name="gender" value="" checked={!gender} onChange={() => setGender("")} />
        <img src={maleFemaleImage} alt="All" />
      </label>
      <label>
        <input type="radio" name="gender" value="f" checked={gender === "f"} onChange={() => setGender("f")} />
        <img src={femaleImage} alt="Female" />
      </label>
      <label>
        <input type="radio" name="gender" value="m" checked={gender === "m"} onChange={() => setGender("m")} />
        <img src={maleImage} alt="Male" />
      </label>
    </div>
  );
}

export default RadioButtons;