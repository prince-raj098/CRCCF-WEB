import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaXTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaGlobe,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa6';
import { 
  User,
  Mail,
  Edit3,
  MessageSquare,
  MapPin, 
  ExternalLink,
  HelpCircle,
  Building2,
  HeadphonesIcon,
  Lock
} from 'lucide-react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import './ReachUs.css';

export default function ReachUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [activeSocial, setActiveSocial] = useState(null);
  const [autoHover, setAutoHover] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Teaser animation: show hover state for 1.2s shortly after load
    const timer = setTimeout(() => {
      setAutoHover(true);
      setTimeout(() => setAutoHover(false), 1200);
    }, 500);

    const handleClickOutside = () => setActiveSocial(null);
    window.addEventListener('click', handleClickOutside);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrors(prev => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const branches = [
    {
      city: "New York, USA",
      address: "123 Cyber Avenue, Tech District NY 10001, United States",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "London, UK",
      address: "45 Security Square, Canary Wharf E14 5AB, United Kingdom",
      phone: "+44 20 7123 4567"
    },
    {
      city: "Singapore",
      address: "88 Innovation Drive, Marina Bay 018956, Singapore",
      phone: "+65 6789 0123"
    }
  ];

  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      label: 'Facebook', 
      handle: 'Crcyber-Crime', 
      link: 'https://www.facebook.com/people/Crcyber-Crime/61576052739281/', 
      color: '#1877F2',
      gradient: 'linear-gradient(45deg, #1877F2, #3b5998)'
    },
    { 
      icon: <FaXTwitter />, 
      label: 'Twitter', 
      handle: '@crcybercrime', 
      link: 'https://x.com/', 
      color: '#000000',
      gradient: 'linear-gradient(45deg, #000000, #333333)'
    },
    { 
      icon: <FaLinkedinIn />, 
      label: 'LinkedIn', 
      handle: 'cr-cyber-crime', 
      link: 'https://www.linkedin.com/company/cr-cyber-crime/posts/?feedView=all', 
      color: '#0A66C2',
      gradient: 'linear-gradient(45deg, #0A66C2, #0077B5)'
    },
    { 
      icon: <FaInstagram />, 
      label: 'Instagram', 
      handle: '@crcybercrime', 
      link: 'https://www.instagram.com/crcybercrime/', 
      color: '#E4405F',
      gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
    },
    { 
      icon: <FaYoutube />, 
      label: 'YouTube', 
      handle: 'CRCCF Official', 
      link: '#', 
      color: '#FF0000',
      gradient: 'linear-gradient(45deg, #FF0000, #CC0000)'
    },
    { 
      icon: <FaGlobe />, 
      label: 'Website', 
      handle: 'crcybercrime.com', 
      link: 'https://crcybercrime.com/', 
      color: '#2563EB',
      gradient: 'linear-gradient(45deg, #2563EB, #3B82F6)'
    },
    { 
      icon: <FaTelegram />, 
      label: 'Telegram', 
      handle: 'crccf_updates', 
      link: '#', 
      color: '#26A5E4',
      gradient: 'linear-gradient(45deg, #26A5E4, #229ED9)'
    },
    { 
      icon: <FaWhatsapp />, 
      label: 'WhatsApp', 
      handle: '+91 97779 99529', 
      link: 'https://api.whatsapp.com/send/?phone=919777999529&text&type=phone_number&app_absent=0', 
      color: '#25D366',
      gradient: 'linear-gradient(45deg, #25D366, #128C7E)'
    },
    { 
      icon: <FaPhone />, 
      label: 'Phone', 
      handle: '+91 97779 99529', 
      link: 'tel:+919777999529', 
      color: '#3B82F6',
      gradient: 'linear-gradient(45deg, #3B82F6, #1D4ED8)'
    },
    { 
      icon: <FaEnvelope />, 
      label: 'Email', 
      handle: 'hr@crcybercrime.org', 
      link: 'mailto:hr@crcybercrime.org', 
      color: '#EA4335',
      gradient: 'linear-gradient(45deg, #EA4335, #C5221F)'
    }
  ];

  const handleSocialClick = (e, index) => {
    if (window.innerWidth <= 1024) {
      if (activeSocial !== index) {
        e.preventDefault();
        e.stopPropagation();
        setActiveSocial(index);
      }
    }
  };

  return (
    <div className="ru-root">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="ru-hero">
        <div className="ru-hero-bg"></div>
        <div className="ru-hero-content">
          <motion.h1 
            className="ru-hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Reach <span>Us</span>
          </motion.h1>
          <motion.p 
            className="ru-hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We're here to help. Reach out to <b>CRCCF</b> on any of our official platforms 
            to stay informed, <b>get support</b>, or join our global mission.
          </motion.p>
        </div>
      </section>

      <main className="ru-main">
        <div className="ru-grid">
          {/* Left Column: Form */}
          <motion.div 
            className="ru-form-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="ru-form-header">
              <h2>Say Hello, On Our <span>Support!</span></h2>
            </div>

            <form onSubmit={handleSubmit} className="ru-form">
              <div className="ru-input-group">
                <div className="ru-input-wrapper">
                  <input id="name" value={formData.name} onChange={handleChange}
                    className={`ru-input-styled ${errors.name ? "error" : ""}`}
                    placeholder="Full Name"
                  />
                  <div className="ru-input-icon icon-name"><User size={18} /></div>
                </div>
                {errors.name && <p className="ru-error-text">{errors.name}</p>}
              </div>

              <div className="ru-input-group">
                <div className="ru-input-wrapper">
                  <input id="email" value={formData.email} onChange={handleChange}
                    className={`ru-input-styled ${errors.email ? "error" : ""}`}
                    placeholder="Email Address"
                  />
                  <div className="ru-input-icon icon-email"><Mail size={18} /></div>
                </div>
                {errors.email && <p className="ru-error-text">{errors.email}</p>}
              </div>

              <div className="ru-input-group">
                <div className="ru-input-wrapper">
                  <input id="subject" value={formData.subject} onChange={handleChange}
                    className={`ru-input-styled ${errors.subject ? "error" : ""}`}
                    placeholder="Subject"
                  />
                  <div className="ru-input-icon icon-subject"><Edit3 size={18} /></div>
                </div>
                {errors.subject && <p className="ru-error-text">{errors.subject}</p>}
              </div>

              <div className="ru-input-group">
                <div className="ru-input-wrapper">
                  <textarea id="message" value={formData.message} onChange={handleChange}
                    className={`ru-textarea-styled ${errors.message ? "error" : ""}`}
                    placeholder="Message"
                  />
                  <div className="ru-input-icon icon-message" style={{ top: '24px' }}><MessageSquare size={18} /></div>
                </div>
                {errors.message && <p className="ru-error-text">{errors.message}</p>}
              </div>

              <button type="submit" className="ru-submit-btn-teal">Send Your Message Now</button>
            </form>
          </motion.div>

        </div>

        {/* Office Branches Section */}
        <section className="ru-branches-section">
          <motion.div 
            className="ru-branches-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Our Office Branches</h3>
            <div className="ru-branches-line"></div>
          </motion.div>

          <div className="ru-branches-grid">
            {branches.map((b, i) => (
              <motion.div 
                key={i} 
                className={`ru-branch-card ${autoHover ? 'is-auto-hover' : ''}`}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="ru-card-top">
                  <div className="ru-branch-icon-box"><MapPin size={32} /></div>
                  <h4>{b.city}</h4>
                </div>
                <div className="ru-card-bottom">
                  <div className="ru-card-content">
                    <span className="ru-card-title">{b.city}</span>
                    <p className="ru-card-txt">{b.address}</p>
                    <a href={`tel:${b.phone}`} className="ru-card-btn">
                      <FaPhone size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      {b.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="ru-map-section">
          <motion.div 
            className="ru-map-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="ru-map-header">
              <h3>Locate Our <span>Headquarters</span></h3>
              <div className="ru-branches-line"></div>
            </div>
            <div className="ru-map-frame-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8202669580455!2d85.80516117523825!3d20.349042381135575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e025984c55%3A0xee1fcd1f11e55141!2sDLF%20Cyber%20City!5e0!3m2!1sen!2sin!4v1777900280403!5m2!1sen!2sin" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CRCCF Headquarters Location"
              ></iframe>
            </div>
          </motion.div>
        </section>

        {/* Follow Us Section (Moved to Bottom) */}
        <section className="ru-social-section">
          <motion.div 
            className="ru-follow-card-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="ru-social-header">
              <h3>Connect With <span>Our Community</span></h3>
              <p>Stay updated with our latest news and initiatives across all official platforms.</p>
            </div>
            <div className="ru-social-grid-v2">
              {socialLinks.map((s, i) => (
                <div 
                  key={i} 
                  className={`tooltip-container ${activeSocial === i ? 'is-active' : ''} ${autoHover ? 'is-auto-hover' : ''}`}
                  style={{ '--brand-color': s.color, '--brand-gradient': s.gradient }}
                  onClick={(e) => handleSocialClick(e, i)}
                >
                  <div className="tooltip">
                    <div className="profile">
                      <div className="user">
                        <img src="/Logo.png" alt="Logo" className="img" />
                        <div className="details">
                          <div className="name">{s.label}</div>
                          <div className="username">{s.handle}</div>
                        </div>
                      </div>
                      <div className="about">Visit Official {s.label}</div>
                    </div>
                  </div>
                  <div className="custom-text-wrapper">
                    <a className="icon" href={s.link} target="_blank" rel="noopener noreferrer">
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="brandSVG">
                          {s.icon}
                        </span>
                      </div>
                      <div className="custom-text">{s.label}</div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
