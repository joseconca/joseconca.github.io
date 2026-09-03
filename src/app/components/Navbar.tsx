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
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-16 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
      <Link href="/" className="shrink-0 whitespace-nowrap font-bold text-lg text-white hover:text-blue-400 transition-colors">
        Jose Conca <span className="text-blue-500 font-normal text-sm">/ Dev</span>
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-sm font-medium">
        {enlaces.map((enlace) => {
          const estaActivo =
            enlace.href === "/"
              ? rutaActual === "/"
              : rutaActual === enlace.href || rutaActual.startsWith(`${enlace.href}/`);

          return (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={`px-2 py-1.5 rounded-md transition-colors ${
                estaActivo
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/40"
                  : "text-slate-300 hover:text-blue-400"
              }`}
              aria-current={estaActivo ? "page" : undefined}
            >
              {enlace.label}
            </Link>
          );
        })}
        <a
          href={datosContacto.curriculumPdf}
          download
          className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md font-semibold transition-colors text-xs sm:text-sm"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}