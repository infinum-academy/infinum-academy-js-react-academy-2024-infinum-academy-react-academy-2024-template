import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from './swrKeys';

interface ISingleShowResponse {
    title: string,
    no_of_reviews: number,
    image_url: string,
    average_rating: number,
    description: string,
    id: string,
}

interface IShowResponse {
    show: ISingleShowResponse,
}

interface IShowsResponse {
	shows: Array<ISingleShowResponse>;
}

export function getAllShows() {
	return fetcher<IShowsResponse>(swrKeys.allShows);
}

export function getTopRatedShows() {
	return fetcher<IShowsResponse>(swrKeys.topRatedShows);
}

export function getShow(id: string) {
	return fetcher<IShowResponse>(`${swrKeys.allShows}/${id}`);
}