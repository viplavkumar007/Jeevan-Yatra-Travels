import { motion } from 'framer-motion'
import { hero, brand } from '../data/siteContent'

export default function Hero() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello Jeevan Yatra Travels! I want to book a cab. Please share availability.')}`

  return (
    <section
      id="home"
      className="relative min-h-[110vh] flex items-center overflow-hidden pt-8 sm:pt-10"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero.heroDesktop}
          alt="Jeevan Yatra Travels - Premium Cab Service"
          className="hidden md:block w-full h-full object-cover object-center"
          loading="eager"
        />
        <img
          src={hero.heroMobile}
          alt="Jeevan Yatra Travels - Premium Cab Service"
          className="block md:hidden w-full h-full object-cover object-top"
          loading="eager"
        />
      </div>

      <div className="relative z-10 min-h-[110vh] w-full max-w-7xl mx-auto ml-3 sm:ml-4 lg:ml-6 px-0 flex items-end justify-start pb-32 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-start gap-1.5"
        >
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glossy relative overflow-hidden flex items-center gap-1.5 bg-green-500 text-white font-display font-800 text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-sm sm:text-base">💬</span>
            {hero.ctaPrimary.label}
          </motion.a>

          <motion.a
            href={`tel:${brand.phone}`}
            className="btn-glossy relative overflow-hidden flex items-center gap-1.5 bg-white text-navy-600 font-display font-800 text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xl shadow-white/20 hover:shadow-white/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-sm sm:text-base">📞</span>
            {hero.ctaSecondary.label}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
