"use client";
import { Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import LogoImage from "@/components/core/LogoImage/LogoImage";
import { navItems } from "../Data/NavigationItems";
import styles from "./SidebarNavigation.module.css";
import { useUser } from "@/hooks/useUser";
import { clearLocalStorage } from "../utilities/LocalStorage/LocalStorage";

export default function SidebarNavigation() {
  const path = usePathname();
  const { mutate } = useUser();

  function onLogout(){
    clearLocalStorage();
    mutate(null, {"revalidate": false});
  }

  return (
      <Flex
        className={styles.navbar}
        justifyContent="space-between"
      >
        <nav className={styles.navItems}>
          <LogoImage width={199} />
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

        <Text as="button"
          onClick={onLogout}
          className={styles.logoutBtn}
        >Logout
        </Text>
      </Flex>
  );
}
