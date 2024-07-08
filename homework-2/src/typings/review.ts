export interface IReview{
  id: string;
  avatar: string;
  email: string;
  comment: string;
  rating: number;
}

export interface IReviewProps{
  reviews: IReview[];
  onAddReview: (review: IReview) => void;
  onDeleteReview: (reviewId: string) => void;
}

export interface IReviewFormProps{
  onAddReview: (review: IReview) => void;
}

export interface IReviewListProps{
  reviews: IReview[];
  onDeleteReview: (reviewId: string) => void;
}

export interface IReviewItemProps{
  review: IReview;
  onDeleteReview: (reviewId: string) => void;
}