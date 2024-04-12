import React from 'react';
import '../DestinationCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

function DestinationCard({image,time,price,place}) {
  return (
    <div className='destination__card'>
        <div className="image">
          {image}
        </div>
    <div className="trip__info">
        <div className="place__price">
            <p>{place}</p>
            <p>{price}</p>
        </div>
        <div className="time">
            <div className="time__icon">
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
            </div>
      {time}
    </div>
    </div>
    
    
      
    </div>
  )
}

export default DestinationCard
