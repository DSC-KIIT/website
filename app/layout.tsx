import type { Metadata } from "next";
import ChakraProviderClient from "./ChakraProvider";

export const metadata: Metadata = {
  title: "GDSC KIIT",
  description: "Google Developer Students Club KIIT",
  keywords: "KIIT, GDSC KIIT, Learn and Grow, Developers, Coding Club",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProviderClient>{children}</ChakraProviderClient>
      </body>
    </html>
  );
}
