# Amanda Durango — Hybrid Fantasy RPG Portfolio (Fase 1 · DRP V4.1)

Portafolio profesional interactivo de **Amanda Durango** diseñado para dirección de arte, estudios de videojuegos, editoriales, agencias creativas y clientes.

Bajo el principio rector **«Immersive Shell, Editorial Core»**, el proyecto combina convenciones de interfaz de **JRPG clásico** y **dark fantasy moderno** como sistema de identidad y navegación, manteniendo una composición **editorial contemporánea** donde la obra, la jerarquía tipográfica y el acceso directo al portafolio y contacto tienen prioridad absoluta.

---

## 1. Requisitos del entorno y stack tecnológico

- **Node.js:** `v22.x` (verificado en entorno con `v22.23.2`)
- **Gestor de paquetes:** `npm` (`v10.9.8`) o `bun` (se incluyen tanto `package-lock.json` como `bun.lock` para reproducibilidad en GitHub y Codex)
- **Framework:** Next.js `15.4.9` (App Router)
- **UI Library:** React `19.2.1` (Server Components por defecto; Client Components delimitados a navegación activa y estado del carrusel)
- **Lenguaje:** TypeScript `5.9.3` (`strict: true`)
- **Estilos:** Tailwind CSS `4.1.11` (`@tailwindcss/postcss`) + variables CSS semánticas en `app/globals.css`
- **Iconografía:** `lucide-react`

---

## 2. Comandos reproducibles

Ejecutar desde la raíz del repositorio:

```bash
# 1. Instalar dependencias de forma limpia y reproducible
npm ci
# (Alternativa si se actualiza package.json: npm install)

# 2. Levantar el servidor de desarrollo local (http://localhost:3000)
npm run dev

# 3. Verificar tipos con TypeScript sin emitir archivos
npm run typecheck

# 4. Ejecutar el linter del proyecto (ESLint)
npm run lint

# 5. Compilar la aplicación para producción
npm run build

# 6. Iniciar el servidor de producción tras compilar
npm run start
```

---

## 3. Estado de vistas y rutas (Fase 1 · DRP V4.1)

| Ruta | Nombre confirmado (V4.1) | Estado en Fase 1 | Conexiones principales verificadas |
| :--- | :--- | :--- | :--- |
| `/` | **Intro Hybrid** | **Completa** (con placeholder proporcional `1280 × 540`) | `START PLAYING` → `/hall`<br>`QUICK BROWSE` → `/portfolio` |
| `/hall` | **Playing Hall** | **Completa** (ficha RPG izquierda, carrusel central dominante con 3 placeholders `1200 × 675`, 4 comandos derecha y diálogo inferior provisional) | `EXPLORE WORK` → `/portfolio`<br>`SELECT CLASS` → `/work-types`<br>`CHARACTER PROFILE` → `/about`<br>`START QUEST` → `/contact` |
| `/work-types` | **Select Your Type of Work** | **Provisional navegable** (presenta estructura wireframe de *The Art*, *The Story* y *The Concept*) | Enlaces hacia `/portfolio?specialty=art`, `story` y `concept` (filtrado activo reservado para Fase 2) |
| `/portfolio` | **The Art Portfolio** | **Provisional navegable** (estructura editorial mixta + documentación de las 6 familias de `Estilos wireframe.jpg`) | Acceso a 1 clic desde cabecera global, `QUICK BROWSE` y `EXPLORE WORK` |
| `/portfolio/[slug]` | **Project Detail** | **Contrato de ruta reservado** | Reservado para casos de estudio verificados en Fase 2 |
| `/about` | **About** | **Provisional navegable** (estructura de ficha profesional RPG sin datos biográficos inventados) | CTA directo → `/contact` |
| `/contact` | **Contact** | **Provisional navegable** (especificación de campos V4.1 sin envío simulado ni falsos mensajes de éxito) | Retorno directo a `/portfolio` y `/hall` |

---

## 4. Arquitectura del repositorio

```text
├── HYBRID_FANTASY_RPG_DRP.md      # Documento de Requisitos del Producto consolidado (V4.1)
├── HYBRID_FANTASY_RPG_MOCKUP.html # Mockup HTML navegable de referencia
├── wireframes/                    # Wireframes V4.1 (v41-1..4.png) y taxonomía digital (taxonomia-digital.svg)
├── app/
│   ├── globals.css                # Tokens CSS (:root), soporte reduced-motion y utilidades ornamentales
│   ├── layout.tsx                 # Layout compartido, tipografías, skip-link, GlobalNavigation y footer
│   ├── page.tsx                   # Vista completa: Intro Hybrid (/)
│   ├── not-found.tsx              # Página 404 integrada en el sistema visual
│   ├── hall/page.tsx              # Vista completa: Playing Hall (/hall)
│   ├── work-types/page.tsx        # Ruta provisional: Select Your Type of Work (/work-types)
│   ├── portfolio/page.tsx         # Ruta provisional: The Art Portfolio (/portfolio) + taxonomía de 6 familias
│   ├── portfolio/[slug]/page.tsx  # Contrato de ruta reservado: Project Detail (/portfolio/[slug])
│   ├── about/page.tsx             # Ruta provisional: About (/about)
│   └── contact/page.tsx           # Ruta provisional: Contact (/contact)
├── components/
│   ├── GlobalNavigation.tsx       # Navegación global semántica con acceso a 1 clic (Client Component ligero)
│   ├── OrnateFrame.tsx            # Marco ornamental dark fantasy con bordes dobles y diamantes
│   ├── RPGPanel.tsx               # Panel estructurado reutilizable
│   ├── SectionHeading.tsx         # Encabezado de sección editorial/RPG
│   ├── RPGCommandButton.tsx       # Enlace (<Link>) para rutas o botón (<button>) para acciones locales
│   ├── ArtworkPlaceholder.tsx     # Skeleton estático proporcional que identifica assets pendientes
│   ├── CharacterPortrait.tsx      # Retrato RPG (4:5) y placa de identidad de Amanda Durango
│   ├── CharacterStatus.tsx        # Barras decorativas HP/MP y lista provisional de Specs
│   ├── DialogueBox.tsx            # Ventana de diálogo en voz del personaje marcada como provisional
│   ├── ArtworkCarousel.tsx        # Carrusel manual accesible con teclado e indicador de posición (Client Component)
│   └── ProvisionalPageHeader.tsx  # Encabezado y matriz de estado para rutas provisionales de Fase 1
└── content/
    ├── types.ts                   # Modelos TypeScript de Fase 1
    ├── site-data.ts               # Contenido provisional centralizado, textos y rutas
    └── taxonomy-reference.ts      # Transcripción estructurada de las 6 familias y cruces de Estilos wireframe.jpg
```

---

## 5. Recursos y definiciones pendientes para Fase 2

1. **Arte y retratos reales:**
   - Ilustración hero de **Intro Hybrid** (`1280 × 540` o proporción definitiva).
   - Retrato RPG de **Amanda Durango** (`4:5`) para **Playing Hall** y **About**.
   - Obras destacadas para el carrusel de **Playing Hall** (`1200 × 675` / proporción original sin recortes).
   - Ilustraciones representativas y emblemas definitivos para **The Art**, **The Story** y **The Concept**.
2. **Catálogo y taxonomía:**
   - Fichas de proyectos verificados (título, rol, disciplinas, proceso, entregables y obras reales).
   - Confirmación editorial de las lecturas marcadas con asterisco en **Manual Art** (`Children’s*`, `Game*`, `Painting*`), alcance de `P.O.D.` vs `Clothing`, y mapeo definitivo de las 6 familias hacia *The Art*, *The Story* y *The Concept*.
3. **Copy editorial y funcional:**
   - Validación definitiva de la bajada profesional (`Concept Art, Comics, Illustration and Design`), copy final del diálogo de bienvenida, biografía verificada para **About**, dirección de correo público y servicio de envío real para **Contact**.

---

## 6. Comprobaciones ejecutadas

- `npm run typecheck` (`tsc --noEmit`): **OK** (0 errores de tipos).
- `npm run lint` (`eslint .`): **OK** (sin errores de sintaxis ni imports faltantes).
- `npm run build` (`next build`): **OK** (compilación limpia de todas las rutas estáticas y dinámicas).
- Verificación funcional y responsive a **360 px**, **768 px** y **1440 px**: controles visibles, cero desborde horizontal (`overflow-x`), foco de teclado visible (`:focus-visible`) y soporte para `prefers-reduced-motion`.
