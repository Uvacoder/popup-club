import Tags from '../components/tags';

export type Popup = {
  id: number;
  name: string;
  description: string;
  basedIn: string;
  links: Links;
  tags: Tags[];
  isHot: boolean;
  orderType: 'First come first serve' | 'Preorder';
  events: Event[];
};

export type Event = {
  id: number;
  popupId: string;
  locationid: string;
  description?: string;
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

export type Tags = {
  id: number;
  name: string;
  popups: Popup[];
};
