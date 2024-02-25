import { IReviewResponse } from '@models/review.interface';
import { CUSTOMERS } from './customers.constant';
import { MENU } from './menu.constant';

export const REVIEWS: IReviewResponse[] = [
  {
    id: '1',
    comment:
      'ExTaste is the best. Besides the many and delicious meals, the service is also very good, especially in the very fast delivey. I highly recommend ExTaste to you',
    rating: 4.2,
    userId: CUSTOMERS[0].id!,
    user: CUSTOMERS[0],
    menuItemId: MENU[0].id!,
    menuItem: MENU[0],
  },
  {
    id: '2',
    comment:
      'ExTaste truly stands out. Not only for its mouthwatering dishes but also for its exceptional service, including lightning-fast delivery. I wholeheartedly endorse ExTaste to everyone',
    rating: 4.8,
    userId: CUSTOMERS[1].id!,
    user: CUSTOMERS[1],
    menuItemId: MENU[1].id!,
    menuItem: MENU[1],
  },
  {
    id: '3',
    comment:
      'ExTaste sets the bar high. With an array of delectable dishes and prompt delivery, their service shines. I enthusiastically endorse ExTaste to anyone seeking a top-notch dining experience',
    rating: 3.5,
    userId: CUSTOMERS[2].id!,
    user: CUSTOMERS[2],
    menuItemId: MENU[2].id!,
    menuItem: MENU[2],
  },
];
