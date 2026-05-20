import { useState } from 'react'
import { motion } from 'framer-motion'
import { fleet, brand } from '../data/siteContent'
import { useScrollReveal, fadeUp, staggerContainer, cardReveal } from '../components/ScrollReveal'

function VehicleCard({ vehicle, categoryAccent, btnGradient, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const waMsg = encodeURIComponent(
    `Hello Jeevan Yatra Travels! 🚗\n\nI am interested in booking the *${vehicle.name}*.\n\nPlease share availability and fare details.\n\nThank you!`
  )

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    setTilt({ x, y })
  }
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      variants={cardReveal}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
    >
      {/* Image area */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-48">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Tag badge */}
        <span className={`absolute top-3 left-3 ${vehicle.tagColor} text-white text-xs font-display font-700 px-3 py-1 rounded-full shadow-md`}>
          {vehicle.tag}
        </span>
        {/* Seats badge */}
        <span className="absolute top-3 right-3 bg-navy-600 text-white text-xs font-display font-700 px-3 py-1 rounded-full shadow-md">
          {vehicle.seats}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-800 text-navy-700 text-xl mb-1">{vehicle.name}</h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed mb-4 flex-1">{vehicle.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.features.map(f => (
            <span
              key={f}
              className="text-xs font-body font-600 px-2.5 py-1 rounded-full"
              style={{ background: `${vehicle.accentColor}15`, color: vehicle.accentColor }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <motion.a
            href={`https://wa.me/${brand.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-glossy relative overflow-hidden flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r ${btnGradient} text-white font-display font-700 text-sm py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            💬 WhatsApp
          </motion.a>
          <motion.a
            href={`tel:${brand.phone}`}
            className="btn-glossy relative overflow-hidden flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-display font-700 text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            📞 Call
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Fleet() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-white" ref={ref} aria-label="Our Fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-navy-50 text-navy-600 font-display font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Our Fleet
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            {fleet.heading}
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">{fleet.subheading}</p>
        </motion.div>

        {/* Categories */}
        {fleet.categories.map((cat, catIdx) => (
          <div key={cat.id} className={catIdx > 0 ? 'mt-16' : ''}>
            {/* Category Header */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={catIdx * 2}
              className="flex items-center gap-4 mb-8"
            >
              <div className={`flex-1 h-px bg-gradient-to-r ${cat.gradient} opacity-30`} />
              <div className="flex flex-col items-center text-center">
                <span className={`inline-block bg-gradient-to-r ${cat.gradient} text-white font-display font-800 text-sm px-6 py-2 rounded-full shadow-lg`}>
                  {cat.title}
                </span>
                <span className="font-body text-gray-400 text-xs mt-1">{cat.subtitle}</span>
              </div>
              <div className={`flex-1 h-px bg-gradient-to-l ${cat.gradient} opacity-30`} />
            </motion.div>

            {/* Vehicle Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cat.vehicles.map((vehicle, idx) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  categoryAccent={cat.accent}
                  btnGradient={vehicle.btnGradient}
                  index={idx}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
