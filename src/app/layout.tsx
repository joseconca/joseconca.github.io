import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jose Conca | Backend y Full Stack Junior",
  description:
    "Portafolio de Jose Conca, desarrollador de software junior orientado a backend y full stack. Experiencia con C#/.NET, APIs REST, Python, bases de datos, pruebas y despliegue.",
  openGraph: {
    title: "Jose Conca | Desarrollador de software junior",
    description:
      "Proyectos y experiencia en backend, desarrollo full stack, APIs REST, pruebas e IA aplicada al desarrollo.",
    url: "https://joseconca.github.io",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="bg-slate-900 text-slate-100 min-h-screen flex flex-col font-sans">
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
          <Navbar />
        </header>
        <div className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </div>
        <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Jose Conca — Telde, Las Palmas</p>
        </footer>
      </body>
    </html>
  );
}
