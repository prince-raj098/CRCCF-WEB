import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Monitor, Server, Database, GitBranch, Wrench, TestTube, Smartphone, Laptop, Palette, LineChart, ShieldCheck } from 'lucide-react'
import './TechnologyStack.css'

const techCards = [
  {
    title: "Frontend Development 🌐🎨",
    icon: <Monitor size={28} />,
    color: "#3B82F6", // Blue
    desc: "We create responsive, modern, and visually engaging user interfaces using the latest technologies and frameworks to ensure performance, scalability, and seamless user experience.",
    sections: [
      { subtitle: "Core Technologies", items: ["HTML 🌐", "CSS 🎨", "JavaScript ⚡"] },
      { subtitle: "Frameworks & Libraries", items: ["Tailwind CSS 🎨", "React ⚛️", "Vue 🟩", "Angular 🔺", "Next 🚀"] }
    ]
  },
  {
    title: "Backend Development ⚙️🖥️",
    icon: <Server size={28} />,
    color: "#10B981", // Green
    desc: "We build powerful and scalable backend systems to handle complex logic and data processing.",
    sections: [
      { subtitle: "Core Technologies", items: ["Python 🐍", "MERN Stack 🟢", "Java ☕"] },
      { subtitle: "Frameworks & Technologies", items: ["Django 🌿", "FastAPI ⚡", "Flask 🍶", "Node 🟢", "Express 🚂", "Spring 🌱", "Spring Boot 🚀", "Hibernate 🔗"] }
    ]
  },
  {
    title: "Database Systems 🗄️🧮",
    icon: <Database size={28} />,
    color: "#F59E0B", // Yellow/Orange
    desc: "We work with both relational and non-relational databases to ensure efficient data management, performance, and scalability.",
    sections: [
      { subtitle: "Relational Databases", items: ["MySQL 🐬", "SQL Databases 📊", "PL/SQL 🧾"] },
      { subtitle: "Non-Relational Databases", items: ["MongoDB 🍃", "NoSQL Databases 🔄"] }
    ]
  },
  {
    title: "Middleware & Integration 🔄🧠⚙️",
    icon: <GitBranch size={28} />,
    color: "#F97316", // Orange
    desc: "We ensure seamless communication between systems and services.",
    sections: [
      { subtitle: "", items: ["REST APIs 🔗", "GraphQL 🔄", "API Gateway ⚙️", "Authentication (JWT, OAuth) 🔐", "Microservices Architecture 🧩"] }
    ]
  },
  {
    title: "DevOps & Pipeline Tools 🚀☁️🔧",
    icon: <Wrench size={28} />,
    color: "#EF4444", // Red
    desc: "We use modern tools for deployment, automation, and continuous integration.",
    sections: [
      { subtitle: "", items: ["Git & GitHub 🐙", "Docker 🐳", "CI/CD Pipelines 🔄", "Kubernetes ☸️", "Cloud Platforms ☁️"] }
    ]
  },
  {
    title: "Testing & API Validation 🧪🔍",
    icon: <TestTube size={28} />,
    color: "#8B5CF6", // Purple
    desc: "",
    sections: [
      { subtitle: "API Testing Tools", items: ["Postman 📬", "Swagger 📖"] },
      { subtitle: "Testing Practices", items: ["Functional Testing ✔️", "Integration Testing 🔗", "Performance Testing ⚡"] }
    ]
  },
  {
    title: "Mobile App Development 📱📲",
    icon: <Smartphone size={28} />,
    color: "#8B5CF6", // Purple
    desc: "We build cross-platform and native mobile applications with high performance.",
    sections: [
      { subtitle: "", items: ["Flutter 💙", "React Native ⚛️", "Kotlin 🤖"] }
    ]
  },
  {
    title: "Desktop App Development 🖥️💻",
    icon: <Laptop size={28} />,
    color: "#A8A29E", // Stone/Brown
    desc: "We develop efficient and user-friendly desktop applications tailored for organizational and enterprise needs.",
    sections: [
      { subtitle: "", items: ["Java Desktop Applications ☕", "Python-Based Applications 🐍", "Cross-Platform Desktop Solutions 🌐"] }
    ]
  },
  {
    title: "Designing, UI/UX & Animation 🧑🎨✨",
    icon: <Palette size={28} />,
    color: "#EC4899", // Pink
    desc: "We focus on creating intuitive, user-friendly, and visually appealing designs that enhance user experience and engagement.",
    sections: [
      { subtitle: "", items: ["UI/UX Design Principles 🎯", "Wireframing & Prototyping 📐", "Interactive Design & User Flow 🔄", "Animation & Motion Design 🎬"] },
      { subtitle: "Tools & Platforms", items: ["Figma 🎨", "Adobe XD 🖌️", "Canva 🧩"] }
    ]
  },
  {
    title: "Digital Marketing & SEO 📈🌐",
    icon: <LineChart size={28} />,
    color: "#06B6D4", // Cyan
    desc: "We help businesses grow digitally by improving online visibility, engagement, and reach through strategic marketing and optimization techniques.",
    sections: [
      { subtitle: "", items: ["Search Engine Optimization (SEO) 🔍", "Social Media Marketing 📱", "Content Strategy & Marketing ✍️", "Website Optimization ⚙️", "Analytics & Performance Tracking 📊"] }
    ]
  },
  {
    title: "Cybersecurity & Advanced Tech 🛡️🤖",
    icon: <ShieldCheck size={28} />,
    color: "#6366F1", // Indigo
    desc: "We integrate security and intelligence into all our solutions.",
    sections: [
      { subtitle: "", items: ["Cybersecurity Practices 🛡️", "Ethical Hacking 🔍", "Digital Forensics 🧪", "Artificial Intelligence 🤖", "Machine Learning 📊"] }
    ]
  }
];

export default function TechnologyStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isAutoHovering, setIsAutoHovering] = useState(false)
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsAutoHovering(true)
        setTimeout(() => setIsAutoHovering(false), 1200)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section id="technology-stack" className="tech-section">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="tech-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-badge">
            <Layers size={14} style={{ color: '#8B5CF6' }} /> Our Technology Stack
          </div>
          <h2 className="tech-title">
            Technologies We <span>Work With</span> 💻⚙️
          </h2>
          <p className="tech-desc">
            We leverage modern, scalable, and industry-standard technologies to build secure, high-performance, and user-friendly digital solutions across platforms.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="tech-grid" ref={ref}>
          {techCards.map((card, index) => (
            <motion.div 
               key={index}
               className={`tech-card ${isAutoHovering ? 'auto-hover' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ '--card-color': card.color }}
            >
              <div className="tech-card-header">
                <div className="tech-card-icon" style={{ color: card.color, backgroundColor: `${card.color}15` }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
              </div>
              
              {card.desc && <p className="tech-card-desc">{card.desc}</p>}
              
              <div className={`tech-card-content ${!expandedCards[index] ? 'mobile-hidden' : ''}`}>
                {card.sections.map((section, sIdx) => (
                  <div key={sIdx} className="tech-subsection">
                    {section.subtitle && <h4>{section.subtitle}</h4>}
                    <div className="tech-tags">
                      {section.items.map((item, iIdx) => (
                        <span key={iIdx} className="tech-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Read More Toggle */}
              <button 
                className="tech-read-more-btn" 
                onClick={() => toggleCard(index)}
              >
                {expandedCards[index] ? 'Show Less' : 'Read More'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
