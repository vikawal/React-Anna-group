import React from 'react';


function Guarantee (props) {
  

  return (
    <div>
    <img src={props.img} alt={props.title} />
    <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
    <p style={{ textAlign: 'center' }}>{props.description} </p>
    </div>
  );
}




export default Guarantee;




