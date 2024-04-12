import React from 'react';
import '../Categorycard.css';

function Categorycard({sticker,heading,description}) {
  return (
    <div className='card'>
        
        <div className="img">
            {sticker}
        </div>
        <h2>{heading}</h2>
        <p>{description}</p>
      
    </div>
  )
}

export default Categorycard
