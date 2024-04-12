import React from 'react';
import Categorycard from './Categorycard';
import '../Category.css'


function Category() {
  return (
    <div>
        
      <div className="heading">
        <p>CATEGORY</p>
        <h1>We Offer Best</h1>
      </div>
      <div className="cards">
        <Categorycard sticker= {<img src='pictures/setellite.png' width={"75px"} style={{ borderRadius: 35 }}/>} heading="Calculated Weather" description="Built Wicket longer admire do arton vanity itself do in it."/>
        <Categorycard sticker={<img src='pictures/6306502.jpg' width={"75px"}    style={{ borderRadius: 35 }}/>} heading="Best Flights" description="Engrossed listening. Park gate sell they west hard for teh."/>
         <Categorycard sticker={<img src='pictures/10596556.png' width={"75px"}   style={{ borderRadius: 35 }}/>} heading="Local Events" description="Bartan vanity itself do in it. Preferal to men it engossed listening"/>
        <Categorycard sticker={<img src='pictures/setting.png' width={"75px"}   style={{ borderRadius: 35 }}/>} heading="Customization" description="We deliver outsourced avlation services for military customers"/>
      </div> 
    </div>
  )
}

export default Category
