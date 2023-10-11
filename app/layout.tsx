import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UkraineFlagIcon from "@/components/UkraineFlagIcon";

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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <div className="bg-gray-700 py-1">
          <a href="https://war.ukraine.ua/support-ukraine/" target="_blank">
            <div className="flex items-center justify-center gap-2">
              <UkraineFlagIcon />
              <span className="text-white text-md underline underline-offset-4">
                Support Ukraine
              </span>
            </div>
          </a>
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
