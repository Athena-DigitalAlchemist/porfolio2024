import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Providers } from "./providers";
import "./globals.css";

const bebasNeue = localFont({
  src: './fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas-neue',
});

const oswald = localFont({
  src: './fonts/Oswald-Regular.ttf',
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: "Athena Bikaki | Portfolio 2024 _ Digital Alchemist",
  description: "Creative spirit based on Earth! Digital Alchemist specializing in Web Development, UI/UX Design, and Digital Experiences.",
  keywords: ["Athena Bikaki", "Web Development", "UI/UX Design", "Creative Developer", "Digital Design"],
  authors: [{ name: "Athena Bikaki" }],
  creator: "Athena Bikaki",
  publisher: "Athena Bikaki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.athenabikaki.com",
    title: "Athena Bikaki | Portfolio 2024 _ Digital Alchemist",
    description: "Creative spirit based on Earth! Digital Alchemist specializing in Web Development, UI/UX Design, and Digital Experiences.",
    siteName: "Athena Bikaki Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Athena Bikaki Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena Bikaki | Portfolio 2024 _ Digital Alchemist",
    description: "Creative spirit based on Earth! Digital Alchemist specializing in Web Development, UI/UX Design, and Digital Experiences.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" }
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon/favicon.svg',
        type: 'image/svg+xml'
      }
    ]
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    'msapplication-TileImage': '/favicon/web-app-manifest-192x192.png',
    'msapplication-TileColor': '#000000',
    'preload': [
      '/fonts/BebasNeue-Regular.ttf',
      '/fonts/Oswald-Regular.ttf'
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${bebasNeue.variable} ${oswald.variable} font-bebas`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}