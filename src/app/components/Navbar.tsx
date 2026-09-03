"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { datosContacto } from "@/data/datosContacto";

const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/cv", label: "CV" },
];

export default function Navbar() {
  const pathname = usePathname();
  const rutaActual = pathname?.replace(/\/$/, "") || "/";

  return (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <Link href="/" className="font-bold text-lg text-white hover:text-blue-400 transition-colors">
        Jose Conca <span className="text-blue-500 font-normal text-sm">/ Dev</span>
      </Link>

      <div className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
        {enlaces.map((enlace) => {
          const estaActivo =
            enlace.href === "/"
              ? rutaActual === "/"
              : rutaActual === enlace.href || rutaActual.startsWith(`${enlace.href}/`);

          return (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
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
          className="bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-md font-semibold transition-colors text-xs sm:text-sm"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}