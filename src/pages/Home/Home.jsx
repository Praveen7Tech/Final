import "./Home.css"
import NavbarHome from "../../components/Navbar/NavbarHome"
import HeroContainer from "../../components/MainContainer/HeroContainer"
import CardsContainer from "../../components/MainContainer/CardsContainer"

const Home = () => {

  return (
    <div className="home">
      <NavbarHome/>
      <HeroContainer/>
      <CardsContainer/>
    </div>
  )
}

export default Home
