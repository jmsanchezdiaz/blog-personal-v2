import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" lang="en">
      <body className={`${inter.className} transition-colors duration-500 dark:bg-slate-950 bg-white dark:text-white text-black`}>
        {children}
      </body>
    </html>
  );
}
