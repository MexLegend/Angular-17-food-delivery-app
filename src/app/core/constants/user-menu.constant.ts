import { INavMenuItem } from '@models/nav-menu-item.interface';

export const USER_MENU: INavMenuItem[] = [
  {
    label: 'Your orders',
    link: 'my_orders',
    icon: 'orders'
  },
  {
    label: 'Your reviews',
    link: 'my_reviews',
    icon: 'reviews'
  },
  {
    label: 'Your profile',
    link: 'user_profile',
    icon: 'profile'
  },
  {
    label: 'Addresses',
    link: 'address',
    icon: 'marker'
  },
  {
    label: 'Account Security',
    link: 'account_security',
    icon: 'security-shield'
  },
  {
    label: 'Notifications',
    link: 'preferences',
    icon: 'notification-settings'
  },
  {
    separator: true
  },
];
