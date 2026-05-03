export interface Package {
  id: number;
  slug: string;
  title: string;
  price: number;
  currency: string;
  duration: string;
  durationDays: number;
  country: string;
  city: string;
  category: string;
  hotel: {
    name: string;
    stars: number;
    distanceFromHaram?: string;
  };
  flightsIncluded: boolean;
  visaIncluded: boolean;
  mealsIncluded: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  image: string;
  gallery: string[];
  featured: boolean;
  rating: number;
  reviews: number;
}

const packages: Package[] = [
  {
    id: 1,
    slug: 'umrah-economy-7-nights',
    title: 'Umrah Economy Package — 7 Nights',
    price: 85000,
    currency: 'PKR',
    duration: '7 Nights / 8 Days',
    durationDays: 8,
    country: 'Saudi Arabia',
    city: 'Makkah & Madinah',
    category: 'Umrah',
    hotel: {
      name: 'Al Kiswah Tower',
      stars: 3,
      distanceFromHaram: '500m from Masjid Al-Haram',
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'Breakfast & Dinner',
    description:
      'Our most affordable Umrah package offers a spiritually enriching experience without compromising on comfort. Stay in a quality 3-star hotel within walking distance of Masjid Al-Haram and Masjid An-Nabawi, with guided Ziyarat tours included.',
    highlights: [
      'Direct flights from Karachi/Lahore/Islamabad',
      '3-star hotel 500m from Masjid Al-Haram',
      'Guided Ziyarat in Makkah & Madinah',
      'Umrah visa processing included',
      'Return airport transfers',
    ],
    inclusions: [
      'Return airfare (economy class)',
      'Umrah visa',
      '7 nights hotel accommodation',
      'Breakfast & dinner daily',
      'Air-conditioned transport',
      'Ziyarat tours',
      '24/7 group guide',
    ],
    image: 'https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg',
      'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
    ],
    featured: true,
    rating: 4.8,
    reviews: 214,
  },
  {
    id: 2,
    slug: 'umrah-premium-14-nights',
    title: 'Umrah Premium Package — 14 Nights',
    price: 165000,
    currency: 'PKR',
    duration: '14 Nights / 15 Days',
    durationDays: 15,
    country: 'Saudi Arabia',
    city: 'Makkah & Madinah',
    category: 'Umrah',
    hotel: {
      name: 'Makkah Clock Royal Tower',
      stars: 5,
      distanceFromHaram: 'Directly connected to Masjid Al-Haram',
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'All Meals',
    description:
      'Experience the pinnacle of spiritual travel with our Premium Umrah package. Stay at a luxurious 5-star hotel steps from the Kaaba, enjoy full-board meals, private transport, and a dedicated tour guide for a deeply personalised pilgrimage.',
    highlights: [
      '5-star hotel directly connected to Al-Haram',
      'Full-board all meals included',
      'Private VIP transport',
      'Exclusive group size (max 20 pilgrims)',
      'Gift package & Ihram provided',
    ],
    inclusions: [
      'Return airfare (economy class)',
      'Umrah visa',
      '14 nights 5-star accommodation',
      'All meals (breakfast, lunch, dinner)',
      'Private air-conditioned transport',
      'Comprehensive Ziyarat tours',
      'Dedicated personal guide',
      'Ihram & gift pack',
    ],
    image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
      'https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg',
    ],
    featured: true,
    rating: 4.9,
    reviews: 187,
  },
  {
    id: 3,
    slug: 'umrah-family-10-nights',
    title: 'Umrah Family Package — 10 Nights',
    price: 120000,
    currency: 'PKR',
    duration: '10 Nights / 11 Days',
    durationDays: 11,
    country: 'Saudi Arabia',
    city: 'Makkah & Madinah',
    category: 'Umrah',
    hotel: {
      name: 'Conrad Makkah',
      stars: 4,
      distanceFromHaram: '200m from Masjid Al-Haram',
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'Breakfast & Dinner',
    description:
      'Designed specifically for families, this package provides spacious family rooms, child-friendly facilities, and a carefully planned itinerary to ensure every family member has a meaningful and comfortable pilgrimage experience.',
    highlights: [
      'Family rooms available (up to 2 adults + 2 children)',
      '4-star hotel 200m from Masjid Al-Haram',
      'Child-friendly group activities',
      'Family Ziyarat guided tours',
      'Dedicated family guide',
    ],
    inclusions: [
      'Return airfare (economy class)',
      'Umrah visa (all family members)',
      '10 nights 4-star accommodation',
      'Breakfast & dinner daily',
      'Family transport',
      'Ziyarat tours',
      'Family guide',
    ],
    image: 'https://images.pexels.com/photos/3889707/pexels-photo-3889707.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3889707/pexels-photo-3889707.jpeg',
    ],
    featured: false,
    rating: 4.7,
    reviews: 96,
  },
  {
    id: 4,
    slug: 'istanbul-cultural-7-nights',
    title: 'Istanbul Cultural Tour — 7 Nights',
    price: 135000,
    currency: 'PKR',
    duration: '7 Nights / 8 Days',
    durationDays: 8,
    country: 'Turkey',
    city: 'Istanbul',
    category: 'Turkey',
    hotel: {
      name: 'Radisson Blu Hotel Istanbul',
      stars: 5,
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'Breakfast',
    description:
      'Explore the crossroads of civilisations in magical Istanbul. Visit the iconic Hagia Sophia, Blue Mosque, Topkapi Palace, and cruise along the Bosphorus. A blend of history, culture, and breathtaking architecture awaits you.',
    highlights: [
      'Hagia Sophia & Blue Mosque visit',
      'Bosphorus cruise',
      'Grand Bazaar shopping experience',
      'Topkapi Palace tour',
      'Traditional Turkish dinner',
    ],
    inclusions: [
      'Return airfare (economy class)',
      'Turkish e-visa',
      '7 nights 5-star accommodation',
      'Daily breakfast',
      'All guided city tours',
      'Bosphorus cruise',
      'Airport transfers',
    ],
    image: 'https://images.pexels.com/photos/3671143/pexels-photo-3671143.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3671143/pexels-photo-3671143.jpeg',
      'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
    ],
    featured: true,
    rating: 4.9,
    reviews: 143,
  },
  {
    id: 5,
    slug: 'cappadocia-istanbul-10-nights',
    title: 'Cappadocia & Istanbul Combo — 10 Nights',
    price: 175000,
    currency: 'PKR',
    duration: '10 Nights / 11 Days',
    durationDays: 11,
    country: 'Turkey',
    city: 'Istanbul & Cappadocia',
    category: 'Turkey',
    hotel: {
      name: 'Cave Hotel Cappadocia + Hilton Istanbul',
      stars: 5,
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'Breakfast & Dinner',
    description:
      'The ultimate Turkey experience combining the cosmopolitan magic of Istanbul with the surreal fairy-chimney landscapes of Cappadocia. Enjoy a hot-air balloon ride at sunrise, cave hotel stay, and full guided tours across two iconic destinations.',
    highlights: [
      'Hot air balloon ride at sunrise in Cappadocia',
      'Cave hotel stay',
      'Istanbul city highlights tour',
      'Goreme National Park',
      'Underground city visit',
    ],
    inclusions: [
      'Return airfare',
      'Turkish e-visa',
      '10 nights accommodation (5-star)',
      'Breakfast & dinner',
      'Domestic Istanbul–Cappadocia flight',
      'Hot-air balloon ride',
      'All guided tours',
      'Airport & hotel transfers',
    ],
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
      'https://images.pexels.com/photos/3671143/pexels-photo-3671143.jpeg',
    ],
    featured: true,
    rating: 4.9,
    reviews: 78,
  },
  {
    id: 6,
    slug: 'dubai-city-break-5-nights',
    title: 'Dubai City Break — 5 Nights',
    price: 110000,
    currency: 'PKR',
    duration: '5 Nights / 6 Days',
    durationDays: 6,
    country: 'UAE',
    city: 'Dubai',
    category: 'Dubai',
    hotel: {
      name: 'Marriott Al Jaddaf',
      stars: 5,
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'Breakfast',
    description:
      'Experience the dazzling city of Dubai — from the soaring Burj Khalifa and pristine beaches to the vibrant souks and desert dunes. A perfect blend of modernity and tradition for the discerning traveller.',
    highlights: [
      'Burj Khalifa "At The Top" experience',
      'Dubai Frame & Dubai Mall visit',
      'Desert safari with BBQ dinner',
      'Dubai Creek Abra boat ride',
      'Palm Jumeirah exploration',
    ],
    inclusions: [
      'Return airfare',
      'Dubai tourist visa',
      '5 nights 5-star hotel',
      'Daily breakfast',
      'Dubai city tour',
      'Desert safari',
      'Airport transfers',
    ],
    image: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    ],
    featured: true,
    rating: 4.8,
    reviews: 201,
  },
  {
    id: 7,
    slug: 'dubai-luxury-7-nights',
    title: 'Dubai Luxury Escape — 7 Nights',
    price: 195000,
    currency: 'PKR',
    duration: '7 Nights / 8 Days',
    durationDays: 8,
    country: 'UAE',
    city: 'Dubai',
    category: 'Dubai',
    hotel: {
      name: 'Atlantis The Palm',
      stars: 5,
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'Breakfast & Dinner',
    description:
      'Live the Dubai dream at the iconic Atlantis The Palm. Enjoy world-class dining, Aquaventure Waterpark access, exclusive yacht cruise, and VIP desert safari for an unmatched luxury holiday experience.',
    highlights: [
      'Stay at Atlantis The Palm',
      'Aquaventure Waterpark access',
      'Private yacht sunset cruise',
      'VIP desert safari with gourmet dinner',
      'Helicopter tour of Dubai',
    ],
    inclusions: [
      'Return business-class airfare',
      'Dubai tourist visa',
      '7 nights at Atlantis The Palm',
      'Breakfast & dinner',
      'Aquaventure Waterpark',
      'Yacht cruise',
      'VIP desert safari',
      'Helicopter tour',
      'Private airport transfers',
    ],
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg',
    ],
    featured: false,
    rating: 5.0,
    reviews: 54,
  },
  {
    id: 8,
    slug: 'malaysia-kuala-lumpur-6-nights',
    title: 'Kuala Lumpur & Langkawi — 6 Nights',
    price: 125000,
    currency: 'PKR',
    duration: '6 Nights / 7 Days',
    durationDays: 7,
    country: 'Malaysia',
    city: 'Kuala Lumpur & Langkawi',
    category: 'Malaysia',
    hotel: {
      name: 'Mandarin Oriental KL + The Danna Langkawi',
      stars: 5,
    },
    flightsIncluded: true,
    visaIncluded: false,
    mealsIncluded: 'Breakfast',
    description:
      'Discover the best of Malaysia in one incredible trip — the towering Petronas Twin Towers and cultural diversity of Kuala Lumpur, followed by the pristine beaches and rainforests of the paradise island of Langkawi.',
    highlights: [
      'Petronas Twin Towers observation deck',
      'Batu Caves Hindu temple complex',
      'Langkawi island beach stays',
      'Cable car to Machinchang mountain',
      'Mangrove jungle river cruise',
    ],
    inclusions: [
      'Return airfare',
      '6 nights 5-star accommodation',
      'Daily breakfast',
      'KL city tour',
      'Domestic KL–Langkawi flight',
      'Langkawi island tour',
      'Airport & hotel transfers',
    ],
    image: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg',
      'https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg',
    ],
    featured: true,
    rating: 4.7,
    reviews: 112,
  },
  {
    id: 9,
    slug: 'malaysia-family-8-nights',
    title: 'Malaysia Family Adventure — 8 Nights',
    price: 155000,
    currency: 'PKR',
    duration: '8 Nights / 9 Days',
    durationDays: 9,
    country: 'Malaysia',
    city: 'Kuala Lumpur, Penang & Genting',
    category: 'Malaysia',
    hotel: {
      name: 'Sunway Resort & Spa + G Hotel Penang',
      stars: 4,
    },
    flightsIncluded: true,
    visaIncluded: false,
    mealsIncluded: 'Breakfast & Dinner',
    description:
      'An action-packed family holiday covering three of Malaysia\'s most exciting destinations. From theme parks and highland resorts at Genting to the heritage streets of Penang and the urban thrills of Kuala Lumpur.',
    highlights: [
      'Sunway Lagoon theme park',
      'Genting Highlands casino resort',
      'Penang heritage trail',
      'Street food walking tour',
      'KL Tower sky box',
    ],
    inclusions: [
      'Return airfare',
      '8 nights accommodation',
      'Breakfast & dinner',
      'All inter-city transfers',
      'Sunway Lagoon tickets',
      'Guided city tours',
      'Airport transfers',
    ],
    image: 'https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg',
      'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg',
    ],
    featured: false,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: 10,
    slug: 'umrah-ramadan-special',
    title: 'Umrah Ramadan Special — 21 Nights',
    price: 220000,
    currency: 'PKR',
    duration: '21 Nights / 22 Days',
    durationDays: 22,
    country: 'Saudi Arabia',
    city: 'Makkah & Madinah',
    category: 'Umrah',
    hotel: {
      name: 'Hilton Makkah Convention Hotel',
      stars: 5,
      distanceFromHaram: 'Tower directly overlooking Al-Haram',
    },
    flightsIncluded: true,
    visaIncluded: true,
    mealsIncluded: 'Suhoor & Iftar',
    description:
      'Spend the blessed month of Ramadan in the holiest cities on earth. This exclusive package lets you observe the last ten nights in Makkah, pray Taraweeh behind the world\'s finest Imams, and witness Laylatul Qadr in the Masjid Al-Haram.',
    highlights: [
      'Last 10 nights (Ashra) in Makkah',
      'Taraweeh prayers in Masjid Al-Haram',
      'Suhoor & Iftar buffet daily',
      'I\'tikaf arrangements available',
      'Exclusive Ramadan Ziyarat tour',
    ],
    inclusions: [
      'Return airfare',
      'Umrah Ramadan visa',
      '21 nights 5-star accommodation',
      'Suhoor & Iftar daily',
      'All guided tours',
      'Airport transfers',
      'Dedicated Ramadan guide',
    ],
    image: 'https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2245174/pexels-photo-2245174.jpeg',
    ],
    featured: true,
    rating: 5.0,
    reviews: 89,
  },
];

export default packages;

export const countries = ['Saudi Arabia', 'Turkey', 'UAE', 'Malaysia'];
export const categories = ['Umrah', 'Turkey', 'Dubai', 'Malaysia'];
export const priceRanges = [
  { label: 'Under PKR 100,000', min: 0, max: 100000 },
  { label: 'PKR 100,000 – 150,000', min: 100000, max: 150000 },
  { label: 'PKR 150,000 – 200,000', min: 150000, max: 200000 },
  { label: 'Above PKR 200,000', min: 200000, max: Infinity },
];
export const durationOptions = [
  { label: 'Up to 7 days', min: 0, max: 7 },
  { label: '8 – 14 days', min: 8, max: 14 },
  { label: '15 days or more', min: 15, max: Infinity },
];
