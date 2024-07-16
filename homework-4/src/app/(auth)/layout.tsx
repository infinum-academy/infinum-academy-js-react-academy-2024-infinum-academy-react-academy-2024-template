import { chakra, Container } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{padding: "30px 10px 0 10px"}}>
      <Container bg="rgb(55,22,135)" p={10} borderRadius={8}>
        {children}
      </Container>
    </div>
  );
}