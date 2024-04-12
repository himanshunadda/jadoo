import React from 'react';
import '../EasyFast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function EasyFast() {
    const style = {
        width : "60px"
   };
   const cardStyle = {
    width :"25px",
   }
  return (
    
    <div class="easy__fast">
        <div className="info">
            <div className="heading">
            <p>Easy and Fast</p>
          <h2>
            Book Your Next Trip<br/>In 3 Easy Steps
          </h2>
            </div>
          <ul className='options'>
            <li className='option'>
            <img src='pictures/noun-search-6768344.png' style={style}/>
            <div className="option__info">
            <h6>Choose</h6>
            <p>Lorem ipsum dolor sit.</p>
            </div>
                     </li>

            <li className='option'>
            <img src = 'pictures/noun-payment-6771417.png' style={style}/>
            
            <div className="option__info">
            <h6>Payment</h6>
            <p>Fugiat perferendis dolore vel.</p>
            </div>
                    </li>

            <li className='option'>
            <img src='pictures/noun-airport-6632851.png' style={style}/>
            <div className="option__info">
            <h6>Airport</h6>
            <p>Sapiente quibusdam eius pariatur laboriosam.</p>
            </div>         </li>

          </ul>
        </div>
        <div className="option__card">
           <div className="container">
           <img src="pictures/greeece.jfif" alt="" style={{width:"350px", height:"250px",borderRadius : "20px",margin:"20px 10px"}}/>
            <div className="option__card_info">
            <h4>Trip To Greece</h4>
            <div className="date__guide">
                <p>14-29</p>
                <p id='guide'>|by Robbin</p>
            </div>
            <div className="icons">
                <img src="pictures/noun-leaf-6729190.png" alt="" style={cardStyle} />
                <img src="pictures/noun-notebook-6773998.png" alt="" style={cardStyle} />
                <img src="pictures/noun-post-6285279.png" alt="" style={cardStyle}/>
            </div>
            <div className="people">
                <img src="pictures/noun-group-415129.png" alt="" style={cardStyle} />
                <p>24 people</p>
            </div>
            </div>
           </div>

           
        </div>
      
    </div>
  )
}

export default EasyFast
