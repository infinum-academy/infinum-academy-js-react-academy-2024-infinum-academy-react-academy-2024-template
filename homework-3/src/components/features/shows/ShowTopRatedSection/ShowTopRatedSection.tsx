'use client'
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { getTopRatedShows } from "@/fetchers/show";
import useSWR from "swr";

export default function ShowTopRatedSection() {
  const { data, error, isLoading } = useSWR("/api/shows/top-rated", getTopRatedShows);
  const shows = data?.shows || [];

  if (isLoading) return <LoadingSpinner />;

  if (error) return <div>Error: {error.message}</div>;

  const sorted = shows.sort((a, b) => b.average_rating - a.average_rating);

  return <ShowsList shows={sorted} />;
}
