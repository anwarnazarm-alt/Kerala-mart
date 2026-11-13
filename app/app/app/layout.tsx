
import './Globals.css';

export const metadata = {
  title: 'KERALA MART',
  description: 'Your Kerala Online Shopping Store',
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
