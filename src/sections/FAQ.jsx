import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/siteContent'
import { useScrollReveal, fadeUp, staggerContainer } from '../components/ScrollReveal'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-navy-600 shadow-md shadow-navy-600/10' : 'border-gray-200 hover:border-navy-300'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-btn-${item.id}`}
      >
        <span className={`font-display font-700 text-base pr-2 transition-colors duration-200 ${isOpen ? 'text-navy-600' : 'text-gray-800'}`}>
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? 'bg-navy-600 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 pt-1 bg-navy-50/50 border-t border-navy-100">
              <p className="font-body text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1)
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 lg:py-28 bg-slate-50"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-navy-50 text-navy-600 font-display font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">{faqs.heading}</h2>
          <p className="font-body text-gray-500 text-lg">{faqs.subheading}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-3"
        >
          {faqs.items.map(item => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
