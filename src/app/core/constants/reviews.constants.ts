import { IReviewResponse } from '@models/review.interface';
import { CUSTOMERS } from './customers.constant';
import { MENU } from './menu.constant';

export const REVIEWS: IReviewResponse[] = [
  {
    id: '1',
    comment:
      'Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you.',
    rating: 4.8,
    userId: CUSTOMERS[0].id!,
    user: CUSTOMERS[0],
    menuItemId: MENU[0].id!,
    menuItem: MENU[0],
  },
  {
    id: '2',
    comment: '',
    rating: 4.8,
    userId: CUSTOMERS[1].id!,
    user: CUSTOMERS[1],
    menuItemId: MENU[1].id!,
    menuItem: MENU[1],
  },
  {
    id: '3',
    comment: '',
    rating: 4.8,
    userId: CUSTOMERS[2].id!,
    user: CUSTOMERS[2],
    menuItemId: MENU[2].id!,
    menuItem: MENU[2],
  },
];
