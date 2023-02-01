import { RESTAURANT } from '../../RestaurantScreen/data';
export default [
  {
    image: 'data:image/png;base64,' + RESTAURANT.coverPicture,
    name: RESTAURANT.restaurantName,
    cusines: RESTAURANT.restaurantCusines,
    location: RESTAURANT.location,
    rating: 4.5,
    cheapestPlate: 20
  },
  {
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Fortnum & Masan Diamond \nJubile Tea Salon',
    cusines: ['Italian', 'Sicilian Sweets'],
    location: 'Notting Hill',
    rating: 3.5,
    cheapestPlate: 40
  },
  {
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    name: 'HIX Soho Restaurant & Bar',
    cusines: ['Greek'],
    location: 'Chelsea',
    rating: 4.5,
    cheapestPlate: 20
  },
  {
    image: 'https://images.unsplash.com/photo-1543340904-0b1d843bccda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    name: 'Gaucho Piccadilly',
    cusines: ['Steak', 'Pork'],
    location: 'Piccadilly',
    rating: 4,
    cheapestPlate: 30
  },
  {
    image: 'https://images.unsplash.com/photo-1556694795-b6423d3d5b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    name: 'Evelyns Table',
    cusines: ['British'],
    location: 'Piccadilly',
    rating: 4,
    cheapestPlate: 35
  }
]
