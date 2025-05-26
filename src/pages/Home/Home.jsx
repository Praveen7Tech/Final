import "./Home.css"
import NavbarHome from "../../components/Navbar/NavbarHome"
import HeroContainer from "../../components/MainContainer/HeroContainer"
import SecondaryContainer from "../../components/SecondaryContainer/SecondaryContainer"

const Home = () => {

  return (
    <div className="home">
      <NavbarHome/>
      <HeroContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Home
