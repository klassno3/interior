"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Montserrat, Bebas_Neue } from "next/font/google";

import "../globals.css";
import Provider from "./provider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <div
            className={`${montserrat.variable} ${bebasNeue.variable} overflow-hidden `}
          >
            {isHome && isLoading ? (
              <SplashScreen
                finishLoading={() => {
                  setIsLoading(false);
                }}
              />
            ) : (
              <div className="">
                <Navigation />
                {children}
                <Footer />
              </div>
            )}
          </div>
        </Provider>
      </body>
    </html>
  );
}
