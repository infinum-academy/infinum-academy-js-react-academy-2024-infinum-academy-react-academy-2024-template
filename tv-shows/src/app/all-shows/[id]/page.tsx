'use client'

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import styles from "../../page.module.css";
import ShowSection from "@/components/features/shows/ShowSection/ShowSection";

export default function ShowDetails () {
    return (
        <main className={styles.main}>
            <AuthRedirect to='/login' condition='isLoggedOut'/>
            <ShowSection />
        </main>
      );
}