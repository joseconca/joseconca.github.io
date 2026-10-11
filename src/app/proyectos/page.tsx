"use client";

import { useState, useMemo } from "react";
import { proyectos } from "@/data/proyectos";

export default function ProyectosPage() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  const todasLasTecnologias = useMemo(() => {
    const techs = new Set<string>();
    proyectos.forEach((proyecto) => {
      proyecto.tecnologias?.forEach((tech) => techs.add(tech));
    });
    return ["Todos", ...Array.from(techs).sort()];
  }, []);

  const proyectosFiltrados = useMemo(() => {
    const otrosProyectos = proyectos.filter((proyecto) => proyecto.id === "Otros-proyectos");
    const proyectosPrincipales = proyectos.filter((proyecto) => proyecto.id !== "Otros-proyectos");
    const coincidentes = filtroActivo === "Todos"
      ? proyectosPrincipales
      : proyectosPrincipales.filter((proyecto) => proyecto.tecnologias?.includes(filtroActivo));

    return [...coincidentes, ...otrosProyectos];
  }, [filtroActivo]);

  return (
    <div>
      <header className="page-header">
        <span className="eyebrow">Selección de trabajo</span>
        <h1 className="page-title">Proyectos</h1>
        <p className="page-intro">
          Aplicaciones web, APIs y proyectos personales donde exploro arquitectura, persistencia de datos,
          lógica de negocio y experiencia de usuario. Cada ficha enlaza al código fuente o a una demo cuando está disponible.
        </p>
      </header>

      <section aria-label="Filtrar proyectos por tecnología">
        <div className="filter-list">
          {todasLasTecnologias.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setFiltroActivo(tech)}
              className="filter-button"
              aria-pressed={filtroActivo === tech}
            >
              {tech}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-grid" aria-label="Listado de proyectos">
        {proyectosFiltrados.map((proyecto, index) => (
          <article key={proyecto.id} className="project-card">
            <div>
              <span className="project-index">PROYECTO / {String(index + 1).padStart(2, "0")}</span>
              <h2>{proyecto.titulo}</h2>
              <p>{proyecto.descripcion}</p>
            </div>

            <div className="project-footer">
              {proyecto.tecnologias?.length ? (
                <div className="tech-list">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              ) : null}

              <div className="project-links">
                {proyecto.url && (
                  <a href={proyecto.url} target="_blank" rel="noreferrer" className="project-link">
                    Código fuente <span aria-hidden="true">↗</span>
                  </a>
                )}
                {proyecto.urlDirecto && (
                  <a href={proyecto.urlDirecto} target="_blank" rel="noreferrer" className="project-link">
                    Ver demo <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
