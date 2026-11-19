import Navbar from "@/app/components/Navbar";
import { getPortfolio } from "@/data/portfolio";
import { textos, type Idioma } from "@/data/textos";

export default function SiteFrame({ children, idioma }: { children: React.ReactNode; idioma: Idioma }) {
  const t = textos[idioma];
  const contact = getPortfolio(idioma).datosContacto;

  return (
    <>
      <Navbar />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {contact.nombre} · {contact.localizacion}</p>
        <p className="mt-2">{t.pie.descripcion}</p>
      </footer>
    </>
  );
}
