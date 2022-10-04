export type Popup = {
  id?: number;
  name: string;
  description: string;
  basedIn: string;
  imageUrl?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  categories: string[];
  isHot: boolean;
  orderType: 'First come first serve' | 'Preorder';
  Events?: Event[];
};

export type Event = {
  id: number;
  popupId: string;
  name?: string;
  date: Date;
  location: string;
  popup: Popup;
};
