"use client";

import { useState } from "react";
import { datosContacto } from "@/data/datosContacto";
import { skillStack } from "@/data/skillStack";
import { experienciaProfesional } from "@/data/experienciaProfesional";
import { formacionAcademica } from "@/data/formacionAcademica";
import { proyectos } from "@/data/proyectos";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(proyectos[0]?.id);

  const linkHover = "hover:underline hover:bg-[#bdc3c7] transition-colors";

  return (
    <main className="bg-[#cccccc] min-h-screen py-10 font-sans text-[#333] leading-relaxed">
      <div className="max-w-[1000px] mx-auto bg-white shadow-[1px_2px_8px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden">
        {/* Header */}
        <header className="flex flex-wrap items-center bg-[#2c3e50] text-[#ecf0f1] py-5 px-10">
          <img
            src="/avatar.jpg"
            alt={`Foto de ${datosContacto.nombre}`}
            className="w-[120px] h-[120px] rounded-full object-cover border-[3px] border-[#ecf0f1] mr-5"
          />
          <div className="mb-4 sm:mb-0">
            <h1 className="text-[2.5rem] font-bold mb-1 leading-tight">
              {datosContacto.nombre}
            </h1>
            <p className="text-[1.2rem]">{datosContacto.rol}</p>
          </div>
          <a
            href={datosContacto.curriculumPdf}
            download
            className="ml-auto px-5 py-2.5 bg-[#ecf0f1] text-[#2c3e50] rounded hover:bg-[#bdc3c7] transition-colors font-medium"
          >
            Descargar CV
          </a>
        </header>

        {/* Contacto, Tecnologías y Sobre mí */}
        <div className="flex flex-col md:flex-row border-b border-[#e0e0e0]">
          {/* Columna Izquierda */}
          <div className="flex flex-col md:w-1/2 md:border-r border-[#e0e0e0]">
            {/* Contacto */}
            <div className="px-[30px] py-[20px] border-b border-[#e0e0e0] hover:bg-[#f2f2f2] transition-colors">
              <h2 className="text-[1.8rem] font-bold mb-1.5 text-[#2c3e50]">
                Contacto
              </h2>
              <ul className="list-none space-y-1">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${datosContacto.email}`}
                    className={linkHover}
                  >
                    {datosContacto.email}
                  </a>
                </li>
                <li>
                  <strong>Localización:</strong> {datosContacto.localizacion}
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href={datosContacto.github}
                    target="_blank"
                    rel="noreferrer"
                    className={linkHover}
                  >
                    {datosContacto.github.replace("https://", "")}
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href={datosContacto.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={linkHover}
                  >
                    {datosContacto.linkedin.replace("https://", "")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Sobre Mí */}
            <div className="px-[30px] py-[20px] hover:bg-[#f2f2f2] transition-colors h-full">
              <h2 className="text-[1.8rem] font-bold mb-1.5 text-[#2c3e50]">
                Sobre mí
              </h2>
              {datosContacto.sobreMi.map((linea, index) => (
                <p key={index} className="mb-2">
                  {linea}
                </p>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div className="md:w-1/2 px-[30px] py-[20px] hover:bg-[#f2f2f2] transition-colors">
            <h2 className="text-[1.8rem] font-bold mb-1.5 text-[#2c3e50]">
              Tecnologías
            </h2>
            <ul className="list-none font-mono bg-[#40516a] text-[#ecf0f1] border-[3px] border-[#2c3e50] rounded-sm p-2.5 mb-2.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-shadow">
              <li className="mb-1">
                <strong>Lenguajes:</strong> {skillStack.lenguajes.join(", ")}
              </li>
              <li className="mb-1">
                <strong>Backend & DB:</strong> {skillStack.backend.join(", ")}
              </li>
              <li className="mb-1">
                <strong>Frontend:</strong> {skillStack.frontend.join(", ")}
              </li>
              <li className="mb-1">
                <strong>DevOps & Cloud:</strong> {skillStack.devopsCloud.join(", ")}
              </li>
              <li className="mb-1">
                <strong>Otros:</strong> {skillStack.otros.join(", ")}
              </li>
            </ul>
          </div>
        </div>

        {/* Experiencia Profesional */}
        <div className="px-[30px] py-[20px] border-b border-[#e0e0e0] hover:bg-[#f2f2f2] transition-colors">
          <h2 className="text-[1.8rem] font-bold mb-1.5 text-[#2c3e50]">
            Experiencia profesional
          </h2>

          {experienciaProfesional.map((exp) => (
            <article
              key={exp.id}
              className="mb-5 p-2 rounded hover:bg-[#eeeeee] hover:shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-all"
            >
              <div className="flex flex-wrap items-baseline gap-5 mb-1">
                <time className="font-bold">[{exp.periodo}]</time>
                <h3 className="text-[1.2rem] font-bold">
                  {exp.rol} en{" "}
                  <a
                    href={exp.urlEmpresa}
                    target="_blank"
                    rel="noreferrer"
                    className={linkHover}
                  >
                    {exp.empresa}
                  </a>
                </h3>
              </div>
              <h4 className="text-[1rem] text-[#555] mb-1.5">{exp.contexto}</h4>
              <ul className="list-none pl-4 w-[90%]">
                {exp.tareas.map((tarea, index) => (
                  <li key={index} className="mb-2.5">
                    <h3 className="text-[1.1rem] font-bold">{tarea.titulo}</h3>
                    <p>{tarea.descripcion}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Formación Académica */}
        <div className="px-[30px] py-[20px] border-b border-[#e0e0e0] hover:bg-[#f2f2f2] transition-colors">
          <h2 className="text-[1.8rem] font-bold mb-1.5 text-[#2c3e50]">
            Formación académica
          </h2>

          {formacionAcademica.map((edu) => (
            <article
              key={edu.id}
              className="mb-5 p-2 rounded hover:bg-[#eeeeee] hover:shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-all"
            >
              <div className="flex flex-wrap items-baseline gap-5 mb-1">
                <time className="font-bold">[{edu.periodo}]</time>
                <h3 className="text-[1.2rem] font-bold">{edu.institucion}</h3>
              </div>
              <h4 className="text-[1rem] text-[#555] mb-1.5">
                {edu.titulacion}
              </h4>
              <ul className="list-none pl-4 w-[90%]">
                {edu.detalles.map((detalle, index) => (
                  <li key={index} className="mb-2.5">
                    <p>{detalle}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Proyectos Github */}
        <div className="px-[30px] py-[20px] border-b border-[#e0e0e0] hover:bg-[#f2f2f2] transition-colors">
          <h2 className="text-[1.8rem] font-bold mb-1.5 text-[#2c3e50]">
            Proyectos
          </h2>

          <div className="flex flex-wrap border-b border-[#ccc] mb-5">
            {proyectos.map((proyecto) => (
              <button
                key={proyecto.id}
                onClick={() => setActiveTab(proyecto.id)}
                className={`px-5 py-2.5 bg-transparent cursor-pointer text-[1rem] hover:bg-[#ecf0f1] transition-colors ${
                  activeTab === proyecto.id
                    ? "border-b-[3px] border-[#2c3e50] font-bold"
                    : "border-none"
                }`}
              >
                {proyecto.titulo}
              </button>
            ))}
          </div>

          <div>
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className={
                  activeTab === proyecto.id ? "block animate-fade-in" : "hidden"
                }
              >
                <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
                <p className="mb-3">{proyecto.descripcion}</p>
                {proyecto.tecnologias && (
                  <p className="mb-4">
                    <strong>Tecnologías:</strong> {proyecto.tecnologias.join(", ")}
                  </p>
                )}
                {proyecto.url && (
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-5 py-2.5 bg-[#2c3e50] text-[#ecf0f1] rounded transition-colors hover:bg-[#40516a] mr-3"
                  >
                    Ver en GitHub
                  </a>
                )}
                {proyecto.urlDirecto && (
                  <a
                    href={proyecto.urlDirecto}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-5 py-2.5 bg-[#2c3e50] text-[#ecf0f1] rounded transition-colors hover:bg-[#40516a] mr-3"
                  >
                    Enlace directo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fecha última actualización */}
        <div className="px-[30px] py-[20px] hover:bg-[#f2f2f2] transition-colors">
          <p>
            <span className="font-bold text-sm text-[#2c3e50] float-right">
              09/2026
            </span>
          </p>
          <div className="clear-both"></div>
        </div>
      </div>
    </main>
  );
}
