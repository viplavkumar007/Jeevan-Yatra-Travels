import { motion } from 'framer-motion'
import { testimonials } from '../data/siteContent'
import { useScrollReveal, fadeUp, staggerContainer, cardReveal } from '../components/ScrollReveal'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-base ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}>★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <motion.div
      variants={cardReveal}
      className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden"
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-6 font-display font-900 text-7xl text-navy-600/8 leading-none select-none">"</div>

      <StarRating rating={item.rating} />

      <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 italic">
        "{item.text}"
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className={`w-10 h-10 ${item.avatarColor} rounded-full flex items-center justify-center font-display font-800 text-white text-sm flex-shrink-0`}>
          {item.avatar}
        </div>
        <div>
          <div className="font-display font-700 text-navy-700 text-sm">{item.name}</div>
          <div className="font-body text-gray-400 text-xs">📍 {item.location}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50"
      aria-label="Customer testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-50 text-amber-600 font-display font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">{testimonials.heading}</h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">{testimonials.subheading}</p>

          {/* Stars display */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xl">★</span>)}
            </div>
            <span className="font-display font-700 text-navy-600 text-lg">5.0</span>
            <span className="font-body text-gray-400 text-sm">— All Reviews</span>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.items.map(item => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
