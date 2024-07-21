import { IUser } from '@/fetchers/user';
import { IReview } from './review';

export interface IApiResponseReview {
  review: IReview
}

export interface IApiResponseUser{
  user: IUser;
}
