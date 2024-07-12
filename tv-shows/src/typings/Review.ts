import { IUser } from "./User";

export interface IReviewItem {
    text: string;
    rating: number;
    user: IUser;
}

export interface IReviewList {
    reviews: Array<IReviewItem>
}