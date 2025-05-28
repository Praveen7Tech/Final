import React, { useRef, useState } from 'react'
import "./Guest.css"
import Navbar from '../../components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { validateGuestEmail } from '../../utils/validateGuestEmail'
import TrendingSection from '../../components/Trending/TrendingSection'
import FeaturesSection from '../../components/Features/FeaturesSection'
import FooterG from '../../components/Footer/FooterGuest'

const Guest = () => {
  const [emailError, setEmailError] = useState(null)

  const email = useRef()
  const navigate = useNavigate()

  const ValidateGuest = () => {
  const emailValue = email.current.value;
  const emailMessage = validateGuestEmail(emailValue); 

    if (emailMessage) {
      setEmailError(emailMessage); 
    } else {
      setEmailError(null); 
      navigate("/login"); 
    }
 }
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <div className="hero-overlay">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Starts at ₹149. Cancel at any time.</h4>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="getStarted">
          <form onSubmit={(e) => {
            e.preventDefault()
             ValidateGuest()
            }}>  
            <input ref={email} type="text" placeholder='Email Address'/>
            <button type='submit'>Get Started</button>
         </form>
          </div>
          <span className='emailSpan'>{emailError}</span>
        </div>
        <div className="hero-bottom-desighn"></div>
      </div>
      <TrendingSection/>
      <FeaturesSection/>
      <FooterG/>
    </div>
  )
}

export default Guest
