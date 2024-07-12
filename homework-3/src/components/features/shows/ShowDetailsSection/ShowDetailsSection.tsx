'use client';
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getShow } from "@/fetchers/show";
import MainLayout from "@/components/shared/MainLayout/MainLayout";
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";

export default function ShowDetailsPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(`/api/shows/${id}`, () =>
    getShow(id as string)
  );

  if (isLoading || !data) return <LoadingSpinner/>
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <MainLayout tvShow={data} />
    </div>
  );
}
