import "./Hero.css"
import useTrailerVideo from '../../Hooks/useTrailerVideo'

const VideoBackground = ({movieId}) => {

   const {trailerKey} = useTrailerVideo(movieId)
  return (
    <div className="Trailer-container">
      <iframe
        className="Tariler"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Gradient overlay */}
      <div className="video-gradient-overlay"></div>
    </div>
  );
}

export default VideoBackground
