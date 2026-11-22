"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPortfolio, rutaIdioma } from "@/data/portfolio";
import ThemeToggle from "@/app/components/ThemeToggle";
import { textos, type Idioma } from "@/data/textos";

const secciones = [
  { ruta: "/" as const, key: "inicio" as const },
  { ruta: "/proyectos" as const, key: "proyectos" as const },
  { ruta: "/trayectoria" as const, key: "trayectoria" as const },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const idioma: Idioma = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const t = textos[idioma].navegacion;
  const contact = getPortfolio(idioma).datosContacto;
  const rutaSinIdioma = pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") || "/";
  const seccionActual = secciones.find((seccion) =>
    seccion.ruta === "/" ? rutaSinIdioma === "/" :
      rutaSinIdioma === seccion.ruta || rutaSinIdioma.startsWith(seccion.ruta + "/")
  )?.ruta || "/";

  return (
    <nav className="site-nav" aria-label={idioma === "es" ? "Navegación principal" : "Main navigation"}>
      <div className="site-nav-inner">
        <Link href={rutaIdioma(idioma, "/")} className="site-brand" aria-label={t.inicioAccesible}>
          <span className="site-brand-mark" aria-hidden="true">JC</span>
          <span>Jose Conca <span className="brand-suffix">/ Software</span></span>
        </Link>
        <div className="site-nav-links">
          {secciones.map(({ ruta, key }) => (
            <Link key={ruta} href={rutaIdioma(idioma, ruta)}
              className="site-nav-link" aria-current={seccionActual === ruta ? "page" : undefined}>
              {t[key]}
            </Link>
          ))}
          <ThemeToggle idioma={idioma} />
          <div className="language-switch" role="group" aria-label={t.selectorIdioma}>
            {(["es", "en"] as const).map((opcion) => (
              <Link key={opcion} href={rutaIdioma(opcion, seccionActual)}
                hrefLang={opcion} lang={opcion} className="language-option"
                aria-current={idioma === opcion ? "true" : undefined}
                aria-label={opcion === "es" ? "Español" : "English"}>
                {opcion.toUpperCase()}
              </Link>
            ))}
          </div>
          <a href={contact.curriculumPdf} download className="site-nav-cta">
            {t.descargaCv} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
