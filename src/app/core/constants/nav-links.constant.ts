import { INavLink } from '@models/navlink.interface';

export const NAV_LINKS: INavLink[] = [
  {
    label: 'Why ExTaste?',
    link: 'why_extaste',
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
