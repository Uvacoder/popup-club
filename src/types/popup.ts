export type Popup = {
  id?: number;
  name: string;
  description: string;
  basedIn: string;
  imageUrl?: string;
  instagram?: String;
  facebook?: String;
  youtube?: String;
  categories: string[];
  isHot: boolean;
  orderType: 'First come first serve' | 'Preorder';
  Events?: Event[];
};

export type Event = {
  id: number;
  name?: string;
  date: Date;
  location: string;
  popup: Popup;
};
