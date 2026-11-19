import { datosContacto as contactoEs } from "./datosContacto";
import { experienciaProfesional as experienciaEs } from "./experienciaProfesional";
import { formacionAcademica as formacionEs } from "./formacionAcademica";
import { proyectos as proyectosEs } from "./proyectos";
import { skillStack as skillsEs } from "./skillStack";
import { datosContacto as contactoEn } from "./en/datosContacto";
import { experienciaProfesional as experienciaEn } from "./en/experienciaProfesional";
import { formacionAcademica as formacionEn } from "./en/formacionAcademica";
import { proyectos as proyectosEn } from "./en/proyectos";
import { skillStack as skillsEn } from "./en/skillStack";
import type { Idioma } from "./textos";

export type Proyecto = {
  id: string;
  titulo: string;
  descripcion: string;
  tecnologias?: string[];
  url?: string;
  urlDirecto?: string;
};

type DatosContacto = {
  nombre: string; rol: string; email: string; localizacion: string;
  webCv: string; github: string; linkedin: string;
  perfilProfesional: string;
  otrosDatos: { etiqueta: string; valor: string }[];
  curriculumPdf: string;
};

type Experiencia = {
  id: string; fechaInicio: string; fechaFin: string; rol: string;
  empresa: string; urlEmpresa?: string; contexto: string;
  tareas: { titulo: string; detalles: string[] }[];
};

type Formacion = {
  id: string; periodo: string; institucion: string; titulacion: string;
  detalles: string[];
};

type Competencia = { descripcion: string; tecnologias: string[] };

export type DatosPortfolio = {
  datosContacto: DatosContacto;
  experienciaProfesional: Experiencia[];
  formacionAcademica: Formacion[];
  proyectos: Proyecto[];
  skillStack: Record<string, Competencia>;
};

const datosPorIdioma: Record<Idioma, DatosPortfolio> = {
  es: { datosContacto: contactoEs, experienciaProfesional: experienciaEs,
    formacionAcademica: formacionEs, proyectos: proyectosEs, skillStack: skillsEs },
  en: { datosContacto: contactoEn, experienciaProfesional: experienciaEn,
    formacionAcademica: formacionEn, proyectos: proyectosEn, skillStack: skillsEn }
};

export function getPortfolio(idioma: Idioma): DatosPortfolio {
  return datosPorIdioma[idioma];
}

/** Conserva la sección actual al cambiar de idioma. */
export function rutaIdioma(idioma: Idioma, ruta: "/" | "/proyectos" | "/trayectoria"): string {
  return (idioma === "en" ? "/en" : "") + (ruta === "/" ? "/" : ruta);
}
