"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { datosContacto } from "@/data/datosContacto";

const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/trayectoria", label: "Trayectoria" },
];

export default function Navbar() {
  const pathname = usePathname();
  const rutaActual = pathname?.replace(/\/$/, "") || "/";

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="site-brand" aria-label="Jose Conca, inicio">
          <span className="site-brand-mark" aria-hidden="true">JC</span>
          <span>Jose Conca <span className="text-slate-500 font-normal">/ Software</span></span>
        </Link>

        <div className="site-nav-links">
          {enlaces.map((enlace) => {
            const estaActivo =
              enlace.href === "/"
                ? rutaActual === "/"
                : rutaActual === enlace.href || rutaActual.startsWith(`${enlace.href}/`);

            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className="site-nav-link"
                aria-current={estaActivo ? "page" : undefined}
              >
                {enlace.label}
              </Link>
            );
          })}
          <a href={datosContacto.curriculumPdf} download className="site-nav-cta">
            Descargar CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
