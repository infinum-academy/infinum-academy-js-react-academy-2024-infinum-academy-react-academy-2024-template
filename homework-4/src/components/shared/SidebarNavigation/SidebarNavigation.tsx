"use client";
import { Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./SidebarNavigation.module.css";
import { useRef } from "react";
import LogoImage from "@/components/core/LogoImage/LogoImage";

export default function SidebarNavigation() {
  const navListEl = useRef<HTMLDivElement>(null);

  function changeActiveLink(e: any) {
    const links = navListEl.current?.childNodes as NodeListOf<HTMLAnchorElement>;
    links.forEach((link: HTMLAnchorElement) =>
      link.classList.remove(styles.active)
    );
    e.currentTarget.classList.add(styles.active);
  }

  return (
    <div className={styles.navWrapper}>
      <Flex
        className={styles.navbar}
        justifyContent="space-between"
      >
        <nav className={styles.navItems}>
          <LogoImage width={100} />
          <Flex
            flexWrap="wrap"
            flexDirection="column"
            gap={3}
            ref={navListEl}
          >
            <NextLink
              href={`/shows/all-shows`}
              onClick={(e) => changeActiveLink(e)}
              className={`${styles.navLink} ${styles.active}`}
            >
              All shows
            </NextLink>
            <NextLink
              href={`/shows/top-rated`}
              onClick={(e) => changeActiveLink(e)}
              className={styles.navLink}
            >
              Top rated
            </NextLink>
            <NextLink
              href={`/shows/my-profile`}
              onClick={(e) => changeActiveLink(e)}
              className={styles.navLink}
            >
              My profile
            </NextLink>
          </Flex>
        </nav>

        <NextLink 
          href={`#`}
        >
          Logout
        </NextLink>
      </Flex>
    </div>
  );
}
