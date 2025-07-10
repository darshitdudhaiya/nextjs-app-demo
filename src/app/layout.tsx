import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Server Components Demo",
  description:
    "Demonstrating automatic layouts, server components, and streaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
