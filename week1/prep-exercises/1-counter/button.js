import React from 'react';

function Count({ count, feedback1, feedback2 }) {
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{feedback1}</h2>
      <h2>{feedback2}</h2>
    </div>
  );
}

function ButtonPlus({ handleAddOne }) {
  return (
    <button onClick={handleAddOne}>
      Add 1!
    </button>
  );
}

function ButtonPlus2({ handleAdd2 }) {
  return (
    <button onClick={handleAdd2}>
      Add 2!
    </button>
  );
}
function ButtonMinus({handleMinusOne}) {
  return (
    <button onClick={handleMinusOne}>
      Decrease 1!
    </button>
  );
}

function ButtonMinus2({handleMinus2}) {
  return (
    <button onClick={handleMinus2}>
      Decrease 2!
    </button>
  );
}

export { Count, ButtonPlus, ButtonPlus2, ButtonMinus, ButtonMinus2  };


// export default { Count, ButtonPlus, ButtonPlus2, ButtonMinus, ButtonMinus2  };

