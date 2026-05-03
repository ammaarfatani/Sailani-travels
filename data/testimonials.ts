export interface Testimonial {
  id: number;
  name: string;
  location: string;
  package: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Hajj Mohammad Rafiq',
    location: 'Lahore, Pakistan',
    package: 'Umrah Premium Package',
    rating: 5,
    text: 'Alhamdulillah, Sailani Travels made our Umrah a truly blessed experience. From the moment we landed in Jeddah to our return, every detail was handled professionally. The 5-star hotel was steps from the Haram, the guide was knowledgeable and patient, and the transport was always on time. I have already referred my brothers to book through Sailani.',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg',
    date: 'March 2025',
  },
  {
    id: 2,
    name: 'Amna & Tariq Siddiqui',
    location: 'Karachi, Pakistan',
    package: 'Istanbul Cultural Tour',
    rating: 5,
    text: 'Our Istanbul trip was absolutely magical! The itinerary struck a perfect balance between iconic sites and hidden gems. The guide was excellent — full of fascinating historical stories. We especially loved the Bosphorus cruise at sunset. Every hotel and restaurant was top-notch. We are already planning our Cappadocia trip with Sailani next year.',
    avatar: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg',
    date: 'January 2025',
  },
  {
    id: 3,
    name: 'Dr. Khalid Mehmood',
    location: 'Islamabad, Pakistan',
    package: 'Dubai City Break',
    rating: 5,
    text: 'Booked Dubai for our family anniversary and everything was perfect. The Atlantis stay exceeded expectations. The desert safari was the highlight — our children still talk about it. What impressed me most was the responsiveness of the Sailani team. Any query was answered within the hour. Highly recommended for hassle-free travel.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    date: 'February 2025',
  },
  {
    id: 4,
    name: 'Sana & Imran Chaudhry',
    location: 'Faisalabad, Pakistan',
    package: 'Malaysia Family Adventure',
    rating: 4,
    text: 'Malaysia with four kids could have been a nightmare but Sailani made it seamless. The Sunway Lagoon day was unforgettable. The food arrangements were brilliant — the team was always mindful of Halal options. The hotels were clean and centrally located. Minor hiccup with one transfer but it was resolved immediately. Overall, an excellent trip!',
    avatar: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg',
    date: 'December 2024',
  },
  {
    id: 5,
    name: 'Bibi Zubeda Qureshi',
    location: 'Peshawar, Pakistan',
    package: 'Umrah Economy Package',
    rating: 5,
    text: 'I am 68 years old and this was my first Umrah. I was nervous about travelling but the Sailani team were like family. They made sure I was comfortable at every step, helped me with the rituals, and the guide spoke Urdu and Pashto. I cried with gratitude when I first saw the Kaaba. May Allah reward everyone at Sailani. The price was also very fair.',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg',
    date: 'April 2025',
  },
  {
    id: 6,
    name: 'Zain ul Abideen',
    location: 'Rawalpindi, Pakistan',
    package: 'Cappadocia & Istanbul Combo',
    rating: 5,
    text: 'Worth every rupee! The hot-air balloon ride in Cappadocia was a bucket-list experience I will never forget. The cave hotel was unique and the views were incredible. Istanbul was equally amazing. The whole 11-day trip was expertly arranged — zero stress. Sailani Travels knows how to deliver a premium experience.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    date: 'November 2024',
  },
];

export default testimonials;
