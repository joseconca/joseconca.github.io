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
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Jose Conca · Telde, Las Palmas</p>
          <p className="mt-2">Desarrollo de software · Backend · Full Stack</p>
        </footer>
      </body>
    </html>
  );
}
