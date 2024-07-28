'use client';

import styles from "../page.module.css";
import { ShowsList } from "@/components/shared/ShowsList/ShowsList";

export default function Home() {
  return (
    <main className={styles.main}>
        <ShowsList topRated={true} />
    </main>
  );
}
