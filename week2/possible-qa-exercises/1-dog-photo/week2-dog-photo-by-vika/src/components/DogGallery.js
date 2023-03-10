import React, {useState} from 'react';
import Button from './Button.js'
import DogPhoto from './DogPhoto.js'
import './dogGallery.css';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);

  function getDogPhoto () {
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then ((response) => response.json())
    .then ((data) => setDogPhotos([...dogPhotos, data.message]));
  }
 return (
  <div>
    <Button handleClick={getDogPhoto} />
    {dogPhotos.length=== 0 ? (
      <p className='message'>Get your first dog pic by clicking the button!</p>
    ) : (
      dogPhotos.map((url, index) => 
      <DogPhoto key={index} url={url} />)
    )
    }
  </div>


);
}


export default DogGallery;
