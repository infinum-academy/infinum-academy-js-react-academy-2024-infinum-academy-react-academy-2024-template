'use client';

import ShowContainer from "@/components/features/shows/ShowContainer/ShowContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <ShowContainer />
    </main>
  );
}
