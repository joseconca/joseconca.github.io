import type { Metadata } from "next";
import ProjectsContent from "@/app/components/ProjectsContent";
import { textos } from "@/data/textos";

export const metadata: Metadata = {
  title: `${textos.es.proyectos.titulo} | Jose Conca`,
  description: textos.es.proyectos.descripcion,
  alternates: {
    canonical: "/proyectos/",
    languages: { es: "/proyectos/", en: "/en/proyectos/" },
  },
};

export default function ProjectsPage() {
  return <ProjectsContent idioma="es" />;
}
