import { motion } from 'framer-motion'
import { brand } from '../data/siteContent'
import { useScrollReveal, fadeUp } from '../components/ScrollReveal'

export default function CTAStrip() {
  const { ref, isInView } = useScrollReveal(0.3)
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello Jeevan Yatra Travels! I want to book a cab right away. Please help!')}`

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-r from-navy-700 via-navy-600 to-navy-800"
      aria-label="Book now call to action"
    >
      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-white/50 to-green-500" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="inline-block bg-green-500/20 text-green-400 font-display font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            🚗 Book Instantly
          </span>
          <h2 className="font-display font-900 text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Your Journey Begins with<br />
            <span className="text-green-400">One Call or Message</span>
          </h2>
          <p className="font-body text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait — check availability, get an instant quote, and book your premium cab in Palanpur right now.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glossy relative overflow-hidden flex items-center gap-3 bg-green-500 text-white font-display font-800 text-lg px-8 py-4 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:-translate-y-1 transition-all duration-200 animate-pulse_glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-2xl">💬</span>
              Chat on WhatsApp
            </motion.a>
            <motion.a
              href={`tel:${brand.phone}`}
              className="btn-glossy relative overflow-hidden flex items-center gap-3 bg-white text-navy-700 font-display font-800 text-lg px-8 py-4 rounded-full shadow-2xl shadow-white/20 hover:shadow-white/40 hover:-translate-y-1 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-2xl">📞</span>
              {brand.phoneDisplay}
            </motion.a>
          </div>

          <p className="mt-6 font-body text-white/40 text-sm">
            📍 Serving Palanpur, Gujarat & surrounding areas • 24×7 Available
          </p>
        </motion.div>
      </div>
    </section>
  )
}
