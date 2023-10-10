import "./globals.css";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vladyslav Freishmidt",
  description: "Vladyslav Freishmidt - passionate software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Header = () => {
    return (
      <header className="my-16">
        <Navigation />
      </header>
    );
  };

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3 className="text-sm">
          Designed and Developed by Vladyslav Freishmidt © 2023
        </h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="bg-yellow-300 text-center text-black font-medium text-sm underline py-1">
          🇺🇦 Support Ukraine
        </div>
        <div className="mx-auto  max-w-2xl px-6">
          <Header />
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
