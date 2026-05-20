import { brand } from '../data/siteContent'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

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
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-green-500/40">
                <img src={brand.logo} alt="Jeevan Yatra Travels" className="w-full h-full object-cover" />
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
              >💬</a>
              <a
                href={`tel:${brand.phone}`}
                className="w-9 h-9 bg-navy-600/40 hover:bg-navy-600 text-white/60 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-sm"
                aria-label="Phone"
              >📞</a>
              <a
                href={`mailto:${brand.email}`}
                className="w-9 h-9 bg-navy-600/40 hover:bg-navy-600 text-white/60 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-sm"
                aria-label="Email"
              >📧</a>
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Contact Info */}
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

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
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
