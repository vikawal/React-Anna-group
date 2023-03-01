import React, { useState } from 'react';
import {ButtonPlus, ButtonPlus2, Count, ButtonMinus, ButtonMinus2} from './button';


function Counter() {
  const [count, setCount] = useState(0);

  const handleAddOne = () => {
    setCount(+count + 1);
  };
  const handleAdd2 = () => {
    setCount(+count + 2);
  };
  const handleMinusOne = () => {
    if (count>0) {
      setCount(+count - 1);
    }
    else {
    setCount(0);
    }
  }

   const handleMinus2 = () => {
    if (count >=2) {
      setCount (+count - 2);
    }
    else {
      setCount(0);
    }
   }

  const feedback1 = count > 10 ? "It's higher than 10!" : "Keep counting...";
  const feedback2 = count ===0 ? "It cannot be lower than zero": "";

  return (
    <div>
      <Count count={count} feedback1={feedback1} feedback2={feedback2}/>
      <ButtonPlus handleAddOne={handleAddOne} />
      <ButtonMinus handleMinusOne={handleMinusOne}/>
      <ButtonPlus2 handleAdd2={handleAdd2} />
      <ButtonMinus2 handleMinus2={handleMinus2}/>
    </div>
  );
}

export default Counter;