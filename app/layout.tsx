import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToTop } from "@/components/layout/ToTop";
import { Lato, EB_Garamond, Playfair_Display } from "next/font/google";
export const metadata = {
  title: "Biodanza with Caroline",
  description: "Biodanza classes and events",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body
        className={`antialiased flex flex-col 
      min-h-screen relative`}
      >
        <Header />

        <main className="flex-1">{children}</main>
        <ToTop />
        <Footer />
      </body>
    </html>
  );
}
