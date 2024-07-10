import { Container } from "@chakra-ui/react";
import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { IShowCard } from "@/typings/show";
import styles from "./ShowListSection.module.css";

export default function ShowListSection({ shows }: { shows: IShowCard[] }) {
  return (
    <div className={styles.showListSection}>
      <Container maxW="5xl">
        <ShowsList shows={shows} />
      </Container>
    </div>
  );
}
