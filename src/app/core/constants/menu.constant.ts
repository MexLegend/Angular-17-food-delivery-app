import { IMenuItem } from '@models/menu.interface';
import { CATEGORIES } from './categories.constant';

export const MENU: IMenuItem[] = [
  {
    id: '1',
    image: 'assets/images/menu-item-1.webp',
    name: 'Spaghetti Carbonara',
    description:
      'Un plato de pasta italiano hecho con huevos, queso parmesano, panceta o tocino y pimienta negra',
    price: 50,
    rating: 4.5,
    category: CATEGORIES[0],
  },
  {
    id: '2',
    image: 'assets/images/menu-item-2.webp',
    name: 'Fish and Chips',
    description:
      'Un plato británico clásico que consiste en pescado frito (generalmente bacalao) y patatas fritas',
    price: 50,
    rating: 4.2,
    category: CATEGORIES[1],
  },
  {
    id: '3',
    image: 'assets/images/menu-item-3.webp',
    name: 'Caesar Salad',
    description:
      'Una ensalada popular que incluye lechuga romana, crutones, queso parmesano, aderezo Caesar y a menudo pollo a la parrilla',
    price: 50,
    rating: 4.8,
    category: CATEGORIES[3],
  },
];
