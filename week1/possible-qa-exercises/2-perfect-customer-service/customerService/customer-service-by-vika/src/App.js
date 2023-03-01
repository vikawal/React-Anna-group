import React from 'react';
import Guarantee from './Guarantee';
import "./App.css";

function App () {
  return (
    <div className='App'>

       <Guarantee 
       img={require ('./exercises/f-delivery.png')}
       title="Free shipping"
       description = "Here's very interesting and extremely inportant information about absolutely FREE shipping. Can you imagine it's possible? Dare to dream!"
       /> 
 
        <Guarantee
        img= {require ('./exercises/coin.png')}
        title = '100% money back'
        description = 'Yes! You can get and you will get all money back if something goes wrong. We are so confident in our service, that we give this guarantee obligation happily to our clients '
         />
          
        <Guarantee 
        img = {require('./exercises/chat.png')}
        title = 'Online support 24/7'
        description = 'Of course we are always there for you, whereever you are and whatever you might need to fix, ask, change, update. Our customer will always get our professional help'
        />
        
    </div>
  );
}

export default App;
