"use client";
import useSWR from "swr";
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShowList } from "@/typings/show";

export default function ShowListSection() {
  const { data, error, isLoading } = useSWR<IShowList>(swrKeys.allShows, fetcher);
  const shows = data?.shows || [];
  
  if (error && !data) return <div>No shows available</div>;
  if (isLoading) return <LoadingSpinner/>
  
  return <ShowsList shows={shows} />
}
