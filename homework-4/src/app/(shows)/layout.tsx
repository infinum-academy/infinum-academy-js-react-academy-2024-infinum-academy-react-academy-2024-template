import SidebarNavigation from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Flex } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex flexWrap="wrap" p={8}>
      <SidebarNavigation />
      <div style={{flex: 1}}>
        {children}
      </div>
    </Flex>
  );
}