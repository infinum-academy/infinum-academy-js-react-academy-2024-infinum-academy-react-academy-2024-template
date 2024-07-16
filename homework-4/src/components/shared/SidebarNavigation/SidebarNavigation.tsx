"use client";
import { Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./SidebarNavigation.module.css";
import LogoImage from "@/components/core/LogoImage/LogoImage";
import { navItems } from "../Data/NavigationItems";
import { usePathname } from "next/navigation";

export default function SidebarNavigation() {
  const path = usePathname();

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
            alignItems="center"
            gap={3}
          >
            {
              navItems.map((item, index) => (
                <NextLink
                  href={item.path}
                  key={index}
                  className={`${styles.navLink} ${path === item.path && styles.active}`}
                >
                  {item.name}
                </NextLink>
              ))
            }
          </Flex>
        </nav>

        <NextLink 
          href={`/logout`}
          className={styles.logoutBtn}
        >Logout
        </NextLink>
      </Flex>
    </div>
  );
}
