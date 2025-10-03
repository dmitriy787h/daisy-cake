import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "BB Cake - Конструктор тортов на заказ",
  description: "Создайте свой идеальный торт с помощью нашего конструктора. Широкий выбор размеров, вкусов, декора и упаковки. Доставка по Москве.",
  keywords: "торты на заказ, конструктор тортов, доставка тортов, кондитерская, Москва",
  authors: [{ name: "BB Cake" }],
  creator: "BB Cake",
  publisher: "BB Cake",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bb-cake.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BB Cake - Конструктор тортов на заказ",
    description: "Создайте свой идеальный торт с помощью нашего конструктора. Широкий выбор размеров, вкусов, декора и упаковки.",
    url: 'https://bb-cake.ru',
    siteName: 'BB Cake',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BB Cake - Конструктор тортов',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BB Cake - Конструктор тортов на заказ",
    description: "Создайте свой идеальный торт с помощью нашего конструктора.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
