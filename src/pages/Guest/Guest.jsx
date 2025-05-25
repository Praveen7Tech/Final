import React from 'react'
import "./Guest.css"
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Guest = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <div className="hero-overlay">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Starts at ₹149. Cancel at any time.</h4>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="getStarted">
          <form onChange={(e) => {e.preventDefault()}}>  
            <input type="text" placeholder='Email Address'/>
            <button ><Link to="/login" className='signup-btn'>Get Started</Link></button>
         </form>
          </div>
        </div>
        <div className="hero-bottom-desighn"></div>
      </div>
    </div>
  )
}

export default Guest
