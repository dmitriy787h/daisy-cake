import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: 'Daisy Cake — конструктор тортов на заказ',
  description: 'Создай свой уникальный торт онлайн в Daisy Cake!',
  icons: {
    icon: '/favicon.png',
    apple: [
      { url: '/images/logo/logo.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  keywords: "торты на заказ, конструктор тортов, доставка тортов, кондитерская, Сочи",
  authors: [{ name: "Daisy Cake" }],
  creator: "Daisy Cake",
  publisher: "Daisy Cake",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://daisy-cake.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Daisy Cake - Конструктор тортов на заказ",
    description: "Создайте свой идеальный торт с помощью нашего конструктора. Широкий выбор размеров, вкусов, декора и упаковки.",
    url: 'https://daisy-cake.ru',
    siteName: 'Daisy Cake',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daisy Cake - Конструктор тортов',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Daisy Cake - Конструктор тортов на заказ",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Daisy Cake",
    "description": "Конструктор тортов на заказ в Сочи",
    "url": "https://daisy-cake.ru",
    "telephone": "+7-938-405-25-90",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Пластунская, д. 151/5",
      "addressLocality": "Сочи",
      "addressCountry": "RU"
    },
    "openingHours": "Mo-Fr 10:00-19:00,Sa 10:00-17:00",
    "priceRange": "$$",
    "servesCuisine": "Кондитерские изделия",
    "sameAs": [
      "https://www.instagram.com/daisy.cake.sochi",
      "https://t.me/daisy_cake_sochi"
    ]
  };

  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
