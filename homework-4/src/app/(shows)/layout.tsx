import SidebarNavigation from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex position="relative" justifyContent="center" gap={2} flexWrap="wrap" p={5}>
      <Box>
        <SidebarNavigation/>
      </Box>
      <Container display="flex" justifyContent="center"  flexWrap="wrap" maxWidth="70%" mx="auto" borderRadius={8}>
        {children}
      </Container>
    </Flex>
  );
}