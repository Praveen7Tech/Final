

import "./WatchList.css"
import { X } from "lucide-react"
import { useWatchList } from "../../context/WatchListContext"
import NavbarHome from "../../components/Navbar/NavbarHome"
import Footer from "../../components/Footer/Footer"

export default function Watchlist() {

  const {watchList,removeFromList} = useWatchList()
 
  return (
    <>
    <NavbarHome/>
    <div className="watchlist-container">
      <div className="watchlist-header">
        <h1 className="watchlist-title">My Watchlist</h1>
        <p className="watchlist-subtitle">{watchList.length === 0 ? "Oops Your watch list is empty, please add your favourite movies to watch.." : watchList.length +" "+ "Movies"} </p>
      </div>

      <div className="watchlist-grid">
        {/* Watchlist Item 1 */}
       {watchList.map(movie => (
          <div key={movie.id} className="watchlist-item">
            <div className="item-poster">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              <button onClick={()=> {removeFromList(movie.id)}} className="remove-btn">
                <X size={16} />
              </button>
            </div>
            <div className="item-info">
              <h3 className="item-title">{movie.title}</h3>
              <p className="item-meta">{movie.release_date} • {movie.genres?.map(g => g.name).join(", ")}</p>
              <p className="item-description">{movie.overview}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
    <Footer/>
    </>
  )
}
