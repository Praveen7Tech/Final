import { Link } from "react-router-dom"
import "./Navbar.css"
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
      </div>
      <div className="navbar-right">
        <button className='language-btn'>English
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5H7z"/>
            </svg>
            </button>
            <Link to="/login" className="signup-btn-1">Sign In</Link>
      </div>
    </div>
  )
}

export default Navbar
