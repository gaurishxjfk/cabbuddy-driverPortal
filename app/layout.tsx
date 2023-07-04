import Head from "next/head";
import "./globals.css";
import Nav from "@/components/Navbar";

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
      <body className="relative h-screen bg-[#E0F4FB]">
        {/* Navbar */}
        <nav className="fixed top-0 z-40 w-full"><Nav /></nav>
        <main className="pt-12 mt-16">
        {children}
        </main>
      </body>
    </html>
  );
}
