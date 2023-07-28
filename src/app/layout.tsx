import UIContext, { Context } from "@/contexts/UIContext";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <header>
            <h1>Malik Elbadri</h1>
            <nav>
              <ul>
                <li>Home</li>
                <li>Gallery</li>
                <li>About Me</li>
                <li>Experience</li>
                <li>Education</li>
              </ul>
            </nav>
          </header>
          {children}
          <footer></footer>
        </body>
      </UIContext>
    </html>
  );
}
