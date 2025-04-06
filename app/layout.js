/** @format */
import { Lato } from "next/font/google";
import { SessionProvider } from "@/contexts/session-context";
import { LayoutProvider } from "@/contexts/layout-context";
import { Providers } from "./providers.jsx";

import "./globals.css";
import { validateRequest } from "@/auth/lucia";
export const metadata = {
    verification: {
    google: 'gKEg7ThRAHUGvwMjdnXn3kSQcv65GNIQ5_lgoT6d0jY'
    },
  title: {
    template: "Indigo Consulting %s",
    default: "Indigo Consulting",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Greece real estate",
    "luxury real estate development",
    "real estate consulting",
    "market analysis Greece",
    "redevelopment projects",
    "Golden Visa consulting",
    "case studies Greece",
    "real estate case studies",
    "Indigo Consulting services",
    "real estate investment",
    "Greece property market",
  ],
  description: "Discover Indigo Consulting's expertise through a curated selection of case studies. Our success in luxury real estate development, market analysis, and redevelopment projects in Greece showcases how our consulting services help clients succeed in the dynamic property market.",
  authors: [{ name: "Adam Kirwan" }, { name: "Kasia Kruk" }],
  creator: "A & k Fullstack Development",
  publisher: "A & k Fullstack Development",
};


const inter = Lato({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const session = await validateRequest();
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LayoutProvider>
          <SessionProvider value={session}>
          <Providers>{children}</Providers>
          </SessionProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
