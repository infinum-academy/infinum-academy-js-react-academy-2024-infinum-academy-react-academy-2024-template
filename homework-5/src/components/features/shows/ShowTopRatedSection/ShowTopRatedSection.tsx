'use client'
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShowList } from "@/typings/show";
import useSWR from "swr";

export default function ShowTopRatedSection() {
  const { data, error, isLoading } = useSWR<IShowList>(swrKeys.topRatedShows, fetcher);
  const shows = data?.shows || [];

  if (error) return <div>No top rated shows available</div>;
  if (isLoading) return <LoadingSpinner />;

  const sorted = shows.sort((a, b) => b.average_rating - a.average_rating);

  return <ShowsList shows={sorted} />
}
