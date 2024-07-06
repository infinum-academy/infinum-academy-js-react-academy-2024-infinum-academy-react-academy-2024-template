import { Inter } from "next/font/google";
import "./globals.css";
import { Meta } from "../components/shared/utilities/Meta/Meta";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Meta></Meta>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}