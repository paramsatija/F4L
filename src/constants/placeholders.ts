export const PLACEHOLDERS = {
  jacobMeir: {
    portrait: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
    studio: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  performers: {
    akon: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=600',
    deborahCox: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
    mayaDiab: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
    band25: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  hosts: {
    victoriaRecano: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
    aprilSutton: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  guests: {
    aviEdri: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    leslieKee: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=600',
    andersonSilva: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  venue: {
    burjKhalifa: 'https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dubai: 'https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  runway: [
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  museum: [
    { src: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Beyonce - Renaissance Tour', year: '2023' },
    { src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Jennifer Lopez - Vegas', year: '2022' },
    { src: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Britney Spears', year: '2018' },
    { src: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Lady Gaga', year: '2022' },
    { src: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Nicki Minaj', year: '2024' },
  ],
  hero: {
    main: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    secondary1: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    secondary2: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
    runway: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
};

export const EVENT_DATE = new Date('2026-02-13T19:00:00+04:00');

export const TICKET_TIERS = [
  {
    id: 'red',
    name: 'Red Circle',
    subtitle: 'VVIP',
    price: 7500,
    priceUSD: 2045,
    currency: 'AED',
    features: [
      'Premium VVIP seated area with exclusive access',
      'Invitation to the after-party (Evening with the DJ)',
      'Access to the Couture Vault',
      'Premium dining and beverages included',
      'Best views of the runway and performances',
      'Priority red carpet entry',
    ],
    highlight: true,
  },
  {
    id: 'gold',
    name: 'Gold Circle',
    subtitle: 'VIP',
    price: 5000,
    priceUSD: 1360,
    currency: 'AED',
    features: [
      'VIP seated area with excellent stage views',
      'Curated dinner served in the Pavilion',
      'Premium beverages included',
      'Priority entry and seating',
      'Full runway show and live performances access',
    ],
    highlight: false,
  },
  {
    id: 'silver',
    name: 'Silver Circle',
    subtitle: 'General Admission',
    price: 3500,
    priceUSD: 950,
    currency: 'AED',
    features: [
      'Pavilion seated area',
      'Dinner served in the Pavilion',
      'Beverages included',
      'Full runway show and live performances access',
    ],
    highlight: false,
  },
  {
    id: 'black',
    name: 'Black Circle',
    subtitle: 'Sheesha Lounge',
    price: 1500,
    priceUSD: 410,
    currency: 'AED',
    features: [
      'Lounge-style seating in the Sheesha area',
      'Buffet dinner included',
      'Beverages available via paid bar',
      'Relaxed atmosphere with stage views',
    ],
    highlight: false,
  },
  {
    id: 'balcony',
    name: 'Balcony Level 1',
    subtitle: 'Elevated Seating',
    price: 3500,
    priceUSD: 950,
    currency: 'AED',
    features: [
      'Seated balcony area with elevated stage views',
      'Buffet service included',
      'One complimentary beverage',
      'Additional beverages available for purchase',
    ],
    highlight: false,
  },
];

export const JACOB_MEIR_TIMELINE = [
  { year: '1986', event: 'Founded For The Stars in Los Angeles' },
  { year: '1990s', event: 'Prince, Madonna world tour costumes' },
  { year: '2004', event: 'Britney Spears Onyx Hotel Tour' },
  { year: '2016', event: 'First "Fashions for Love" event' },
  { year: '2023', event: 'California State Proclamation' },
  { year: '2024', event: 'UN Presidential Medal of Honor' },
  { year: '2026', event: 'Dubai Spectacular' },
];

export const CELEBRITY_CLIENTS = [
  'Prince', 'Madonna', 'Michael Jackson', 'Cher', 'Beyonce', 'Lady Gaga',
  'Whitney Houston', 'Jennifer Lopez', 'Britney Spears', 'Nicki Minaj',
  'Katy Perry', 'Christina Aguilera', 'Shakira', 'Gwen Stefani', 'Tyra Banks',
  'Carrie Underwood', 'Paris Hilton', 'Thalia',
];

export const CELEBRITY_LOOKS = [
  { celebrity: 'Beyonce', event: 'Renaissance Tour', year: '2023', image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { celebrity: 'Jennifer Lopez', event: 'Vegas Residency', year: '2022', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { celebrity: 'Britney Spears', event: 'Onyx Hotel Tour', year: '2004', image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { celebrity: 'Lady Gaga', event: 'Chromatica Ball', year: '2022', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { celebrity: 'Nicki Minaj', event: 'Pink Friday 2 Tour', year: '2024', image: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { celebrity: 'Madonna', event: 'World Tour', year: '1990s', image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const PERFORMERS = [
  {
    name: 'AKON',
    title: 'Grammy-Winning Global Superstar',
    quote: 'Love changes everything',
    time: '9:00 PM',
    description: 'Headline Performance',
    image: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'DEBORAH COX',
    title: 'R&B Legend & Grammy Nominee',
    quote: "Nobody's supposed to be here",
    time: '8:00 PM',
    description: 'Live Performance',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'MAYA DIAB',
    title: "Middle East's Queen of Pop",
    quote: 'Arabic pop royalty',
    time: '10:00 PM',
    description: 'Live Performance',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: '25BAND',
    title: 'Persian Pop Sensations',
    subtitle: 'Tamin & A-Del',
    quote: 'International chart-toppers',
    time: '7:00 PM',
    description: 'Opening Act',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const HOSTS = [
  {
    name: 'VICTORIA RECANO',
    title: 'Celebrity Host',
    description: 'Emmy-winning entertainment journalist and red carpet veteran',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'APRIL SUTTON',
    title: 'Celebrity Co-Host',
    description: 'Fashion insider and style icon',
    image: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const FEATURED_GUESTS = [
  {
    name: 'AVI EDRI',
    title: 'Celebrity Makeup Artist',
    description: 'The artist behind the iconic looks',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'LESLIE KEE',
    title: 'Celebrity Photographer',
    description: 'Capturing every unforgettable moment',
    image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'ANDERSON SILVA',
    title: 'UFC Legend',
    description: 'Special VIP Guest',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const COLLECTION_THEMES = [
  {
    name: 'FIRST LOVE',
    description: 'Soft pastels, romantic silhouettes, whispered promises',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'PASSIONATE AFFAIR',
    description: 'Bold reds, dramatic cuts, heart-stopping moments',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'ETERNAL BOND',
    description: 'Timeless whites, bridal couture, forever elegance',
    image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'HOLLYWOOD GLAMOUR',
    description: 'Show-stopping eveningwear, red carpet royalty',
    image: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const EVENT_SCHEDULE = [
  { time: '6:30 PM', title: 'Doors Open', description: 'VIP arrival begins | Champagne & canapes | Red carpet photos', dresscode: 'Black tie with a touch of crimson' },
  { time: '7:00 PM', title: 'Red Carpet', description: 'Celebrity arrivals | International press | Paparazzi moments' },
  { time: '7:30 PM', title: 'Opening Performance', description: '25Band takes the stage | Persian pop magic' },
  { time: '8:00 PM', title: 'Deborah Cox Live', description: 'R&B legend performs | Classic love anthems' },
  { time: '8:45 PM', title: 'Champagne Interlude', description: 'Networking | Live violin | Hors d\'oeuvres' },
  { time: '9:00 PM', title: 'Akon Headlines', description: 'Grammy winner | Global hits | The music of love' },
  { time: '10:00 PM', title: 'Maya Diab Live', description: 'Middle Eastern pop royalty' },
  { time: '10:30 PM', title: 'For The Stars Runway Show', description: 'Jacob Meir\'s couture collection | 80 international models | The main event' },
  { time: '11:30 PM', title: 'Museum Collection Unveiling', description: 'Private viewing | Acquisition opportunities' },
  { time: '12:00 AM', title: 'VIP After Party', description: 'Celebrity DJ | Signature cocktails | Dancing until 2AM | Mingle with the stars under the Burj Khalifa lights' },
];

export const PRESS_QUOTES = [
  {
    quote: 'Jacob Meir has become the go-to designer for A-list performers',
    source: 'Forbes',
  },
  {
    quote: 'His creations, with their attention to detail and precious materials, are now a rare thing in the fashion world',
    source: 'Milan Weekly',
  },
  {
    quote: 'A fashion candy store... fantasy refined, high end, artistic and beyond anything you could imagine',
    source: 'Yelp Reviews',
    rating: '5-Star',
  },
];

export const VALENTINE_EXPERIENCES = [
  { icon: 'heart', title: 'Heart-shaped champagne flutes', description: 'Filled with Dom Perignon Vintage' },
  { icon: 'flower', title: 'Rose petal pathways', description: 'Leading through the venue' },
  { icon: 'mail', title: 'Love letter station', description: 'Write to someone special' },
  { icon: 'camera', title: 'Couples\' photo booth', description: 'With Hollywood backdrop' },
  { icon: 'gift', title: 'Valentine\'s gift bags', description: 'From luxury partners' },
  { icon: 'sparkles', title: 'Midnight toast', description: 'Under the Arabian stars' },
];
