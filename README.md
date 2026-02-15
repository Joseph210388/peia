# PEIA

Sitio web del proyecto **PEIA** (Pedagogía extraescolar infantil artística), construido con [Next.js](https://nextjs.org).

## Sobre el proyecto

**PEIA** es un servicio dirigido a colegios para apoyar a niños y niñas de **2 a 6 años** con relaciones y necesidades especiales específicas, mediante el respeto mutuo y la pedagogía artística.

- **Eslogan:** *"PEIA ayuda y mejora tu vida y crianza"* — compromiso con la inclusión y el bienestar infantil, y un modelo de crianza más sensible, respetuoso y enriquecedor.
- **Audiencia:** Colegios (clientes) y familias; beneficiarios: niños y niñas en edad infantil.
- **Secciones del sitio (previstas):** Inicio · Nuestra Misión · Talleres de Trabajo · Blog · Contacto.

El proyecto es solo web (sin app nativa) y por ahora no utiliza backend propio. Idioma principal: **español**.

---

## Proceso de Desarrollo

- **(13/02/2025):** Documentación inicial del proyecto, estructura de carpetas y rutas (mission, workshops, blog, contact), componentes base (Header, utils, types), configuración inicial.
- **(14/02/2025):** Maquetado completo de la página de inicio (Header, Hero, Misión, Talleres Creativos, Historias de PEIA, Contacto, Footer). Paleta unificada (amarillo, peia-dark, blanco), tema claro fijo. Footer en layout raíz, botón WhatsApp global.
- **(15/02/2025):** Header responsive con menú hamburguesa. FAQ acordeón sustituye Historias de PEIA. Misión rediseñada (ilustración + cards responsive). Página Talleres con hero y 4 talleres colaborativos. Página Contacto con hero, FAQ y formulario completo. Email y teléfono unificados.

---

## Comenzar en local

Clona el repositorio, instala dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. Puedes editar la página en `app/page.tsx`; los cambios se reflejan al guardar.

Otros comandos:

- `npm run build` — genera la build de producción.
- `npm start` — sirve la aplicación ya compilada (tras `npm run build`).

Este proyecto usa [Next.js](https://nextjs.org) con [Tailwind CSS](https://tailwindcss.com) v4 y fuentes [Geist](https://vercel.com/font) (optimizadas con `next/font`).

---

## Desplegar

La forma más sencilla de desplegar esta app Next.js es usar [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Sube el repositorio a GitHub (o similar).
2. En [vercel.com](https://vercel.com), importa el proyecto y conecta el repo.
3. Vercel detectará Next.js y configurará build y despliegue automáticamente.

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para otras opciones (self-host, Docker, etc.).

---

## Más sobre Next.js

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tutorial Learn Next.js](https://nextjs.org/learn)
- [Repositorio de Next.js en GitHub](https://github.com/vercel/next.js)
