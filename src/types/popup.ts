export type Popup = {
  id: number;
  name: string;
  description: string;
  basedIn: string;
  links: Links;
  categories: string[];
  isHot: boolean;
  orderType: 'First come first serve' | 'Preorder';
  events?: Event[];
};

export type Event = {
  id: number;
  popupId: string;
  locationid: string;
  name?: string;
  date: Date;
  popup: Popup;
  location: Location;
};

export type Location = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  mapsUrl: string;
  events: Event[];
};

export type Links = {
  imageUrl?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  website?: string;
  youtube?: string;
};
