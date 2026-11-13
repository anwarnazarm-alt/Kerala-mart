import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerala Mart",
  description:
    "Kerala's own free online buy and sell marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
