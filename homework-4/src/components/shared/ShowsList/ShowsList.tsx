import ShowCard from "../ShowCard/ShowCard";
import { Flex } from "@chakra-ui/react";
import { IShow } from "@/typings/show";

export default function ShowsList({shows}: {shows: Array<IShow>}) {
  
  return (
    <Flex
      wrap="wrap"
      gap={8}
      justifyContent="flex-end"
    >
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          show={show}
        />
     ))}
    </Flex>
  );
}
