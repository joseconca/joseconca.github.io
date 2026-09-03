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

El proyecto está configurado como una exportación estática. El workflow de `.github/workflows/deploy-pages.yml` ejecuta `npm run build` y publica la carpeta `out/` automáticamente después de cada push a `main`.

En la configuración del repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como origen. La web estará disponible en [https://joseconca.github.io](https://joseconca.github.io).

## Estructura principal

- `src/app/`: páginas y layout de la aplicación.
- `src/data/`: información del perfil, experiencia, formación, proyectos y tecnologías.
- `public/`: imágenes y recursos públicos.
- `next.config.ts`: configuración de la exportación estática.
