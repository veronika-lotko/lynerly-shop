import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lynerly Shop",
  description: "Магазин стяжных ремней - для чемоданов, сумок, рюкзаков и не только",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
