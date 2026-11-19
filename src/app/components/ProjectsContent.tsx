"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import { getPortfolio } from "@/data/portfolio";
import { textos, type Idioma } from "@/data/textos";

export default function ProjectsContent({ idioma }: { idioma: Idioma }) {
  const [filtroActivo, setFiltroActivo] = useState<string | null>(null);
  const { proyectos } = getPortfolio(idioma);
  const t = textos[idioma].proyectos;

  const tecnologias = useMemo(() => {
    const valores = new Set<string>();
    proyectos.forEach((proyecto) => proyecto.tecnologias?.forEach((tech) => valores.add(tech)));
    return Array.from(valores).sort();
  }, [proyectos]);

  const proyectosFiltrados = useMemo(() => {
    const otros = proyectos.filter((proyecto) => proyecto.id === "Otros-proyectos");
    const principales = proyectos.filter((proyecto) => proyecto.id !== "Otros-proyectos");
    const coincidentes = filtroActivo
      ? principales.filter((proyecto) => proyecto.tecnologias?.includes(filtroActivo))
      : principales;
    return [...coincidentes, ...otros];
  }, [proyectos, filtroActivo]);

  return (
    <div>
      <header className="page-header">
        <span className="eyebrow">{t.etiqueta}</span>
        <h1 className="page-title">{t.titulo}</h1>
        <p className="page-intro">{t.descripcion}</p>
      </header>
      <section aria-label={t.filtrar}>
        <div className="filter-list">
          <button type="button" onClick={() => setFiltroActivo(null)}
            className="filter-button" aria-pressed={filtroActivo === null}>
            {t.todos}
          </button>
          {tecnologias.map((tech) => (
            <button key={tech} type="button" onClick={() => setFiltroActivo(tech)}
              className="filter-button" aria-pressed={filtroActivo === tech}>
              {tech}
            </button>
          ))}
        </div>
      </section>
      <section className="projects-grid" aria-label={t.listado}>
        {proyectosFiltrados.map((proyecto, index) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} index={index} idioma={idioma} />
        ))}
      </section>
    </div>
  );
}
