// ============================================================
// JEEVAN YATRA TRAVELS — SITE CONTENT CONFIGURATION
// All website content managed from this single file
// ============================================================

import logoImg from '../assets/images/logo.jpeg'
import heroDesktop from '../assets/images/hero-desktop.png'
import heroMobile from '../assets/images/hero-mobile.png'
import swiftImg from '../assets/images/swift.jpeg'
import balenoImg from '../assets/images/baleno.jpeg'
import i20Img from '../assets/images/i20.jpeg'
import venueImg from '../assets/images/venue.jpeg'
import ertigaImg from '../assets/images/ertiga.jpeg'
import carensImg from '../assets/images/carens.jpeg'

// ─── Brand ──────────────────────────────────────────────────
export const brand = {
  name: 'Jeevan Yatra Travels',
  tagline: 'Self Drive Car on Rental',
  logo: logoImg,
  phone: '+919104566024',
  phoneDisplay: '+91 91045 66024',
  whatsapp: '919104566024',
  email: 'jeevanyatratravels@gmail.com',
  location: 'Palanpur, Gujarat',
  colors: {
    primary: '#1B2B5E',
    secondary: '#3A7D2C',
  },
}

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  headline: 'Premium Cab Services',
  headlineHighlight: 'in Palanpur, Gujarat',
  subheadline:
    'Comfortable, reliable, and affordable rides for your every journey. Choose from our wide range of well-maintained hatchbacks and spacious SUVs.',
  ctaPrimary: { label: 'Book Your Ride Now', href: '#contact' },
  ctaSecondary: { label: 'Call Us Now', href: `tel:${brand.phone}` },
  heroDesktop,
  heroMobile,
  badges: [
    { icon: '🚗', label: 'Self Drive', sub: 'Car Rental' },
    { icon: '🛡️', label: 'Safety &', sub: 'Security' },
    { icon: '📍', label: 'Palanpur', sub: 'Service' },
    { icon: '🕐', label: '24×7', sub: 'Support' },
  ],
}

// ─── Fleet ──────────────────────────────────────────────────
export const fleet = {
  heading: 'Choose Your Perfect Ride',
  subheading:
    'From compact hatchbacks for solo travelers to spacious SUVs for family trips, we have the perfect vehicle for every journey.',
  categories: [
    {
      id: 'suv',
      title: 'Premium SUVs & MUVs',
      subtitle: 'For families and group travel',
      accent: '#1B2B5E',
      gradient: 'from-navy-600 to-navy-800',
      badgeColor: 'bg-navy-600',
      buttonColor: 'bg-navy-600 hover:bg-navy-700',
      borderColor: 'border-navy-200',
      vehicles: [
        {
          id: 'carens',
          name: 'Kia Carens',
          image: carensImg,
          seats: '7 Seater',
          tag: 'Best for Long Trips',
          tagColor: 'bg-amber-500',
          description:
            'Spacious 7-seater MPV perfect for long journeys and large family groups. Premium comfort with generous legroom.',
          features: ['7 Seats', 'AC', 'GPS', 'Music System'],
          accentColor: '#1B2B5E',
          btnGradient: 'from-navy-600 to-navy-800',
        },
        {
          id: 'ertiga',
          name: 'Maruti Ertiga',
          image: ertigaImg,
          seats: '7 Seater',
          tag: 'Family Favourite',
          tagColor: 'bg-green-500',
          description:
            'Reliable and comfortable MUV with excellent luggage capacity. Ideal for family outings and group trips.',
          features: ['7 Seats', 'AC', 'Large Boot', 'Fuel Efficient'],
          accentColor: '#1B2B5E',
          btnGradient: 'from-navy-600 to-navy-800',
        },
        {
          id: 'venue',
          name: 'Hyundai Venue',
          image: venueImg,
          seats: '5 Seater',
          tag: 'Compact SUV',
          tagColor: 'bg-blue-500',
          description:
            'Compact SUV offering a smooth, stylish ride. Perfect for both city driving and highway journeys.',
          features: ['5 Seats', 'Sunroof', 'AC', 'Touchscreen'],
          accentColor: '#1B2B5E',
          btnGradient: 'from-navy-600 to-navy-800',
        },
      ],
    },
    {
      id: 'hatchback',
      title: 'Comfort Hatchbacks',
      subtitle: 'For quick trips and small groups',
      accent: '#3A7D2C',
      gradient: 'from-green-500 to-green-700',
      badgeColor: 'bg-green-500',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      borderColor: 'border-green-200',
      vehicles: [
        {
          id: 'i20',
          name: 'Hyundai i20',
          image: i20Img,
          seats: '5 Seater',
          tag: 'Premium Pick',
          tagColor: 'bg-purple-500',
          description:
            'Premium hatchback with top-tier comfort and modern aesthetics. The refined choice for discerning travelers.',
          features: ['5 Seats', 'AC', 'Alloy Wheels', 'Touchscreen'],
          accentColor: '#3A7D2C',
          btnGradient: 'from-green-500 to-green-700',
        },
        {
          id: 'baleno',
          name: 'Maruti Baleno',
          image: balenoImg,
          seats: '5 Seater',
          tag: 'Most Spacious',
          tagColor: 'bg-teal-500',
          description:
            'Smooth, spacious, and fuel-efficient for everyday travel. Excellent cabin space for a hatchback.',
          features: ['5 Seats', 'AC', 'Head-Up Display', 'Cruise Control'],
          accentColor: '#3A7D2C',
          btnGradient: 'from-green-500 to-green-700',
        },
        {
          id: 'swift',
          name: 'Maruti Swift',
          image: swiftImg,
          seats: '5 Seater',
          tag: 'City Champion',
          tagColor: 'bg-red-500',
          description:
            'The classic, agile choice for quick city commutes. Sporty, nimble and always fun to drive.',
          features: ['5 Seats', 'AC', 'Sporty Design', 'Fuel Efficient'],
          accentColor: '#3A7D2C',
          btnGradient: 'from-green-500 to-green-700',
        },
      ],
    },
  ],
}

// ─── Services / Why Choose Us ────────────────────────────────
export const services = {
  heading: 'Why Choose Jeevan Yatra Travels?',
  subheading:
    'Trusted by thousands of travelers across North Gujarat for reliable, safe, and affordable cab services.',
  items: [
    {
      id: 1,
      icon: '📍',
      title: 'Local Expertise',
      description:
        'Serving Palanpur, Gujarat and all surrounding areas with deep local route knowledge. We know every shortcut and scenic route.',
      color: 'from-blue-500 to-navy-600',
      border: 'border-blue-200',
      bg: 'bg-blue-50',
    },
    {
      id: 2,
      icon: '✅',
      title: 'Well-Maintained Fleet',
      description:
        'Every vehicle is clean, sanitized, and regularly serviced. We maintain strict hygiene standards for your health and safety.',
      color: 'from-green-400 to-green-600',
      border: 'border-green-200',
      bg: 'bg-green-50',
    },
    {
      id: 3,
      icon: '💰',
      title: 'Affordable Pricing',
      description:
        'Transparent pricing with zero hidden charges. Best value for money — premium service at competitive rates.',
      color: 'from-amber-400 to-orange-500',
      border: 'border-amber-200',
      bg: 'bg-amber-50',
    },
    {
      id: 4,
      icon: '🕐',
      title: '24×7 Availability',
      description:
        'Round the clock service for your convenience. Early morning airport pickups to late-night transfers — we are always ready.',
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-200',
      bg: 'bg-purple-50',
    },
    {
      id: 5,
      icon: '🚗',
      title: 'Flexible Vehicle Options',
      description:
        'Vehicles available for every budget and group size. Solo traveler or family of 7 — we have the right car for you.',
      color: 'from-teal-400 to-cyan-600',
      border: 'border-teal-200',
      bg: 'bg-teal-50',
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Safety First',
      description:
        'All vehicles are GPS-tracked and drivers are verified. Your safety and security is our top priority on every journey.',
      color: 'from-red-400 to-rose-600',
      border: 'border-red-200',
      bg: 'bg-red-50',
    },
  ],
}

// ─── About ───────────────────────────────────────────────────
export const about = {
  heading: 'Our Story',
  subheading: 'Born in Palanpur, Built for Every Journey',
  body: [
    'Jeevan Yatra Travels was founded with one simple mission: to provide the people of Palanpur and North Gujarat with a travel experience that is safe, comfortable, and truly affordable.',
    'We understand that every journey is important — whether it\'s a family trip, a business visit, or a long-distance travel. That\'s why we invest in premium vehicles, responsible drivers, and round-the-clock support.',
    'From bustling city streets to scenic highway routes, Jeevan Yatra Travels is your trusted companion for every road ahead.',
  ],
  stats: [
    { value: '500+', label: 'Happy Customers' },
    { value: '6+', label: 'Premium Vehicles' },
    { value: '24/7', label: 'Support Available' },
    { value: '3+', label: 'Years of Service' },
  ],
}

// ─── Testimonials ────────────────────────────────────────────
export const testimonials = {
  heading: 'What Our Customers Say',
  subheading: 'Real experiences from real travelers across Gujarat',
  items: [
    {
      id: 1,
      name: 'Rajesh Patel',
      location: 'Palanpur, Gujarat',
      rating: 5,
      text: 'Excellent service! Booked the Kia Carens for our family trip to Ambaji. The car was spotlessly clean and the booking process was super smooth. Highly recommended!',
      avatar: 'RP',
      avatarColor: 'bg-navy-600',
    },
    {
      id: 2,
      name: 'Priya Shah',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'Used Jeevan Yatra Travels for airport pickup. Very punctual and professional. The Hyundai Venue was well-maintained and comfortable. Will definitely use again!',
      avatar: 'PS',
      avatarColor: 'bg-green-500',
    },
    {
      id: 3,
      name: 'Amit Joshi',
      location: 'Mehsana, Gujarat',
      rating: 5,
      text: 'The Maruti Ertiga was perfect for our group of 6. Amazing value for money. The WhatsApp booking was instant and the team was very helpful. Great experience!',
      avatar: 'AJ',
      avatarColor: 'bg-amber-500',
    },
    {
      id: 4,
      name: 'Sunita Verma',
      location: 'Palanpur, Gujarat',
      rating: 5,
      text: 'I travel frequently and always choose Jeevan Yatra. Reliable, affordable, and always on time. The Swift is my go-to for quick city rides. Love the service!',
      avatar: 'SV',
      avatarColor: 'bg-purple-500',
    },
  ],
}

// ─── FAQs ────────────────────────────────────────────────────
export const faqs = {
  heading: 'Frequently Asked Questions',
  subheading: 'Everything you need to know before booking your ride',
  items: [
    {
      id: 1,
      question: 'How do I book a cab with Jeevan Yatra Travels?',
      answer:
        'You can book by calling us directly at +91 91045 66024, sending a WhatsApp message, or filling the enquiry form on this page. We will confirm your booking within minutes.',
    },
    {
      id: 2,
      question: 'What vehicles are available for booking?',
      answer:
        'We offer a range of vehicles including Kia Carens (7-seater), Maruti Ertiga (7-seater), Hyundai Venue (compact SUV), Hyundai i20, Maruti Baleno, and Maruti Swift. Choose based on your group size and budget.',
    },
    {
      id: 3,
      question: 'Do you offer outstation and long-distance trips?',
      answer:
        'Yes! We provide local city rides, intercity travel, outstation trips, and highway journeys. We serve Palanpur, Gujarat and all surrounding areas including Ahmedabad, Mehsana, Abu Road and more.',
    },
    {
      id: 4,
      question: 'Are the vehicles air-conditioned and well-maintained?',
      answer:
        'Absolutely. All our vehicles are fully air-conditioned, regularly serviced, sanitized before every trip, and GPS-equipped for safety and navigation.',
    },
    {
      id: 5,
      question: 'Is 24/7 service available?',
      answer:
        'Yes! We are available round the clock — 24 hours a day, 7 days a week. Whether it is an early morning airport pickup or a late-night transfer, just call or WhatsApp us.',
    },
    {
      id: 6,
      question: 'How do I get a fare quote?',
      answer:
        'Send us a WhatsApp message or use the enquiry form with your pickup location, destination, date, and vehicle preference. We will send you a transparent quote with zero hidden charges.',
    },
  ],
}

// ─── Contact ─────────────────────────────────────────────────
export const contact = {
  heading: 'Ready to Start Your Journey?',
  subheading:
    'Contact us directly to check availability, get a quote, or book your cab immediately.',
  phone: brand.phone,
  phoneDisplay: brand.phoneDisplay,
  whatsapp: brand.whatsapp,
  email: brand.email,
  location: brand.location,
  whatsappMessage: encodeURIComponent(
    'Hello Jeevan Yatra Travels! 🚗\n\nI would like to book a cab.\n\nPlease share availability and fare details.\n\nThank you!'
  ),
}
