"use client";
import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiLogOut } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import NavigationLink from "../NavigationLink/NavigationLink";
import Logo from "../Logo/Logo";
import { SignInMutator, loggedMutator } from "@/app/fetchers/mutators";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { useEffect } from "react";
import { fetcher } from "@/app/fetchers/fetcher";
import useUserSWR from "@/hooks/useUserSWR";

export default function SidebarNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { name: "All shows", path: "/shows" },
    { name: "Top rated", path: "/top-rated" },
    { name: "My profile", path: "/my-profile" },
  ];

  const { mutate } = useUserSWR();

  function handleLogOut() {
    localStorage.removeItem("headers");
    mutate(null, { revalidate: false });
  }

  return (
    <Flex
      bg="purple.800"
      minHeight="100vh"
      height="auto"
      width="20vw"
      color="white"
      flexDirection="column"
      padding={10}
      gap={3}
      fontSize="large"
      position="fixed"
      boxShadow="10px 0px 10px rgba(0, 0, 0, 0.3)"
    >
      <Flex marginLeft={-5} marginTop={-5} marginBottom={5}>
        <Logo size="small" />
      </Flex>

      {links.map((link, index) => {
        return (
          <NavigationLink
            key={index}
            name={link.name}
            path={link.path}
            currCategory={pathname || ""}
          ></NavigationLink>
        );
      })}

      <Flex marginTop="auto" flexDirection="row" alignItems="center" gap={3}>
        <Text
          fontSize="medium"
          letterSpacing="wide"
          onClick={handleLogOut}
          cursor="pointer"
        >
          Log out
        </Text>
        <FiLogOut />
      </Flex>
    </Flex>
  );
}