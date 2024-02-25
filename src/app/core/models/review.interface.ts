import { IMenuItem } from './menu.interface';
import { IUser } from './user.interface';

export interface IReview {
  comment?: string;
  rating: number;
  userId: string;
  menuItemId: string;
}

export interface IReviewResponse extends IReview {
  id: string;
  user: IUser;
  menuItem: IMenuItem;
}
