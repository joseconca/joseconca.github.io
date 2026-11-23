"use client";

import { useSyncExternalStore } from "react";
import type { Idioma } from "@/data/textos";

type Tema = "dark" | "light";
const KEY = "jc-portfolio-theme";
const CHANGE_EVENT = "jc-portfolio-theme-change";

function getTema(): Tema {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== KEY) return;
    const next: Tema = event.newValue === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

/** El valor del servidor es estable para evitar diferencias de hidratación. */
function getServerTema(): Tema { return "dark"; }

export default function ThemeToggle({ idioma }: { idioma: Idioma }) {
  const tema = useSyncExternalStore(subscribe, getTema, getServerTema);
  const changeTheme = () => {
    const next: Tema = getTema() === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      // El botón sigue funcionando si el navegador bloquea el almacenamiento.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
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

    </button>
  );
}
