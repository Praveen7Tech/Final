import { Monitor, Download, Smartphone, Users } from "lucide-react"
import "./FeaturesSection.css"

const features = [
  {
    title: "Enjoy on your TV",
    description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: Monitor,
    iconColor: "bg-purple-500",
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favourites easily and always have something to watch.",
    icon: Download,
    iconColor: "bg-pink-500",
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: Smartphone,
    iconColor: "bg-red-500",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: Users,
    iconColor: "bg-yellow-500",
  },
]

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2 className="features-title">More reasons to join</h2>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className={`feature-icon ${feature.iconColor}`}>
                <IconComponent size={32} color="white" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
