import ShowCard from "../ShowCard/ShowCard";
import { SimpleGrid } from "@chakra-ui/react";
import { IShow } from "@/typings/show";
import styles from "./ShowsList.module.css";

export default function ShowsList({shows}: {shows: Array<IShow>}) {
  const showsList = shows.map((show) => (
    <ShowCard
      key={show.id}
      show={show}
    />
  ));
  
  return (
    <SimpleGrid
      className={styles.grid}
      minChildWidth="185px"
      spacing="20px"
    >
      {showsList}
    </SimpleGrid>
  );
}
