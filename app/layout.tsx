import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "GDSC KIIT",
  description: "Google Developer Students Club KIIT",
  keywords: "KIIT, GDSC KIIT, Learn and Grow, Developers, Coding Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased text-neutral-800 selection:bg-neutral-800 selection:text-neutral-200 light">
        <NextUIProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
