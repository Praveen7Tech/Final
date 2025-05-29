import { Logout } from "../../utils/firebase"
import "./Navbar.css"
import React, {  useRef } from 'react'
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import dropdown from "../../assets/caret_icon.svg"
import useNavbarTheme from "../../Hooks/useNavbarTheme"
import { Link, useNavigate } from "react-router-dom"

const NavbarHome = () => {
    const themeRef = useRef()
    useNavbarTheme(themeRef)
    const navigate = useNavigate();

  const handleLogout = async () => {
    await Logout();
    navigate("/", { replace: true }); 
  };

  return (
    <div ref={themeRef} className='navbar'>
      <div className="navbar-left">
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        <ul>
          <li><Link className="nav-Link" to={"/home"}>Home</Link></li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li><Link className="nav-Link" to={"/watchList"}>My List</Link></li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons"/>
        <p>Children</p>
        <img src={bell_icon} alt="" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile"/>
          <img src={dropdown} alt="" />
          <div className="dropdown">
            <p onClick={handleLogout}>Sign Out from NETFLIX</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarHome
