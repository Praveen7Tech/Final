import { ChevronRight } from "lucide-react"
import "./TrendingSection.css"
import image1 from "../../assets/cards/image1.webp"
import image2 from "../../assets/cards/image2.webp"
import image3 from "../../assets/cards/image3.webp"
import image4 from "../../assets/cards/image4.webp"
import image5 from "../../assets/cards/image5.webp"
import image6 from "../../assets/cards/image6.webp"
import image7 from "../../assets/cards/image7.webp"

const trendingShows = [
  { id: 1, title: "CHHAVA", image:image1 },
  { id: 2, title: "The Royals", image:image2 },
  { id: 3, title: "The Diplomat", image:image3},
  { id: 4, title: "Khel Khel Mein", image:image4 },
  { id: 5, title: "SIKANDAR", image:image5},
  { id: 6, title: "COURT", image:image6 },
  { id: 7, title: "Series 7", image: image7 },
]

export default function TrendingSection() {
  return (
    <section className="trending-section">
      <div className="trending-header">
        <h2 className="trending-title">Trending Now</h2>
      </div>

      <div className="trending-container">
        <div className="trending-grid">
          {trendingShows.map((show) => (
            <div key={show.id} className="trending-card">
              <div className="card-image-container">
                <img src={show.image || "/placeholder.svg"} alt={show.title} className="card-image" loading="lazy" />
                <div className="card-number">{show.id}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}
