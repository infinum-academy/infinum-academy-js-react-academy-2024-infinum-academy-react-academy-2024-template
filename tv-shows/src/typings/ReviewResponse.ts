export interface IUserResponse {
    id: string,
    email: string,
    image_url?: string,
}

export interface ISingleReviewResponse {
    id: string,
    comment: string,
    rating: number,
    show_id: number,
    user: IUserResponse
}

export interface IReviewResponse {
    review: ISingleReviewResponse
}

export interface IReviewsResponse {
	reviews: Array<ISingleReviewResponse>;
}