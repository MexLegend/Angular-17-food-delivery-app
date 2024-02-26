import { INavMenuItem } from '@models/nav-menu-item.interface';

export const NAV_MENU: INavMenuItem[] = [
  {
    label: 'Why ExTaste?',
    link: 'why-extaste',
  },
  {
    label: 'Services',
    link: 'services',
    subMenu: [
      {
        label: 'Easy To Order',
        link: 'easy-to-order',
        description: 'You only need a few steps in ordering food',
      },
      {
        label: 'Fastest Delivery',
        link: 'fastest-delivery',
        description: 'Delivery that is always ontime even faster',
      },
      {
        label: 'Best Quality',
        link: 'best-quality',
        description: 'Not only fast for us quality is also number one',
      },
    ],
  },
  {
    label: 'Menu',
    link: 'menu',
  },
  {
    label: 'Contact',
    link: 'contact',
  },
];
