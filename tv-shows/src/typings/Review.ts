import { IUser } from "./User";

export interface IReviewItem {
    id: number;
    comment: string;
    rating: number;
    showId: number;
    user: IUser;
}

export interface IReviewList {
    reviews: Array<IReviewItem>;
}