import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar.components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cursos en Línea | UCCedemy",
  description: "UCC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
