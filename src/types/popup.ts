export type Popup = {
  id: number;
  name: string;
  description: string;
  image: string;
  categories: string[];
  isHot: boolean;
  orderType: "First come first serve" | "Preorder";
};

export type Event = {
  id: number;
  date: Date;
  popup: Popup;
};
