import { IShow } from "@/typings/show";
import { fetcher } from "./fetcher";

interface IShowListResponse {
  shows: Array<IShow>
}

export function getShowList() {
  return fetcher<IShowListResponse>("/api/shows");
}

export function getTopRatedShows() {
  return fetcher<IShowListResponse>("/api/shows/top-rated");
}

export function getShow(id: string){
  return fetcher<IShow>(`/api/shows/${id}`);
}