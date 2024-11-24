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
  title: "athena. | Creative Studio",
  description: "A one-person creative studio specializing in web design and branding",
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