# joseconca.github.io

Portafolio profesional de Jose Conca, desarrollado con [Next.js](https://nextjs.org).

## Desarrollo local

Instala las dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

Para generar la versión estática de producción:

```bash
npm run build
```

El resultado se genera en la carpeta `out/`.

## Despliegue en GitHub Pages

El proyecto está configurado como una exportación estática. El workflow de `.github/workflows/deploy-pages.yml` regenera el CV, ejecuta `npm run build` y publica la carpeta `out/` automáticamente después de cada push a `main`.

En la configuración del repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como origen. La web estará disponible en [https://joseconca.github.io](https://joseconca.github.io).

## Estructura principal

- `src/app/`: páginas y layout de la aplicación.
- `src/data/`: información del perfil, experiencia, formación, proyectos y tecnologías.
- `public/`: imágenes y recursos públicos.
- `next.config.ts`: configuración de la exportación estática.

## Currículum automático

La web y el CV obtienen la información de los mismos módulos de `src/data/`:

- `datosContacto.ts`: nombre, rol, perfil profesional, contacto y otros datos del CV.
- `experienciaProfesional.ts`: puestos, periodos y tareas.
- `formacionAcademica.ts`: formación académica.
- `skillStack.ts`: competencias y tecnologías.
- `proyectos.ts`: los primeros tres proyectos que tengan tecnologías se incluyen en el CV.

Después de editar estos archivos, haz push a `main`. GitHub Actions ejecuta
`scripts/generate_cv.py` antes de compilar la web: así regenera el PDF y publica
el sitio con el enlace «Descargar CV» actualizado. No hace falta editar el PDF.

Para generarlo en local, con Node.js y Python instalados:

```bash
npm ci
python -m pip install reportlab
npm run cv:generate
```

El PDF se crea en la ruta indicada por `datosContacto.curriculumPdf` dentro de `public/`.

## Español e inglés

El portafolio está disponible en español (`/`, `/proyectos`, `/trayectoria`)
y en inglés (`/en/`, `/en/proyectos/`, `/en/trayectoria/`). El selector ES/EN
de la cabecera conserva la sección al cambiar de idioma.

Los contenidos de cada versión se modifican en `src/data/`:

- Español: los cinco módulos en `src/data/` (contacto, experiencia, formación, proyectos, tecnologías).
- Inglés: los cinco módulos equivalentes en `src/data/en/`.
- Textos de interfaz, botones, encabezados y etiquetas del CV: `src/data/textos.ts`.

GitHub Actions genera `CV_Jose_Conca_ES.pdf` y `CV_Jose_Conca_EN.pdf`
antes de compilar la web. Los botones de descarga enlazan a la versión del idioma activo.
Por compatibilidad se sigue generando `CV_Jose_Conca.pdf` como copia del español.

Para generarlos en local: `npm ci`, `python -m pip install reportlab` y `npm run cv:generate`.

### Teléfono exclusivo del CV

El teléfono se edita **una sola vez** en `src/data/contactoCv.ts`.
El exportador lo utiliza en ambos PDF, pero los componentes de la web no lo muestran.
**Atención:** aunque no aparezca en las páginas HTML, el número es público en el
repositorio GitHub y en los PDF descargables.
