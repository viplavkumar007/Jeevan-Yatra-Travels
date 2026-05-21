import { brand } from '../data/siteContent'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'T&C', href: '#terms' },
  { label: 'Contact', href: '#contact' },
]

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm5.25-2.38a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-900 text-white" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex flex-col items-start gap-3 mb-4 sm:flex-row sm:items-center">
              <div className="h-12 w-32 overflow-hidden rounded-2xl bg-white px-0 py-0 ring-2 ring-green-500/40 sm:h-14 sm:w-44">
                <img src={brand.logo} alt="Jeevan Yatra Travels" className="w-full h-full scale-[1.38] object-contain object-center" />
              </div>
              <div>
                <div className="font-display font-900 text-lg">
                  <span className="text-white">jeevan</span><span className="text-green-400">yatra</span>
                </div>
                <div className="font-display font-600 text-xs tracking-widest text-white/50 uppercase">Travels</div>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
              Premium self-drive car rental and cab services in Palanpur, Gujarat. Your trusted travel partner for every journey.
            </p>
            <div className="flex gap-2">
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-sm"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href={`tel:${brand.phone}`}
                className="w-9 h-9 bg-navy-600/40 hover:bg-navy-600 text-white/60 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-sm"
                aria-label="Phone"
              >
                📞
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="w-9 h-9 bg-navy-600/40 hover:bg-navy-600 text-white/60 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-sm"
                aria-label="Email"
              >
                📧
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-pink-500/20 hover:bg-pink-500 text-pink-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-700 text-white text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-white/50 hover:text-green-400 text-sm transition-colors duration-200 text-left"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-700 text-white text-sm uppercase tracking-widest mb-4">Contact Info</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📞</span>
                <div>
                  <div className="font-body text-white/40 text-xs">Phone / WhatsApp</div>
                  <a href={`tel:${brand.phone}`} className="font-display font-700 text-green-400 hover:text-green-300 text-sm transition-colors">
                    {brand.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📧</span>
                <div>
                  <div className="font-body text-white/40 text-xs">Email</div>
                  <a href={`mailto:${brand.email}`} className="font-display font-700 text-green-400 hover:text-green-300 text-sm transition-colors break-all">
                    {brand.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <div>
                  <div className="font-body text-white/40 text-xs">Location</div>
                  <span className="font-display font-700 text-white/70 text-sm">{brand.location}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">🕐</span>
                <div>
                  <div className="font-body text-white/40 text-xs">Hours</div>
                  <span className="font-display font-700 text-white/70 text-sm">24 Hours, 7 Days a Week</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs text-center">
            © {year} Jeevan Yatra Travels. All rights reserved. | Palanpur, Gujarat
          </p>
          <p className="font-body text-white/20 text-xs text-center">
            Premium Cab & Self Drive Car Rental Service
          </p>
        </div>
      </div>
    </footer>
  )
}
