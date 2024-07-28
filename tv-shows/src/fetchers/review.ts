import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from './swrKeys';
import { IReviewsResponse } from '@/typings/ReviewResponse';

export function getShowReviews(showId: string) {
	return fetcher<IReviewsResponse>(swrKeys.showReviews(showId));
}
