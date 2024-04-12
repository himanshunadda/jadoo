import React from 'react'
import '../Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
       <div className="logo">
          <h1>Jadoo</h1>
       </div>
       <nav>
        <a href="/Destinations">Destinations</a>
            <a href="/Hotels">Hotels</a>
            <a href="/Flights">Flights</a>
            <a href="/Bookings">Bookings</a>
            

       </nav>
       
       <div className="account">
            <a href="/Login">Login</a>
            <button>Sign up</button>
            </div>
    </div>
  )
}

export default Navbar
