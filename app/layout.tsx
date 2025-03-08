import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import Providers from "@/providers/progress-bar-provider";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uifry - Simplify Your Finances",
  description:
    "Uifry is a payment platform that simplifies managing your finances. Send and receive money, exchange currencies, manage 10+ currencies, and use a virtual USD card for online shopping.",
  keywords: [
    "payment platform",
    "send money",
    "receive money",
    "currency exchange",
    "multi-currency wallet",
    "virtual USD card",
    "online shopping",
    "finances",
    "Uifry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${karla.variable} min-h-screen w-screen antialiased font-sans`}
      >
        <ThemeContextProvider>
          <Providers>{children}</Providers>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
