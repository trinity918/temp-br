import '@fortawesome/fontawesome-free/css/all.min.css';
import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
export const pageLinks = [
    {id:'1',href:'#home',text:'home'},
    {id:'2',href:'#about',text:'about'},
    {id:'3',href:'#services',text:'services'},
    {id:'4',href:'#tours',text:'tours'},
]
export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
  ];
  
  export const services = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: 'Get the best travel deals and exclusive discounts to make your trips budget-friendly.',
    },
    {
      id: 2,
      icon: 'fas fa-tree fa-fw',
      title: 'endless hiking',
      text: 'Explore breathtaking trails and scenic landscapes with our guided hiking tours.',
    },
    {
      id: 3,
      icon: 'fas fa-socks fa-fw',
      title: 'amazing comfort',
      text: 'Enjoy premium accommodations and top-tier amenities for a relaxing journey.',
    },
  ];
  
  export const tours = [
    {
      id: 1,
      image: tour1,
      date: 'august 26th, 2020',
      title: 'Tibet Adventure',
      info: ` Journey through Tibet’s stunning landscapes and ancient monasteries. Experience the rich culture and history of the Roof of the World.`,
      location: 'china',
      duration: 6,
      cost: 2100,
    },
    {
      id: 2,
      image: tour2,
      date: 'october 1th, 2020',
      title: 'best of java',
      info: ` Explore Java’s lush greenery, cultural heritage, and vibrant streets. Discover the heart of Indonesia with our expert guides.`,
      location: 'indonesia',
      duration: 11,
      cost: 1400,
    },
    {
      id: 3,
      image: tour3,
      date: 'september 15th, 2020',
      title: 'explore hong kong',
      info: `Experience the energy of Hong Kong’s skyline, markets, and nightlife. Discover the best of the city with our local guides.`,
      location: 'hong kong',
      duration: 8,
      cost: 5000,
    },
    {
      id: 4,
      image: tour4,
      date: 'december 5th, 2019',
      title: 'kenya highlights',
      info: ` Embark on a thrilling safari adventure through Kenya’s breathtaking wildlife and landscapes.`,
      location: 'kenya',
      duration: 20,
      cost: 3300,
    },
  ];