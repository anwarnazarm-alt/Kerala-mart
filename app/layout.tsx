import type { ReactNode } from "react";

export const metadata = {
  title: "KERALA MART",
  description: "Your Kerala Shopping Destination",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
