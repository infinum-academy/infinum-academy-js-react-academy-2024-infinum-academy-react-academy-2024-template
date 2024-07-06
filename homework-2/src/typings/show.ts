import { IReview } from './review';

export interface IShow {
  title: string;
  description: string;
  averageRating?: number;
  imageUrl?: string;
}

export interface IShowProps{
  show: IShow;
  reviews?: IReview[];
}