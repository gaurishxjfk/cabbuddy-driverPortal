import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "CabBuddy",
  description: "CabBuddy cab booking platform",
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
