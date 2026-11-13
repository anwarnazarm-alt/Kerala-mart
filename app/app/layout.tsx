import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerala Mart",
  description: "Kerala Buy and Sell Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
