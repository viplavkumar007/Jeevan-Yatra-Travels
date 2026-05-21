import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../data/siteContent'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'T&C', href: '#terms' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-100 bg-white shadow-sm">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="py-3"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-11 w-32 overflow-hidden rounded-2xl bg-white px-0 py-0 ring-2 ring-navy-600/20 shadow-md group-hover:ring-navy-600/50 transition-all duration-300 sm:h-12 sm:w-40">
                <img src={brand.logo} alt="Jeevan Yatra Travels Logo" className="w-full h-full scale-[1.38] object-contain object-center" />
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-900 text-sm leading-tight text-navy-600 transition-colors duration-300">
                  <span className="text-navy-600" style={{ color: '#1B2B5E' }}>jeevan</span>
                  <span style={{ color: '#3A7D2C' }}>yatra</span>
                </div>
                <div className="font-display font-700 text-xs tracking-widest uppercase text-navy-600 transition-colors duration-300">
                  Travels
                </div>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link px-3 py-2 rounded-full font-body font-600 text-sm transition-all duration-200 
                    ${activeSection === link.href.replace('#', '')
                      ? 'text-green-500 bg-green-50'
                      : 'text-navy-700 hover:text-green-500 hover:bg-green-50'
                    }
                    ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <motion.a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello! I want to book a cab.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glossy flex items-center gap-2 bg-green-500 text-white font-display font-700 text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>💬</span> WhatsApp
              </motion.a>
              <motion.a
                href={`tel:${brand.phone}`}
                className="btn-glossy flex items-center gap-2 bg-navy-600 text-white font-display font-700 text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-navy-600/40 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>📞</span> Call Now
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl text-navy-600 hover:bg-navy-50 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 z-40 bg-white shadow-xl border-t border-navy-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl font-body font-600 text-sm transition-all duration-200
                    ${activeSection === link.href.replace('#', '')
                      ? 'text-green-600 bg-green-50 font-700'
                      : 'text-navy-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 mt-2 pt-2 border-t border-navy-100">
                <a
                  href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello! I want to book a cab.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glossy flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-display font-700 text-sm px-4 py-2.5 rounded-full shadow-md relative overflow-hidden"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={`tel:${brand.phone}`}
                  className="btn-glossy flex-1 flex items-center justify-center gap-2 bg-navy-600 text-white font-display font-700 text-sm px-4 py-2.5 rounded-full shadow-md relative overflow-hidden"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
