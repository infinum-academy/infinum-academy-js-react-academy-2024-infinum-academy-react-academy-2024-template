'use client';

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import styles from "../page.module.css";
import { ShowsList } from "@/components/shared/ShowsList/ShowsList";

export default function Home() {
  return (
    <main className={styles.main}>
        <AuthRedirect to='/login' condition='isLoggedOut'/>
        <ShowsList topRated={false} />
    </main>
  );
}
