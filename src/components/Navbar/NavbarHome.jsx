"use client"

import { Logout } from "../../utils/firebase"
import "./Navbar.css"
import { useRef, useState } from "react"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import dropdown from "../../assets/caret_icon.svg"
import useNavbarTheme from "../../Hooks/useNavbarTheme"
import { Link, useNavigate } from "react-router-dom"

const NavbarHome = () => {
  const themeRef = useRef()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useNavbarTheme(themeRef)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await Logout()
    navigate("/", { replace: true })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMobileMenuItemClick = () => {
    setMobileMenuOpen(false) // Close menu when item is clicked
  }

  return (
    <div ref={themeRef} className="navbar">
      <div className="navbar-left">
        <div className="logo-menu-container">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
          />
          <div className={`menu-toggle ${mobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={mobileMenuOpen ? "show-mobile-menu" : ""}>
          <li onClick={handleMobileMenuItemClick}>
            <Link className="nav-Link" to={"/home"}>
              Home
            </Link>
          </li>
          <li onClick={handleMobileMenuItemClick}>Tv Shows</li>
          <li onClick={handleMobileMenuItemClick}>Movies</li>
          <li onClick={handleMobileMenuItemClick}>New & Popular</li>
          <li onClick={handleMobileMenuItemClick}>
            <Link className="nav-Link" to={"/watchList"}>
              My List
            </Link>
          </li>
          <li onClick={handleMobileMenuItemClick}>Browse by language</li>
          <button className="mobile-logout" onClick={handleLogout}>
            Sign Out from NETFLIX
          </button>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon || "/placeholder.svg"} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon || "/placeholder.svg"} alt="" />
        <div className="navbar-profile">
          <img src={profile_img || "/placeholder.svg"} alt="" className="profile" />
          <img src={dropdown || "/placeholder.svg"} alt="" />
          <div className="dropdown">
            <p onClick={handleLogout}>Sign Out from NETFLIX</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarHome
