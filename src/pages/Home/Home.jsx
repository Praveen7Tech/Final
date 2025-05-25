import "./Home.css"
import React from 'react'
import NavbarHome from "../../components/Navbar/NavbarHome"

const Home = () => {
  return (
    <div className="home">
      <NavbarHome/>
      <div className="hero">
        <h1>Home page</h1>
      </div>
    </div>
  )
}

export default Home
