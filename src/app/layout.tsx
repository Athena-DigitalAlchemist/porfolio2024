import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Providers } from "./providers";
import "./globals.css";

const bebasNeue = localFont({
  src: './fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Athena Bikaki | Portfolio 2024",
  description: "Athena Bikaki's Portfolio",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/favicon-96x96.png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bebasNeue.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}