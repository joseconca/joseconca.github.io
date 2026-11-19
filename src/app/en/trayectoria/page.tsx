import type { Metadata } from "next";
import TrajectoryContent from "@/app/components/TrajectoryContent";
import { textos } from "@/data/textos";

export const metadata: Metadata = {
  title: `${textos.en.trayectoria.titulo} | Jose Conca`,
  description: textos.en.trayectoria.descripcion,
  alternates: {
    canonical: "/en/trayectoria/",
    languages: { es: "/trayectoria/", en: "/en/trayectoria/" },
  },
};

export default function TrajectoryPage() {
  return <TrajectoryContent idioma="en" />;
}
