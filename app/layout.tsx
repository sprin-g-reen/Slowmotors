import type { Metadata } from "next";
import { Reem_Kufi } from "next/font/google";
import "./globals.css";

const reemKufi = Reem_Kufi({
  variable: "--font-reem-kufi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Slow Moto Tours | Authentic India Motorcycle Rides",
  description: "Experience authentic India on guided Royal Enfield motorcycle tours. Join Jo and Pratish for slow travel motorcycle adventures through Southern India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${reemKufi.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

