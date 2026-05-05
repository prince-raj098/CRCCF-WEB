import { useParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Gallery.css'

export default function CategoryPage() {
  const { id } = useParams()

  const categoryNames = [
    "Our Student",
    "Media & Press Coverage",
    "Event",
    "Team Moments",
    "Certificates",
    "Client Work",
    "Training Programs",
    "Cyber Awareness Campaigns",
    "Product Launches",
    "Investigation Cases",
    "Research & Development",
    "Internship Activity",
    "UI & UX Designs",
    "Seminar Session",
    "Course"
  ]

  const title = categoryNames[id] || "Gallery"
  const heroImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"

  const sections = [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Learning Environment",
      desc: "Students collaborating in a modern classroom with advanced tools and resources.",
    },
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      title: "Group Activities",
      desc: "Teamwork and communication through engaging group activities.",
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      title: "Presentations",
      desc: "Students presenting ideas and improving confidence through discussions.",
    },
  ]

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="cat-page-root">
        {/* TOP SECTION */}
        <div className="cat-page-hero">
          <div className="cat-page-hero-card">
            <h1 className="cat-page-hero-title">{title}</h1>
            <div className="cat-page-hero-line" />
            <p className="cat-page-hero-desc">
              Empowering students, inspiring excellence,
              <br className="hidden sm:block" />
              building a brighter future.
            </p>
          </div>

          <div>
            <img
              src={heroImage}
              alt="hero"
              className="cat-page-hero-img"
            />
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="cat-page-content">
          {sections.map((item, index) => (
            <div key={index} className="cat-section-row">
              <div className="cat-section-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cat-section-img"
                />
              </div>

              <div className="cat-section-card">
                <div className="cat-section-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
