import type { Metadata } from "next";
import TrajectoryContent from "@/app/components/TrajectoryContent";
import { textos } from "@/data/textos";

export const metadata: Metadata = {
  title: `${textos.es.trayectoria.titulo} | Jose Conca`,
  description: textos.es.trayectoria.descripcion,
  alternates: {
    canonical: "/trayectoria/",
    languages: { es: "/trayectoria/", en: "/en/trayectoria/" },
  },
};

export default function TrajectoryPage() {
  return <TrajectoryContent idioma="es" />;
}
