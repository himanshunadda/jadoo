import React from 'react';
import DestinationCard from './DestinationCard';
import '../TopDestinations.css'

function TopDestinations() {
    const style = {
        borderRadius :  "20px 20px 0px 0px",
        
      width:"100%",
      height:"auto",
    maxWidth: "100%",
     

    }
  return (
    <div className='top__destinations'>
     
      <div className="heading">
      <p>Top Selling</p>
      <h2>Top Destinations</h2>
      </div>
     
      <div className="destination__cards">
     
      <DestinationCard 
      image = {<img src = 'pictures/rome.jfif'  style={style}/>} 
      price = "$23000" 
      time="12 days trip" 
      place = "Rome,Italy"
    
    />

      <DestinationCard 
      image = {<img src = 'pictures/londdon.jfif' style={style}/>} 
      price = "$25000" 
      time="10 days trip" 
      place = "London,England"/>
   
      <DestinationCard 
      image = {<img src = 'pictures/switzerland.jfif' style={style}/>} 
      price = "$50000" 
      time="7 days trip" 
      place = "Zurich,Switzerland"/>
      </div>
    </div>
  )
}

export default TopDestinations
