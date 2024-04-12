import React from 'react'
import '../Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="sitemap">
                <div className="company__name">
                    <h2>Jadoo</h2>
                    <p>Book your trip in nimute, get full<br/>
                     Control for much longer.</p>

                </div>
                
                <div className="company">
                    <h3>Company</h3>
                    <ul className='about__company'>
                        <li><p>About</p></li>
                        <li><p>Career</p></li>
                        <li><p>Mobile</p></li>
                    </ul>

                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <ul className='about__company'>
                        <li><p>Help/FAQ</p></li>
                        <li><p>Press</p></li>
                        <li><p>Affilates</p></li>
                    </ul>

                </div>
                <div className="More">
                    <h3>More</h3>
                    <ul className='about__company'>
                        <li><p>Airlinefees</p></li>
                        <li><p>Airline</p></li>
                        <li><p>Low fare tips</p></li>
                    </ul>
                   
                </div>
                <div className="social__media">
                    <div className="sm__icons">
                        <img src="pictures/noun-facebook-6719933.png" alt="" width={"35px"} height={"30px"} />
                        <img src="pictures/noun-instagram-6299535.png" alt="" width={"20px"} />
                        <img src="pictures/noun-twitter-6755467.png" alt="" width={"20px"} />
                       
                    </div>
                    <p>Discover our app</p>
                    <div className='store'>
                        <img src="pictures/noun-media-2364213.png" alt="" width={"25px"} />
                        <img src="pictures/noun-app-store-3136590.png" alt=""width={"25px"} />
                    </div>
                    
                </div>
            </div>
            <div className="rights">
                <p>All rights reserved@jadoo.co</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
