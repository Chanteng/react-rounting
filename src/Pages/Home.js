import React from 'react'
import { Link } from "react-router-dom"


 function Home() {
    return (
        <div>
            
  
        <Link to="/" className="link-tap">Home</Link>
        <Link to="/about" className="link-tap">About</Link>
        <Link to="/contacts" className="link-tap">Contacts</Link>
        <Link to="/services" className="link-tap">Services</Link>

        <h1>Welcome to our homepage</h1>
        <p>How may I help you!</p>

        </div>
    )
}


export default Home