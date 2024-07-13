import { Container } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Container bg="rgb(55,22,135)" p={10} borderRadius={8}>
      {children}
    </Container>
  );
}