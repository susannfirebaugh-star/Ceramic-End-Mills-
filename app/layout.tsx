import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Fresas de Cerámica de Alta Velocidad para Acero Endurecido (HRC55–70) | QT TOOLS",
    template: "%s | QT TOOLS",
  },
  description:
    "Corte acero endurecido HRC60+ hasta 5 veces más rápido con fresas de cerámica QT TOOLS. Reduzca el tiempo de ciclo, mejore el acabado superficial y extienda la vida útil de la herramienta. Estudios de casos reales, datos de corte para H13, SKD11, D2, P20, S136 y más. Soporte técnico gratuito y cotizaciones en 24 horas.",
  keywords: [
    "fresas de cerámica",
    "fresa de cerámica",
    "fresado duro de alta velocidad",
    "acero HRC60",
    "mecanizado de acero endurecido",
    "mecanizado de moldes y matrices",
    "SKD11",
    "H13",
    "D2",
    "P20",
    "S136",
    "datos de corte",
    "vida útil de herramienta",
    "reducción tiempo de ciclo",
    "QT TOOLS",
  ],
  applicationName: "QT TOOLS",
  category: "Manufacturing",
  authors: [{ name: "QT TOOLS" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "QT TOOLS",
    title: "Fresas de Cerámica de Alta Velocidad para Acero Endurecido (HRC55–70)",
    description:
      "Corte 5 veces más rápido para acero endurecido HRC60+. Estudios de casos comprobados, parámetros de corte y soporte experto de QT TOOLS.",
    images: [
      {
        url: "https://i.ytimg.com/vi/FSgYrxPHL34/hqdefault.jpg",
        width: 1280,
        height: 720,
        alt: "Ceramic end mill cutting demonstration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresas de Cerámica de Alta Velocidad para Acero Endurecido (HRC55–70)",
    description:
      "Reduzca el tiempo de ciclo y mejore el acabado con fresas de cerámica QT TOOLS. Datos de corte y cotizaciones en 24 horas.",
    images: ["https://i.ytimg.com/vi/FSgYrxPHL34/hqdefault.jpg"],
  },
  alternates: {
    canonical: "/",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-625061154"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-625061154');
            `,
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QT TOOLS",
              url: "/",
              sameAs: ["https://www.linkedin.com/in/linda-jiang-674190199/"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "Linda@czqttools.com",
                  telephone: "+86 13915092693",
                  areaServed: "Worldwide",
                  availableLanguage: ["en", "zh"],
                },
              ],
              brand: { "@type": "Brand", name: "QT TOOLS" },
              offers: {
                "@type": "OfferCatalog",
                name: "Cutting tools",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Product", name: "Ceramic End Mills", category: "Cutting Tool" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Product", name: "Carbide End Mills", category: "Cutting Tool" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Product", name: "PCD Tools", category: "Cutting Tool" },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
