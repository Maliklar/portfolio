import Navigation from "@/components/Navigation";
import UIContext from "@/contexts/UIContext";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malik Elbadri | Full stack web developer",
  description: "Malik Elbadri is a mobile and website developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UIContext>
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </UIContext>
    </html>
  );
}
