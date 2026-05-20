import { useState } from 'react'
import { motion } from 'framer-motion'
import { contact, brand } from '../data/siteContent'
import { useScrollReveal, fadeUp, staggerContainer } from '../components/ScrollReveal'

const VEHICLES = ['Kia Carens', 'Maruti Ertiga', 'Hyundai Venue', 'Hyundai i20', 'Maruti Baleno', 'Maruti Swift', 'No preference']

export default function Contact({ onToast }) {
  const { ref, isInView } = useScrollReveal(0.1)
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', destination: '', vehicle: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Valid 10-digit mobile number required'
    if (!form.pickup.trim()) errs.pickup = 'Pickup location is required'
    if (!form.destination.trim()) errs.destination = 'Destination is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const buildWhatsAppMessage = () => {
    const msg = `Hello Jeevan Yatra Travels! 🚗\n\n*New Booking Enquiry*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📍 Pickup: ${form.pickup}\n🏁 Destination: ${form.destination}\n🚘 Vehicle: ${form.vehicle || 'No preference'}\n💬 Message: ${form.message || 'N/A'}\n\nKindly confirm availability and fare. Thank you!`
    return encodeURIComponent(msg)
  }

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`Cab Booking Enquiry - ${form.name}`)
    const body = encodeURIComponent(`Hello Jeevan Yatra Travels,\n\nBooking Enquiry:\n\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDestination: ${form.destination}\nVehicle: ${form.vehicle || 'No preference'}\nMessage: ${form.message || 'N/A'}\n\nPlease confirm availability.\n\nThank you!`)
    return `mailto:${brand.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setLoading(true)

    // Open WhatsApp with pre-filled message
    const waLink = `https://wa.me/${brand.whatsapp}?text=${buildWhatsAppMessage()}`
    window.open(waLink, '_blank')

    // Also open email
    setTimeout(() => {
      window.location.href = buildMailtoLink()
    }, 1000)

    setTimeout(() => {
      setLoading(false)
      setForm({ name: '', phone: '', pickup: '', destination: '', vehicle: '', message: '' })
      onToast({ type: 'success', title: 'Enquiry Sent!', message: 'Opening WhatsApp & email with your details.' })
    }, 1200)
  }

  const fieldClass = (name) =>
    `w-full px-4 py-3.5 rounded-2xl border-2 font-body text-sm bg-white transition-all duration-200 outline-none
    ${errors[name] ? 'border-red-400 bg-red-50' : focusedField === name ? 'border-navy-500 shadow-md shadow-navy-100' : 'border-gray-200 hover:border-navy-300'}
    text-gray-800 placeholder-gray-400`

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-label="Contact us"
    >
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-navy-600/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-50 text-green-600 font-display font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Book Now
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">{contact.heading}</h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">{contact.subheading}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info Panel */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* WhatsApp */}
            <motion.a
              variants={fadeUp}
              href={`https://wa.me/${brand.whatsapp}?text=${contact.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glossy relative overflow-hidden flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-3xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">💬</div>
              <div>
                <div className="font-display font-800 text-base">Chat on WhatsApp</div>
                <div className="font-body text-white/80 text-sm">{brand.phoneDisplay}</div>
              </div>
              <div className="ml-auto text-white/50 group-hover:text-white transition-colors">→</div>
            </motion.a>

            {/* Phone */}
            <motion.a
              variants={fadeUp}
              href={`tel:${brand.phone}`}
              className="btn-glossy relative overflow-hidden flex items-center gap-4 bg-gradient-to-r from-navy-600 to-navy-800 text-white p-5 rounded-3xl shadow-lg shadow-navy-600/30 hover:shadow-navy-600/50 hover:-translate-y-1 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📞</div>
              <div>
                <div className="font-display font-800 text-base">Call Now</div>
                <div className="font-body text-white/80 text-sm">{brand.phoneDisplay}</div>
              </div>
              <div className="ml-auto text-white/50 group-hover:text-white transition-colors">→</div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={fadeUp}
              href={`mailto:${brand.email}`}
              className="flex items-center gap-4 bg-slate-50 border-2 border-slate-200 hover:border-navy-300 text-navy-700 p-5 rounded-3xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-navy-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📧</div>
              <div className="min-w-0">
                <div className="font-display font-700 text-sm text-navy-600">Email Us</div>
                <div className="font-body text-gray-500 text-xs truncate">{brand.email}</div>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 bg-slate-50 border-2 border-slate-200 text-navy-700 p-5 rounded-3xl"
            >
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">📍</div>
              <div>
                <div className="font-display font-700 text-sm text-navy-600">Our Location</div>
                <div className="font-body text-gray-500 text-xs">{brand.location}</div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-5 rounded-3xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🕐</span>
                <span className="font-display font-700 text-amber-700 text-sm">Operating Hours</span>
              </div>
              <p className="font-body text-amber-600 text-sm">Available <strong>24 hours, 7 days a week</strong></p>
              <p className="font-body text-amber-500 text-xs mt-1">No matter the time, we're ready to serve you!</p>
            </motion.div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={2}
            className="lg:col-span-3"
          >
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-7 shadow-xl">
              <h3 className="font-display font-800 text-navy-700 text-xl mb-1">Send an Enquiry</h3>
              <p className="font-body text-gray-400 text-sm mb-6">Fill in your details and we'll open WhatsApp + email with your message.</p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="font-display font-600 text-xs text-gray-500 mb-1.5 block" htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text" autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClass('name')}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-display font-600 text-xs text-gray-500 mb-1.5 block" htmlFor="phone">Mobile Number *</label>
                    <input
                      id="phone" name="phone" type="tel" autoComplete="tel"
                      placeholder="10-digit mobile"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClass('phone')}
                      aria-required="true"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Pickup */}
                  <div>
                    <label className="font-display font-600 text-xs text-gray-500 mb-1.5 block" htmlFor="pickup">Pickup Location *</label>
                    <input
                      id="pickup" name="pickup" type="text"
                      placeholder="e.g. Palanpur Bus Stand"
                      value={form.pickup}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('pickup')}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClass('pickup')}
                      aria-required="true"
                      aria-describedby={errors.pickup ? 'pickup-error' : undefined}
                    />
                    {errors.pickup && <p id="pickup-error" className="text-red-500 text-xs mt-1 font-body">{errors.pickup}</p>}
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="font-display font-600 text-xs text-gray-500 mb-1.5 block" htmlFor="destination">Destination *</label>
                    <input
                      id="destination" name="destination" type="text"
                      placeholder="e.g. Ahmedabad Airport"
                      value={form.destination}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('destination')}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClass('destination')}
                      aria-required="true"
                      aria-describedby={errors.destination ? 'dest-error' : undefined}
                    />
                    {errors.destination && <p id="dest-error" className="text-red-500 text-xs mt-1 font-body">{errors.destination}</p>}
                  </div>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="font-display font-600 text-xs text-gray-500 mb-1.5 block" htmlFor="vehicle">Preferred Vehicle</label>
                  <select
                    id="vehicle" name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('vehicle')}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass('vehicle') + ' cursor-pointer'}
                  >
                    <option value="">Select a vehicle (optional)</option>
                    {VEHICLES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-display font-600 text-xs text-gray-500 mb-1.5 block" htmlFor="message">Additional Notes</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Travel date, time, special requirements..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={3}
                    className={fieldClass('message') + ' resize-none'}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-glossy relative overflow-hidden w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-display font-800 text-base py-4 rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-green-300"
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Opening WhatsApp & Email...
                    </>
                  ) : (
                    <>
                      <span>💬</span>
                      Send Enquiry via WhatsApp & Email
                      <span>→</span>
                    </>
                  )}
                </motion.button>

                <p className="font-body text-gray-400 text-xs text-center">
                  By submitting, this will open WhatsApp and your email app with pre-filled message.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
