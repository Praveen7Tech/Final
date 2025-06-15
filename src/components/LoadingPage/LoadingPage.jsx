
import "./LoadingPage.css"

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="netflix-logo">
          <h1>NETFLIX</h1>
        </div>

        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>

        <div className="loading-text">
          <p>Loading your entertainment...</p>
        </div>

        <div className="loading-dots">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
