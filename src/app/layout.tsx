import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/SessionProvider";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blog Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={kanit.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
