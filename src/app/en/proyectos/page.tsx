import type { Metadata } from "next";
import ProjectsContent from "@/app/components/ProjectsContent";
import { textos } from "@/data/textos";

export const metadata: Metadata = {
  title: `${textos.en.proyectos.titulo} | Jose Conca`,
  description: textos.en.proyectos.descripcion,
  alternates: {
    canonical: "/en/proyectos/",
    languages: { es: "/proyectos/", en: "/en/proyectos/" },
  },
};

export default function ProjectsPage() {
  return <ProjectsContent idioma="en" />;
}
