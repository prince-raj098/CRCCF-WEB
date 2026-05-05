import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, ArrowRight, ArrowLeft, Calendar } from 'lucide-react'
import './Insights.css'

const posts = [
  {
    cat: 'Cybersecurity',
    catColor: '#1A56DB',
    date: 'April 15, 2025',
    title: 'How to Protect Yourself from UPI Frauds in India',
    excerpt: 'With digital payments growing rapidly, UPI fraud cases have surged. Here is a comprehensive guide to staying safe while using UPI apps.',
    fullContent: '1. Never share your UPI PIN or OTP with anyone.\n2. Do not scan QR codes to receive money; scanning is only for paying.\n3. Verify the receiver\'s UPI ID and name before transferring funds.\n4. Set transaction limits on your banking application.',
    readTime: '5 min read',
  },
  {
    cat: 'Technology',
    catColor: '#7C3AED',
    date: 'April 10, 2025',
    title: 'Top 10 Cybersecurity Practices Every Business Should Follow',
    excerpt: 'Small and medium businesses are increasingly targeted by cybercriminals. Learn the essential security practices that every organisation must implement.',
    fullContent: '1. Implement Multi-Factor Authentication (MFA).\n2. Regularly backup critical data offline.\n3. Train employees to recognize phishing and social engineering.\n4. Keep software, operating systems, and firmware updated.',
    readTime: '7 min read',
  },
  {
    cat: 'Legal',
    catColor: '#DC2626',
    date: 'April 5, 2025',
    title: 'Understanding the IT Act 2000 — Your Digital Rights Explained',
    excerpt: 'The Information Technology Act provides legal remedies for cybercrime victims. Understand how to use the law to protect yourself and seek justice.',
    fullContent: 'Section 43: Penalty for damage to computer system without permission.\nSection 66: Computer related offences.\nSection 66C: Punishment for identity theft.\nSection 66D: Punishment for cheating by personation by using computer resource.',
    readTime: '6 min read',
  },
]

function InsightCard({ p, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleReadMore = (e) => {
    e.stopPropagation();
    setIsFlipped(true);
  };

  const handleGoBack = (e) => {
    e.stopPropagation();
    setIsFlipped(false);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <motion.article
      className={`ins-card book ${isFlipped ? 'flipped' : ''}`}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5, delay: index * .10 }}
    >
      {/* PAGE 3: Deepest Layer (Full Content) */}
      <div className="ins-inside ins-page-3">
        <h4 className="ins-full-title">Full Article</h4>
        <div className="ins-full-content">
          {p.fullContent.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="ins-foot">
          <button className="ins-link" style={{ color: p.catColor }} onClick={handleGoBack}>
            <ArrowLeft size={13} /> Go Back
          </button>
        </div>
      </div>

      {/* PAGE 2: Middle Layer (Excerpt) */}
      <div className={`ins-inside ins-page-2 ${isFlipped ? 'turned' : ''}`}>
        <div className="ins-meta">
          <span className="ins-date">
            <Calendar size={12} />
            {p.date}
          </span>
        </div>

        <p className="ins-excerpt">{p.excerpt}</p>

        <div className="ins-foot">
          <span className="ins-read">{p.readTime}</span>
          <button className="ins-link" style={{ color: p.catColor }} onClick={handleReadMore}>
            Read More <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* COVER: Top Layer */}
      <div
        className={`ins-cover cover ${isFlipped ? 'turned' : ''}`}
        style={{
          background: `linear-gradient(135deg, ${p.catColor}15, ${p.catColor}05)`,
          borderRight: `4px solid ${p.catColor}40`
        }}
      >
        <div className="ins-cover-icon" style={{ background: `${p.catColor}15`, color: p.catColor }}>
          <Newspaper size={32} />
        </div>
        <span className="ins-cat" style={{ background: `${p.catColor}12`, color: p.catColor, border: `1px solid ${p.catColor}25`, marginBottom: '16px' }}>
          {p.cat}
        </span>
        <h3 className="ins-cover-title">{p.title}</h3>
        <div className="ins-cover-hint" style={{ color: p.catColor }}>
          <span className="hint-desktop">Hover to open</span>
          <span className="hint-mobile">Click to open</span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Insights() {
  return (
    <section id="insights" className="section insights-section">
      <div className="container">
        <motion.div
          className="ins-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .55 }}
        >
          <p className="section-tag">Insights & Resources</p>
          <h2 className="section-title">
            Latest <span className="accent">Insights</span>
          </h2>
          <p className="section-subtitle">
            Stay informed with expert articles, cyber safety tips, and industry news from the CRCCF team.
          </p>
        </motion.div>

        <div className="ins-grid">
          {posts.map((p, i) => (
            <InsightCard key={p.title} p={p} index={i} />
          ))}
        </div>

        <div className="ins-view-all">
          <button className="btn btn-blue">
            View All Insights <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  )
}
