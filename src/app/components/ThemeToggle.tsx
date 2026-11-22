"use client";

import { useEffect, useState } from "react";
import type { Idioma } from "@/data/textos";

type Tema = "dark" | "light";
const KEY = "jc-portfolio-theme";

export default function ThemeToggle({ idioma }: { idioma: Idioma }) {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    const current: Tema = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTema(current);

    const sync = (event: StorageEvent) => {
      if (event.key !== KEY) return;
      const next: Tema = event.newValue === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      document.documentElement.style.colorScheme = next;
      setTema(next);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const changeTheme = () => {
    const next: Tema = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try { window.localStorage.setItem(KEY, next); } catch { /* La navegación sigue funcionando sin almacenamiento. */ }
    setTema(next);
  };

  const label = idioma === "es"
    ? (tema === "light" ? "Activar modo carbón" : "Activar modo papel marfil")
    : (tema === "light" ? "Switch to charcoal mode" : "Switch to ivory paper mode");

  return (
    <button type="button" className="theme-toggle" onClick={changeTheme}
      aria-label={label} title={label} aria-pressed={tema === "light"}>
      <svg className="theme-toggle-moon" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20.7 15.7A9 9 0 0 1 8.3 3.3 9 9 0 1 0 20.7 15.7Z" />
      </svg>
      <svg className="theme-toggle-sun" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
      <span>{idioma === "es" ? "Tema" : "Theme"}</span>
    </button>
  );
}
