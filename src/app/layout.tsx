import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douglus - Creative Developer",
  description:
    "Backend engineer by trade, creative developer by passion. Based in Ho Chi Minh City.",
  keywords: [
    "backend developer",
    "creative developer",
    "GSAP",
    "portfolio",
    "Ho Chi Minh City",
  ],
  alternates: {
    canonical: "https://douglus.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Douglus",
    title: "Douglus — Creative Developer",
    description: "Backend engineer by trade, creative developer by passion.",
    url: "https://douglus.site",
    images: [
      {
        url: "https://douglus.site/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglus — Creative Developer",
    description: "Backend engineer by trade, creative developer by passion.",
    images: ["https://douglus.site/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link
          rel="modulepreload"
          crossOrigin="anonymous"
          href="/assets/vendor-other-0uWrHE1h.js"
        />
        <link
          rel="modulepreload"
          crossOrigin="anonymous"
          href="/assets/vendor-gsap-soFV617O.js"
        />
        <link
          rel="modulepreload"
          crossOrigin="anonymous"
          href="/assets/vendor-lenis-D74GLXXG.js"
        />
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="/assets/index-j1BCREBc.css"
        />
        <script
          type="module"
          crossOrigin="anonymous"
          src="/assets/index-DGJ9sR8m.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
