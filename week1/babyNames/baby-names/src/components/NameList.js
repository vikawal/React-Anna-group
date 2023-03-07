import React from 'react';
import NameColor from './NameColor.js';

function NamesList ({names}) {
  return (
    <div className="names">
      {names.map((item) => (
      <NameColor key={item.id} 
      name={item.name} 
      sex= {item.sex} />
      ))
      }
    </div>
  );
}
export default NamesList;
// function Name({ name, sex }) {
//   const color = sex === 'f' ? 'pink' : 'blue';
//   return (
//     <p style={{ color }}>{name}</p>
//   );
// }

// export default Name;