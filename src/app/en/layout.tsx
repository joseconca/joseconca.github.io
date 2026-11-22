import type { Metadata } from "next";
import SiteFrame from "@/app/components/SiteFrame";
import { themeInitScript } from "@/app/theme";
import { geistMono, geistSans } from "@/app/fonts";
import { textos } from "@/data/textos";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joseconca.github.io"),
  title: textos.en.meta.titulo,
  description: textos.en.meta.descripcion,
  alternates: {
    canonical: "/en/",
    languages: { es: "/", en: "/en/" },
  },
  openGraph: {
    title: textos.en.meta.ogTitulo,
    description: textos.en.meta.descripcion,
    url: "https://joseconca.github.io/en/",
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans`}>
        <SiteFrame idioma="en">{children}</SiteFrame>
      </body>
    </html>
  );
}
