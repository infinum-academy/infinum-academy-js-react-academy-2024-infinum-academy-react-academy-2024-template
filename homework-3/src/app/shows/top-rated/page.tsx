import ShowListSection from "@/components/features/shows/ShowListSection/ShowListSection";
import { shows } from "@/components/shared/Data/Data";
import { IShowCard } from "@/typings/show";


export default function TopRatedShowsList() {
  const topRatedShows = shows.sort((a, b) => b.averageRating - a.averageRating) as IShowCard[];
  return <ShowListSection shows={topRatedShows} />;
}
