
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { Theme } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog personal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = cookies()
  const theme = cookiesStore.get("theme")?.value as Theme || "light"

  return (
    <html className={theme} lang="en">
      <body className={`${inter.className} transition-colors duration-500 dark:bg-slate-950 bg-white dark:text-white text-black`}>
        {children}
      </body>
    </html>
  );
}
