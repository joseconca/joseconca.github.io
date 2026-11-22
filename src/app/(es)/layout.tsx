import type { Metadata } from "next";
import SiteFrame from "@/app/components/SiteFrame";
import { themeInitScript } from "@/app/theme";
import { geistMono, geistSans } from "@/app/fonts";
import { textos } from "@/data/textos";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joseconca.github.io"),
  title: textos.es.meta.titulo,
  description: textos.es.meta.descripcion,
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en/" },
  },
  openGraph: {
    title: textos.es.meta.ogTitulo,
    description: textos.es.meta.descripcion,
    url: "https://joseconca.github.io/",
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans`}>
        <SiteFrame idioma="es">{children}</SiteFrame>
      </body>
    </html>
  );
}
