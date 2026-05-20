import { motion } from 'framer-motion'
import { hero, brand } from '../data/siteContent'

export default function Hero() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello Jeevan Yatra Travels! I want to book a cab. Please share availability.')}`

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Images - responsive */}
      <div className="absolute inset-0 z-0">
        {/* Desktop */}
        <img
          src={hero.heroDesktop}
          alt="Jeevan Yatra Travels - Premium Cab Service"
          className="hidden md:block w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Mobile */}
        <img
          src={hero.heroMobile}
          alt="Jeevan Yatra Travels - Premium Cab Service"
          className="block md:hidden w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
        {/* Bottom gradient for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-body font-600 mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Palanpur, Gujarat — Trusted Cab Service
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-900 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-shadow mb-2"
          >
            {hero.headline}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-900 text-4xl sm:text-5xl lg:text-6xl leading-tight text-shadow mb-6"
            style={{ color: '#6ee86e' }}
          >
            {hero.headlineHighlight}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg sm:text-xl text-white/90 text-shadow-sm max-w-xl mb-8 leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glossy relative overflow-hidden flex items-center gap-2 bg-green-500 text-white font-display font-800 text-base px-7 py-3.5 rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-xl">💬</span>
              {hero.ctaPrimary.label}
            </motion.a>

            <motion.a
              href={`tel:${brand.phone}`}
              className="btn-glossy relative overflow-hidden flex items-center gap-2 bg-white text-navy-600 font-display font-800 text-base px-7 py-3.5 rounded-full shadow-xl shadow-white/20 hover:shadow-white/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-xl">📞</span>
              {hero.ctaSecondary.label}
            </motion.a>
          </motion.div>

          {/* Phone display */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 font-body text-white/70 text-sm"
          >
            📞 {brand.phoneDisplay} &nbsp;|&nbsp; 📧 {brand.email}
          </motion.p>
        </div>

        {/* Badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
        >
          {hero.badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-3 py-2.5"
            >
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <div className="font-display font-700 text-white text-xs leading-tight">{badge.label}</div>
                <div className="font-body text-white/70 text-xs">{badge.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="font-body text-white/50 text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
