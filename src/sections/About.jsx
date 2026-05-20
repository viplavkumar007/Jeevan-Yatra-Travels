import { motion } from 'framer-motion'
import { about, brand } from '../data/siteContent'
import { useScrollReveal, fadeUp, staggerContainer } from '../components/ScrollReveal'

export default function About() {
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-28 bg-navy-600 relative overflow-hidden"
      aria-label="About us"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-300 to-green-500" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-green-500/20 text-green-400 font-display font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-5"
            >
              About Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-900 text-4xl lg:text-5xl text-white leading-tight mb-3"
            >
              {about.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-display font-600 text-green-400 text-lg mb-6"
            >
              {about.subheading}
            </motion.p>
            {about.body.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i}
                className="font-body text-white/75 text-base leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hello! I want to know more about Jeevan Yatra Travels.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glossy relative overflow-hidden flex items-center gap-2 bg-green-500 text-white font-display font-700 px-6 py-3 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                💬 Chat with Us
              </a>
              <a
                href={`tel:${brand.phone}`}
                className="btn-glossy relative overflow-hidden flex items-center gap-2 border-2 border-white/30 text-white font-display font-700 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                📞 Call Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {about.stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="font-display font-900 text-4xl lg:text-5xl text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="font-body text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}

            {/* Logo card */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-green-400/50 flex-shrink-0">
                <img src={brand.logo} alt="Jeevan Yatra Travels" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display font-800 text-white text-lg">
                  <span className="text-white">jeevan</span><span className="text-green-400">yatra</span>
                </div>
                <div className="font-display font-600 text-white/60 text-xs tracking-widest uppercase">Travels • Palanpur, Gujarat</div>
                <div className="font-body text-white/50 text-xs mt-1">📞 {brand.phoneDisplay}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
