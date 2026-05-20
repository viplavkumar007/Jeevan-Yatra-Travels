import { motion } from 'framer-motion'
import { services } from '../data/siteContent'
import { useScrollReveal, fadeUp, staggerContainer, cardReveal } from '../components/ScrollReveal'

function ServiceCard({ item }) {
  return (
    <motion.div
      variants={cardReveal}
      className={`group relative ${item.bg} ${item.border} border-2 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
    >
      {/* Background glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {item.icon}
      </div>

      {/* Content */}
      <h3 className="font-display font-800 text-navy-700 text-lg mb-2">{item.title}</h3>
      <p className="font-body text-gray-500 text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  )
}

export default function Services() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      aria-label="Our Services"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-600/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-50 text-green-600 font-display font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            {services.heading}
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">{services.subheading}</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.items.map(item => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
