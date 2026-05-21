import { motion } from 'framer-motion'
import { terms } from '../data/siteContent'
import { useScrollReveal, fadeUp, staggerContainer, cardReveal } from '../components/ScrollReveal'

function TermsCard({ item }) {
  const badge = String(item.id).padStart(2, '0')
  const summary = item.points.join(' ')

  return (
    <motion.article
      variants={cardReveal}
      className="group flex h-full min-h-[210px] flex-col rounded-[18px] border border-navy-200 bg-white px-4 py-4 shadow-[0_10px_30px_-26px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-[0_18px_38px_-28px_rgba(58,125,44,0.45)]"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 font-display text-[10px] font-700 leading-none text-white shadow-[0_8px_18px_-12px_rgba(249,115,22,0.9)]">
          {badge}
        </span>
        <h3 className="font-display text-[1.02rem] font-800 uppercase leading-none tracking-[0.01em] text-navy-600 transition-colors duration-300 group-hover:text-green-600">
          {item.title}
        </h3>
      </div>

      <p className="pl-10 font-body text-[13px] leading-7 text-slate-600">{summary}</p>
    </motion.article>
  )
}

export default function Terms() {
  const { ref, isInView } = useScrollReveal(0.08)

  return (
    <section
      id="terms"
      ref={ref}
      className="bg-[#fbf7f1] py-20 lg:py-24"
      aria-label="Terms and conditions"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-400" />
            <span className="font-display text-[11px] font-700 uppercase tracking-[0.35em] text-orange-500">
              T&C
            </span>
          </div>
          <h2 className="section-heading mb-4 max-w-4xl text-3xl sm:text-4xl lg:text-[3.25rem]">
            {terms.heading}
          </h2>
          <p className="max-w-3xl font-body text-sm leading-7 text-slate-500">
            Please review these rental terms carefully before booking with Jeevan Yatra Travels.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {terms.items.map((item) => (
            <TermsCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
