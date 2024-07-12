"use client";
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { getShowList } from "@/fetchers/show";
import useSWR from "swr";

export default function ShowListSection() {
  const { data, error, isLoading } = useSWR("/api/shows", getShowList);
  const shows = data?.shows || [];
  
  if (isLoading) return <LoadingSpinner/>
  
  if (error) return <div>Error: {error.message}</div>;

  return <ShowsList shows={shows} />;
}
