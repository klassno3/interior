import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import Provider from "./provider";
import Navigation from "@/components/Navigation";
import "../globals.css";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Interior design",
  description: "Interior design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <div
            className={`${montserrat.variable} ${bebasNeue.variable} overflow-hidden`}
          >
            <Navigation />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
