import { INavLink } from '@models/navlink.interface';

export const NAV_LINKS: INavLink[] = [
  {
    label: 'Why Foodeli?',
    link: 'why_foodeli',
  },
  {
    label: 'Services',
    link: 'services',
    hasDropdown: true,
  },
  {
    label: 'Menu',
    link: 'menu',
    hasDropdown: true,
  },
  {
    label: 'Contact',
    link: 'contact',
  },
];
