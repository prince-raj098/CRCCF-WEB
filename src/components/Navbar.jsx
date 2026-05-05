import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Bell, Search } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home',            href: '/#home' },
  { label: 'About Us',        href: '/#about' },
  { label: 'Our Services',    href: '/#services' },
  {
    label: 'Skill Development',
    href: '/#skill',
    children: [
      { label: 'Cyber Security Training', href: '/#skill' },
      { label: 'Software Development',    href: '/#skill' },
      { label: 'Ethical Hacking',         href: '/#skill' },
      { label: 'Digital Forensics',       href: '/#skill' },
    ],
  },
  { label: 'Insights',  href: '/#insights'  },
  { label: 'Careers',   href: '/#careers'   },
  { label: 'Gallery',   href: '/gallery'   },
  { label: 'Contact',   href: '/#contact'   },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [openDd,       setOpenDd]       = useState(null)
  const [mobileExp,    setMobileExp]    = useState(null)
  const [searchOpen,   setSearchOpen]   = useState(false)
  const [searchQuery,  setSearchQuery]  = useState('')
  const [searchResult, setSearchResult] = useState(null) // 'found' | 'none' | null
  
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery('')
    setSearchResult(null)
  }

  // Close search on outside click or Escape
  useEffect(() => {
    if (!searchOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeSearch() }
    const onClick = (e) => {
      if (!e.target.closest('.nav-search-zone')) closeSearch()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [searchOpen])

  const go = (href) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '')
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(href)
    }
  }


  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    // Try to match nav links first, then any heading on the page
    const q = searchQuery.trim().toLowerCase()
    const matched = navLinks.find(l => l.label.toLowerCase().includes(q))
    if (matched) {
      go(matched.href)
      setSearchResult('found')
      setTimeout(closeSearch, 600)
      return
    }
    // Fallback: scan all headings
    const headings = [...document.querySelectorAll('h1,h2,h3,h4,section[id]')]
    const hit = headings.find(el =>
      el.textContent?.toLowerCase().includes(q) || el.id?.toLowerCase().includes(q)
    )
    if (hit) {
      hit.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setSearchResult('found')
      setTimeout(closeSearch, 600)
    } else {
      setSearchResult('none')
    }
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-shadow' : ''}`}>
        <div className="navbar-inner container">

          {/* ── LOGO ── */}
          <a className="nav-logo" href="#home" onClick={e => { e.preventDefault(); go('#home') }}>
            <img src="/Logo.png" alt="CRCCF Logo" className="nav-logo-img" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">CRCCF</span>
              <span className="nav-logo-sub">CR CYBER CRIME FOUNDATION</span>
            </div>
          </a>

          {/* ── DESKTOP LINKS ── */}
          <nav className="nav-links">
            {navLinks.map(link => (
              <div
                key={link.label}
                className="nav-item"
                onMouseEnter={() => link.children && setOpenDd(link.label)}
                onMouseLeave={() => setOpenDd(null)}
              >
                <a
                  className="nav-link"
                  href={link.href}
                  onClick={e => { e.preventDefault(); !link.children && go(link.href) }}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={13}
                      className={`nav-chev ${openDd === link.label ? 'open' : ''}`}
                    />
                  )}
                </a>

                {link.children && (
                  <div className={`nav-dd ${openDd === link.label ? 'show' : ''}`}>
                    {link.children.map(c => (
                      <a key={c.label} href={c.href} className="nav-dd-item"
                        onClick={e => { e.preventDefault(); go(c.href) }}>
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── RIGHT ── */}
          <div className="nav-right">

            {/* SEARCH */}
            <div className="nav-search-zone">
              <AnimatePresence initial={false}>
                {searchOpen && (
                  <motion.form
                    className="nav-search-form"
                    onSubmit={handleSearch}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 210, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <input
                      autoFocus
                      className={`nav-search-input${searchResult === 'none' ? ' nav-search-error' : ''}`}
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={e => { setSearchQuery(e.target.value); setSearchResult(null) }}
                    />
                    <button type="submit" className="nav-search-submit" aria-label="Go">
                      <Search size={13} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              <button
                className={`nav-search-btn ${searchOpen ? 'nav-search-btn--active' : ''}`}
                onClick={() => searchOpen ? closeSearch() : setSearchOpen(true)}
                aria-label="Search"
              >
                {searchOpen ? <X size={16} /> : <Search size={16} />}
              </button>
            </div>

            <button className="nav-bell">
              <Bell size={17} />
              <span className="bell-badge">3</span>
            </button>
            <button
              className="nav-report-btn"
              onClick={() => go('#contact')}
            >
              Report Crime
            </button>
          </div>

          {/* ── HAMBURGER ── */}
          <button
            className="nav-ham"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
            >
              <div className="mobile-head">
                <img src="/Logo.png" alt="CRCCF" className="mobile-logo-img" />
                <button className="mobile-close" onClick={() => setMobileOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <nav className="mobile-nav">
                {navLinks.map(link => (
                  <div key={link.label}>
                    <div
                      className="mobile-link"
                      onClick={() => {
                        if (link.children) setMobileExp(v => v === link.label ? null : link.label)
                        else go(link.href)
                      }}
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown size={14}
                          className={`nav-chev ${mobileExp === link.label ? 'open' : ''}`}
                        />
                      )}
                    </div>
                    <AnimatePresence>
                      {link.children && mobileExp === link.label && (
                        <motion.div
                          className="mobile-sub"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.children.map(c => (
                            <div key={c.label} className="mobile-sub-link"
                              onClick={() => go(c.href)}>
                              {c.label}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="mobile-foot">
                <button
                  className="nav-report-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => go('#contact')}
                >
                  Report Crime
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
