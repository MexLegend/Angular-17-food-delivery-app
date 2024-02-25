export interface IMenuItem {
  id?: string;
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  category: ICategory;
}

export interface ICategory {
  id?: string;
  name: string;
  icon: string;
}
