export interface IUser {
  id?: string;
  email: string;
  name: string;
  phone?: string;
  image?: String;
}

export interface ICourier extends IUser {
  rating: number;
}
