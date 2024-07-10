import ShowCard from "../ShowCard/ShowCard";
import { SimpleGrid } from "@chakra-ui/react";
import { IShowCard } from "@/typings/show";

export default function ShowsList({shows}: {shows: IShowCard[]}) {
  const showsList = shows.map((show) => <ShowCard key={show.title} show={show} />);
  return (
    <SimpleGrid minChildWidth='205px' spacing='20px'>
      {showsList}
    </SimpleGrid>
  );
}
