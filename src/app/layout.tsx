import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { FloatingActions } from "@/components/layout/floating-actions";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StoreProvider } from "@/components/providers/store-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VPP Store | Moda feminina para dias reais",
    template: "%s | VPP Store",
  },
  description:
    "Moda feminina contemporânea com peças versáteis, compra simples e atendimento pelo WhatsApp.",
  applicationName: "VPP Store",
  keywords: [
    "moda feminina",
    "roupas femininas",
    "vestidos",
    "alfaiataria feminina",
    "VPP Store",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "VPP Store",
    title: "VPP Store | Moda feminina para dias reais",
    description:
      "Peças versáteis, conforto e compra simples com atendimento pelo WhatsApp.",
    images: [{ url: "/images/hero-vpp-store.png", width: 1024, height: 1536 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VPP Store",
    description: "Moda feminina para dias reais.",
    images: ["/images/hero-vpp-store.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FCFAF7",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <StoreProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingActions />
        </StoreProvider>
      </body>
    </html>
  );
}
