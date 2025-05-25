import { Logout } from "../../utils/firebase"
import "./Navbar.css"
import React from 'react'

const NavbarHome = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
      </div>
      <div className="navbar-right">
        
        <button className='signup-btn' 
        onClick={()=>{Logout()}}>
          Log out
        </button>
      </div>
    </div>
  )
}

export default NavbarHome
