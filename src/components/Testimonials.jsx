import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Rajesh Kumar Sinha',
    role: 'Business Owner, Patna',
    text: 'CRCCF helped me recover my entire savings that were fraudulently transferred. Their professional guidance was exceptional.',
    img: 'RK'
  },
  {
    name: 'Priya Sharma',
    role: 'Graduate Student, Ranchi',
    text: 'I was a victim of cyberbullying and online harassment. CRCCF team was incredibly empathetic and handled it quickly.',
    img: 'PS'
  },
  {
    name: 'Vikram Singh',
    role: 'IT Manager, Noida',
    text: 'Thorough security audit for our fintech platform. They identified 3 critical vulnerabilities we missed. Deep expertise.',
    img: 'VS'
  },
  {
    name: 'Anita Devi',
    role: 'Senior Citizen, Bhagalpur',
    text: 'Lost money in banking fraud. CRCCF guided us step by step to freeze accounts and recover the amount. True lifesavers.',
    img: 'AD'
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur, Ahmedabad',
    text: 'CRCCF secured our systems after a database compromise and guided us through data protection compliance.',
    img: 'AP'
  },
  {
    name: 'Sneha Reddy',
    role: 'Software Engineer, Hyderabad',
    text: 'The Cybersecurity Awareness bootcamp completely changed my perspective on secure coding. Highly recommended.',
    img: 'SR'
  },
  {
    name: 'Manoj Tiwari',
    role: 'School Principal, Lucknow',
    text: 'Brilliant workshop on digital safety for our students. Engaging and highly effective in today\'s digital age.',
    img: 'MT'
  },
  {
    name: 'Kavita Desai',
    role: 'Freelancer, Pune',
    text: 'Quick intervention helped me recover my freelancing account after a phishing attack. Secure identity within 48h.',
    img: 'KD'
  }
]

const row1 = testimonials.slice(0, 4)
const row2 = testimonials.slice(4, 8)

const TestimonialCard = ({ item }) => (
  <div className="testi-marquee-card">
    <div className="testi-card-header">
      <div className="testi-card-av">{item.img}</div>
      <div className="testi-card-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
    </div>
    <div className="testi-card-content">
      <div className="testi-card-quote">“</div>
      <p className="testi-card-text">{item.text}</p>
    </div>
    <div className="testi-card-footer">
      <h4 className="testi-card-name">{item.name}</h4>
      <p className="testi-card-role">{item.role}</p>
    </div>
  </div>
)

const MarqueeRow = ({ items, direction = 'left' }) => {
  const scrollValue = direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"]
  
  return (
    <div className="marquee-container">
      <motion.div 
        className="marquee-track"
        animate={{ x: scrollValue }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section testi-marquee-section">
      <div className="container">
        <motion.div
          className="testi-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About our <span className="accent">presence</span>
          </h2>
        </motion.div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-gradient left"></div>
        <MarqueeRow items={row1} direction="right" />
        <MarqueeRow items={row2} direction="left" />
        <div className="marquee-gradient right"></div>
      </div>
    </section>
  )
}
