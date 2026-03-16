import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToTop } from "@/components/layout/ToTop";
import {
  Lato,
  EB_Garamond,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
export const metadata = {
  title: {
    default: "Biodanza with Caroline | Cardiff & South Wales",
    template: "%s | Biodanza with Caroline",
  },
  description:
    "Join Biodanza classes in Cardiff and South Wales with Caroline. Music, movement, and human connection — all abilities welcome. First class just £5.",
  openGraph: {
    title: "Biodanza with Caroline | Cardiff & South Wales",
    description:
      "Join Biodanza classes in Cardiff and South Wales with Caroline. Music, movement, and human connection — all abilities welcome. First class just £5.",
    type: "website",
    locale: "en_GB",
    siteName: "Biodanza with Caroline",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biodanza with Caroline | Cardiff & South Wales",
    description:
      "Join Biodanza classes in Cardiff and South Wales with Caroline. Music, movement, and human connection — all abilities welcome. First class just £5.",
  },
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
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
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${cormorant.variable} w-full m-0 p-0 scroll-smooth`}
    >
      <body
        className={`antialiased  
      min-h-screen relative flex flex-col`}
      >
        <Header />

        <main className="flex-1">{children}</main>
        <ToTop />
        <Footer />
      </body>
    </html>
  );
}
