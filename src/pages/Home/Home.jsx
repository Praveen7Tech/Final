import "./Home.css"
import NavbarHome from "../../components/Navbar/NavbarHome"
import HeroContainer from "../../components/MainContainer/HeroContainer"
import SecondaryContainer from "../../components/SecondaryContainer/SecondaryContainer"
import Footer from "../../components/Footer/Footer"

const Home = () => {

  return (
    <div className="home">
      <NavbarHome/>
      <HeroContainer/>
      <SecondaryContainer/>
      <Footer/>
    </div>
  )
}

export default Home
