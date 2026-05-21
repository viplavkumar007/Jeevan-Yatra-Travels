import { brand } from '../data/siteContent'
import promoPage1 from '../assets/images/promo-page-1-2026.png'
import promoPage2 from '../assets/images/promo-page-2-2026.png'

const promoImages = [
  {
    id: 1,
    image: promoPage1,
    alt: 'Jeevan Yatra Travels mountain travel promotion',
    sideBySideOverlay: true,
  },
  {
    id: 2,
    image: promoPage2,
    alt: 'Jeevan Yatra Travels premium fleet promotion',
    sideBySideOverlay: false,
  },
]

function PromoCard({ image, alt, sideBySideOverlay }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-navy-100 bg-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)]">
      <div className="relative">
        <img src={image} alt={alt} className="block w-full" />

        {sideBySideOverlay ? (
          <div className="absolute right-[2%] top-[31%] z-20 flex items-center gap-2 sm:right-[9%] sm:top-[23%] sm:gap-3 lg:right-[10%] lg:top-[31%] lg:gap-4">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/90 bg-white/96 shadow-[0_14px_30px_-16px_rgba(15,23,42,0.9)] sm:h-11 sm:w-11 lg:h-16 lg:w-16">
              <img src={brand.logo} alt={brand.name} className="h-full w-full object-cover object-center" />
            </div>

            <a
              href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-white bg-navy-600 px-2.5 py-1.5 font-display text-[10px] font-900 uppercase tracking-[0.08em] text-white shadow-[0_18px_34px_-14px_rgba(15,23,42,0.95)] sm:gap-2 sm:px-3 sm:py-2 sm:text-xs lg:gap-3 lg:px-5 lg:py-3 lg:text-base"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[8px] font-900 text-white shadow-[0_10px_22px_-10px_rgba(58,125,44,0.95)] sm:h-6 sm:w-6 sm:text-[9px] lg:h-9 lg:w-9 lg:text-xs">
                ☎
              </span>
              <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:hidden">Call</span>
              <span className="hidden drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:inline">{brand.phoneDisplay}</span>
            </a>
          </div>
        ) : (
          <>
            <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-xl border border-white/25 bg-navy-600/78 px-2 py-1.5 shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:gap-3 sm:rounded-2xl sm:px-3 sm:py-2">
              <div className="h-8 w-8 overflow-hidden rounded-lg bg-white ring-2 ring-white/30 sm:h-12 sm:w-12 sm:rounded-xl">
                <img src={brand.logo} alt={brand.name} className="h-full w-full object-cover object-center" />
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-sm font-800 uppercase tracking-[0.14em] text-white">
                  {brand.name}
                </div>
                <div className="font-body text-xs text-white/70">{brand.tagline}</div>
              </div>
            </div>

            <a
              href={`tel:${brand.phone}`}
              className="absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/85 bg-navy-600 px-2.5 py-1.5 font-display text-[10px] font-800 tracking-[0.1em] text-white shadow-[0_14px_30px_-16px_rgba(15,23,42,0.9)] sm:right-6 sm:top-6 sm:gap-2 sm:border-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.14em]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[8px] font-800 text-white shadow-[0_8px_18px_-10px_rgba(58,125,44,0.9)] sm:h-7 sm:w-7 sm:text-[10px]">
                Call
              </span>
              <span className="hidden sm:inline">{brand.phoneDisplay}</span>
              <span className="sm:hidden">Now</span>
            </a>
          </>
        )}
      </div>
    </article>
  )
}

export default function PromoShowcase() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 lg:py-20" aria-label="Promotional showcase">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        {promoImages.map((item) => (
          <PromoCard
            key={item.id}
            image={item.image}
            alt={item.alt}
            sideBySideOverlay={item.sideBySideOverlay}
          />
        ))}
      </div>
    </section>
  )
}
