import React from 'react';
import Hobby from './Hobby';

function HobbyList () {
  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

  return (
    <div>
      {hobbies.map((hobby, index) => (
        <Hobby key = {index} hobby = {hobby} />
      )
      )
      }
    </div>
  );
}


export default HobbyList;



// export default { Count, ButtonPlus, ButtonPlus2, ButtonMinus, ButtonMinus2  };

