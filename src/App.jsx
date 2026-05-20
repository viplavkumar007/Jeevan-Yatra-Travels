import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Fleet from './sections/Fleet'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import CTAStrip from './components/CTAStrip'
import Footer from './components/Footer'
import Toast from './components/Toast'
import WhatsAppFloat from './components/WhatsAppFloat'

let toastId = 0

export default function App() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((toast) => {
    const id = ++toastId
    setToasts(prev => [...prev, { ...toast, id }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <div className="relative">
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-navy-700 focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-xl focus:font-display focus:font-700"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Fleet />
        <Services />
        <About />
        <CTAStrip />
        <Testimonials />
        <FAQ />
        <Contact onToast={addToast} />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* Toast notifications */}
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  )
}
