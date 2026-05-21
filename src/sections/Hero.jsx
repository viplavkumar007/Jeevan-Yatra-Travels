import { motion } from 'framer-motion'
import { hero, brand } from '../data/siteContent'

function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm5.25-2.38a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
    </svg>
  )
}

export default function Hero() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello Jeevan Yatra Travels! I want to book a cab. Please share availability.')}`

  return (
    <section id="home" className="relative overflow-hidden" aria-label="Hero section">
      <div className="md:hidden">
        <div className="relative">
          <img
            src={hero.heroMobile}
            alt="Jeevan Yatra Travels - Premium Cab Service"
            className="block h-auto w-full"
            loading="eager"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 bg-white px-3 py-3"
        >
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glossy relative flex min-w-0 flex-1 items-center justify-center gap-1 overflow-hidden rounded-full bg-green-500 px-2.5 py-2 font-display text-[10px] font-800 text-white shadow-lg shadow-green-500/25 transition-all duration-200 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-green-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-xs">💬</span>
            <span className="truncate">WhatsApp</span>
          </motion.a>

          <motion.a
            href={`tel:${brand.phone}`}
            className="btn-glossy relative flex min-w-0 flex-1 items-center justify-center gap-1 overflow-hidden rounded-full bg-navy-600 px-2.5 py-2 font-display text-[10px] font-800 text-white shadow-lg shadow-navy-600/25 transition-all duration-200 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-navy-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-xs">📞</span>
            <span className="truncate">Call</span>
          </motion.a>

          <motion.a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glossy relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/25 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-pink-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </motion.a>
        </motion.div>
      </div>

      <div className="relative hidden md:block">
        <img
          src={hero.heroDesktop}
          alt="Jeevan Yatra Travels - Premium Cab Service"
          className="block h-auto w-full"
          loading="eager"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-96 left-6 z-10 flex flex-wrap justify-start gap-1.5 lg:bottom-[28rem] lg:left-8"
        >
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glossy relative flex items-center gap-1.5 overflow-hidden rounded-full bg-green-500 px-5 py-2.5 font-display text-sm font-800 text-white shadow-xl shadow-green-500/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-green-500/50 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-green-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-base">💬</span>
            {hero.ctaPrimary.label}
          </motion.a>

          <motion.a
            href={`tel:${brand.phone}`}
            className="btn-glossy relative flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-5 py-2.5 font-display text-sm font-800 text-navy-600 shadow-xl shadow-white/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-white/40 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-white/50"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-base">📞</span>
            {hero.ctaSecondary.label}
          </motion.a>

          <motion.a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glossy relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-pink-500 text-white shadow-xl shadow-pink-500/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-pink-500/50 focus:outline-none focus:ring-4 focus:ring-pink-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
