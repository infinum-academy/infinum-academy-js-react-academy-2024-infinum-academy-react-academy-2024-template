import { Card, Flex } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Card variant="primary">
        {children}
      </Card>
    </Flex>
  );
}