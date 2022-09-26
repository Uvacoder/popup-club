import { Popup } from '../src/types/popup';

const pizzaSlut: Popup = {
  name: 'Pizza Slut',
  description: 'Pizza made for the love of it, babe 💋',
  imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
  categories: ['Neapolitan', 'pizza'],
  isHot: true,
  orderType: 'First come first serve',
  basedIn: 'Orlando',
};

const redPanda: Popup = {
  name: 'Red Panda Noodle. ',
  description: 'Fresh handmade noodles',
  imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
  categories: ['Noodles', "Chef's choice", 'Fusion'],
  isHot: true,
  orderType: 'First come first serve',
  basedIn: 'Orlando',
};
const speakeasyBurger: Popup = {
  name: 'Speakeasy Burger',
  description: "Orlando's favorite burger 🤫 ",
  imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
  categories: ['Burgers'],
  isHot: true,
  orderType: 'First come first serve',
  basedIn: 'Orlando',
};

const goldOx: Popup = {
  name: 'Gold Ox bao',
  description: 'Handmade scratch authentic Taiwanese cuisine',
  imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
  categories: ['Bao', 'Taiwanese', "Chef's choice"],
  isHot: true,
  orderType: 'First come first serve',
  basedIn: 'Orlando',
};

const smokemade: Popup = {
  name: 'Smokemade Meats',
  description: 'Central Texas style BBQ brisket, pork, ribs + tacos',
  imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
  categories: ['BBQ', 'Tacos'],
  isHot: true,
  orderType: 'Preorder',
  basedIn: 'Orlando',
};

const bigassHotdogs: Popup = {
  name: 'Bigass Hotdogs',
  description: 'fuck you and your mustard',
  imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
  categories: ['Hotdogs', 'Bitch'],
  isHot: true,
  orderType: 'Preorder',
  basedIn: 'Orlando',
};

export const popupData = [
  pizzaSlut,
  redPanda,
  speakeasyBurger,
  goldOx,
  smokemade,
  bigassHotdogs,
];
