import { Link, useParams } from "react-router-dom"
import "./MovieDetails.css"
import { Play, PlusCircle } from "lucide-react"
import useMovieDetails from "../../Hooks/useMovieDetails"
import { POSTER_CDN } from "../../utils/constants"
import { useWatchList } from "../../context/WatchListContext"
import NavbarHome from "../../components/Navbar/NavbarHome"
import Footer from "../../components/Footer/Footer"

export default function MovieDetails() {

  const {id} = useParams()
  const {movieDetails} = useMovieDetails(id)
  const {addToList, watchList, removeFromList} = useWatchList()

  let alradyInList = watchList.some(item => item.id == id)
  console.log("id true",alradyInList)

  if(!movieDetails) return 
  const {title, overview, poster_path, genres, release_date, spoken_languages} = movieDetails

 
  const addToWatchList = ()=>{
    console.log("button clicked")
    addToList(movieDetails)
  }
  const removeFromWatchList =()=>{
    removeFromList(id)
    alradyInList = false
  }

  return (
    <>
    <NavbarHome/>
    <div className="movie-details-container">
      {/* Main Movie Card */}
      <div className="movie-card">
        <div className="movie-poster">
          <img src={POSTER_CDN+poster_path} alt="Movie Poster" />
        </div>

        <div className="movie-info">
          <h1 className="movie-title">{title}</h1>

          <div className="movie-meta">
            <span>{release_date}</span>
            <span>•</span>
            <span>U/A 16+</span>
            <span>•</span>
            <span>{genres.map(genre => genre.name).join(", ")}</span>
          </div>

          <div className="movie-buttons">
            
            <button className="btn btn-primary">
              <Play size={20} />
              <Link className="play-trailer" to={`/player/${id}`}><span>Play Trailer</span></Link>
            </button>
            {alradyInList ? 
            <button onClick={removeFromWatchList} className="btn btn-secondary">
              <PlusCircle size={20} />
              <span>Remove From Watchlist</span>
            </button>
            :
            <button onClick={addToWatchList} className="btn btn-secondary">
              <PlusCircle size={20} />
              <span>Add to Watchlist</span>
            </button>
            }
          </div>

          <div className="movie-content">
            <div className="movie-description">
              <p>
               {overview}
              </p>
            </div>

            <div className="movie-starring">
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More Details Section */}
      <div className="more-details-section">
        <h2 className="section-title">More Details</h2>

        <div className="details-grid">
          {/* Watch Offline Card */}
          <div className="detail-card">
            <h3>Watch offline</h3>
            <p className="detail-subtitle">Available to download</p>

            <h4>Genres</h4>
            <p>{genres.map(genre => genre.name).join(", ")}</p>

            <h4>This show is...</h4>
            <p>Emotional, Drama, Halls of Power, Bollywood, Overcoming the Odds, and Movie</p>
          </div>

          {/* Audio Card */}
          <div className="detail-card">
            <h3>Audio</h3>
            <p>{spoken_languages.map(lan => lan.english_name).join(", ")}</p>

            <h4>Subtitles</h4>
            <p>English</p>
          </div>

          {/* Cast Card */}
         
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
