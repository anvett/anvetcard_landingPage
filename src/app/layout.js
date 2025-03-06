import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Metadata configurada con optimización de SEO
export const metadata = {
  title: "AnvetCard - Tarjetas de Presentación Digitales",
  description:
    "Descubre AnvetCard, la solución moderna para tarjetas de presentación digitales. Ideal para profesionales y empresas.",
  keywords:
    "AnvetCard, tarjetas de presentación digitales, tarjetas virtuales, networking, tarjetas ecológicas",
  authors: [{ name: "AnvetCorp" }],
  robots: "index, follow",

  openGraph: {
    title: "AnvetCard - Tarjetas de Presentación Digitales",
    description:
      "AnvetCard ofrece tarjetas de presentación digitales personalizables para un networking eficiente y ecológico.",
    url: "https://www.anvetcard.com",
    images: [
      {
        url: "https://www.anvetcard.com/assets/images/sharedimage.jpg",
        alt: "AnvetCard Logo",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnvetCard - Tarjetas de Presentación Digitales",
    description:
      "AnvetCard: la forma inteligente y ecológica de compartir tu información de contacto.",
    images: ["/assets/images/logo.jpg"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

// Exportación para viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-light">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
