import "./globals.css";
import { Meta } from "../components/shared/utilities/Meta/Meta";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}