import "./globals.css";
import { Meta } from "../components/shared/utilities/Meta/Meta";
import { Providers } from "./providers";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Container } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Meta></Meta>
      </head>
      <body id="body">
        <div id="root">
          <SidebarNavigation />
          <div id="contentWrapper">
            <Container maxW="5xl">
              <Providers>{children}</Providers>
            </Container>
          </div>
        </div>
      </body>
    </html>
  );
}