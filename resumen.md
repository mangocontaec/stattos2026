# STATTOOS SOCIETY — Resumen del Proyecto
**Actualizado:** 2026-06-28 · 21:47 (UTC-5)

---

## Estado General
✅ Proyecto completamente funcional corriendo en `http://localhost:8080` (Iniciar localmente ejecutando `node server.js`).
📁 Ruta Local: `d:\MANGO FILMS 2026\STATTOOS\WEBSITE\stitch_stattoos_society_digital_studio\`
🐙 Repositorio GitHub: `https://github.com/mangocontaec/stattos2026`
🌐 Cloudflare Ready: Listo para conectar el repositorio con Cloudflare Pages.

---

## Archivos Principales

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura HTML completa del sitio (SPA) |
| `style.css` | Todos los estilos (~3038 líneas) |
| `app.js` | Toda la lógica JavaScript (~692 líneas) |
| `LOGO-STATTOOS.png` | Logo original (se renderiza con `filter: brightness(0) invert(1)`) |
| `frank.jpg` | Foto del artista Frankliin |
| `saris.jpg` | Foto de la artista Saris Toro |
| `../TATTOO/` | Carpeta con 8 imágenes para el film strip (ruta relativa desde el sitio) |

### Imágenes del Film Strip (`D:\MANGO FILMS 2026\STATTOOS\WEBSITE\TATTOO\`)
1. `658955318_27020283830906649_5090289939039690665_n.jpg`
2. `673679131_27284668601134836_5800676656137250742_n.jpg`
3. `673962307_27284668577801505_1704395994635659186_n.jpg`
4. `674085888_27284668437801519_5840378755391095688_n.jpg`
5. `674196641_27284668341134862_6073177844151814818_n.jpg`
6. `678988292_27375250502076645_2096502396638677993_n.jpg`
7. `723228908_18580349938062266_7524056536623623397_n.jpg`
8. `731339033_28113706961564325_41816633548126_n.jpg`

---

## Identidad Visual

| Elemento | Valor |
|---|---|
| Color rojo principal | `#E50914` |
| Color rojo hover | `#FF1F2D` |
| Color rojo oscuro | `#8B0000` |
| Fondo principal | `#000000` |
| Texto principal | `#FFFFFF` |
| Tipografía display | Anybody / Cormorant Garamond |
| Tipografía cuerpo | Hanken Grotesk |

---

## Secciones del Sitio (SPA hash routing)

| Hash | Sección |
|---|---|
| `#home` | Página principal (hero + artistas + film strip + CTA) |
| `#artists` | Grid filtrable de artistas |
| `#artist-profile` | Perfil detallado de artista base (Elara Vance) |
| `#artist-frank` | Perfil detallado del artista Franklin (mural masonry a color) |
| `#piercings` | Galería de perforaciones |
| `#conventions` | Timeline de convenciones |
| `#booking` | Formulario de cita |

---

## Componentes Implementados

### 1. Preloader — Three.js GLSL Shader ✅ (NUEVO)
- **Tecnología:** Three.js r89 (CDN ya en `<head>`) + WebGL fragment shader
- **Efecto:** Líneas procedurales animadas con tinte rojo dominante
- **Shader:** `r = color[2]*2.5 + color[1]*0.3`, `g = color[1]*0.12`, `b = color[0]*0.05`
- **Timing:** Negro sólido + logo inmediato → shader fade-in a 0.5s (delay 0.1s) → fade-out completo a los 2.8s → cleanup Three.js
- **CSS clave:** `#intro-preloader { opacity:1 }` / `#shader-container { opacity:0; animation: shader-fadein 0.5s ease 0.1s forwards }`
- **Función JS:** `initShaderPreloader()` en `app.js` línea ~62

### 2. Header / Navbar — Glassmorphism ✅
- `backdrop-filter: blur(20px)`, fondo negro semitransparente
- Borde inferior rojo sutil, botón "BOOK NOW" rojo pill
- Menú hamburguesa mobile con SVG animado

### 3. Hero Section ✅
- Video YouTube `EtTl2sXKKYA` como fondo (iframe escalado)
- Overlay negro + gradiente rojo sutil
- Texto: "MAKING FRIENDS / NO CLIENTS" (NO en rojo)

### 4. Sección: CONOCE A NUESTROS ARTISTAS ✅
- 2 tarjetas cinematográficas (Frankliin, Saris Toro)
- Hover: grayscale → color, escala, sombra roja
- Botón "VER PORTAFOLIO" con animación slide

### 5. Sección: TRABAJOS — Film Strip Infinito ✅ (NUEVO - reemplazó carrusel 3D)
- **HTML:** `#film-strip-wrapper` → `#film-strip-track` → 16 `.film-strip-item` (8 + 8 clonadas)
- **Auto-scroll:** `speed = 0.6px/frame` via `requestAnimationFrame`
- **Loop infinito:** cuando `offset >= setWidth` (ancho de un set) → `offset -= setWidth`
- **Drag mouse:** mousedown/mousemove/mouseup en `window`. Inertia: `velocity *= 0.94`
- **Drag touch:** touchstart/touchmove/touchend con `{ passive: true }`
- **Pausa en hover:** `speed = 0` al entrar, `speed = 0.6` al salir
- **CSS:** bordes rojos tipo carrete, fade lateral con `::before/::after` gradientes, `cursor: grab`
- **Función JS:** `initGalleryCarousel()` (mismo nombre, nueva lógica) en `app.js` línea ~242

### 6. Sección: AGENDA TU CITA (CTA Premium) ✅
- Tarjeta glassmorphism + canvas interactivo de partículas
- Botón WhatsApp: `https://wa.link/k4isuj`

### 7. Background Unificado ✅
- `.unified-bg-zone` cubre Artistas + Galería + CTA
- Canvas único con haces de luz roja diagonal (10 beams desktop, 5 mobile)
- Glow radial central respirante, activado por IntersectionObserver

### 8. Footer ✅ (estructura básica — rediseño PENDIENTE)
- 4 columnas: Brand, Society, Connect, The Studio

---

## Funciones JavaScript en `app.js`

| Función | Línea aprox. | Descripción |
|---|---|---|
| `initShaderPreloader()` | ~62 | Preloader Three.js GLSL con tinte rojo |
| `initRouter()` | ~200 | SPA hash-based routing |
| `initMobileMenu()` | ~215 | Hamburger menu |
| `initScrollEffects()` | ~225 | Header shrink en scroll |
| `initSovereigntyFilters()` | ~235 | Filtros de artistas |
| `initGalleryCarousel()` | ~242 | Film strip infinito + drag |
| `initGalleryLightbox()` | ~360 | Lightbox de imágenes |
| `initInteractiveForms()` | ~380 | Formulario booking |
| `initCtaParticles()` | ~420 | Partículas interactivas CTA |
| `initUnifiedBackground()` | ~500 | Canvas haces rojos unificado |

---

## CSS — Secciones Clave en `style.css`

| Línea aprox. | Sección |
|---|---|
| ~80 | Preloader styles (`#intro-preloader`, `#shader-container`, `@keyframes shader-fadein`) |
| ~135 | Utilidades globales |
| ~809 | Gallery section + unified-bg-zone |
| ~867 | Film strip CSS (`.film-strip-wrapper`, `.film-strip-track`, `.film-strip-item`) |
| ~960 | Lightbox overlay |

---

## Tareas Completadas (Historial)

- [x] Preloader con animación Three.js GLSL + tinte rojo + fade-in suave
- [x] Fade-in: negro sólido inmediato, solo shader canvas hace transición
- [x] Film Strip infinito con drag (reemplazó carrusel 3D)
- [x] Background animado unificado (haces rojos diagonales)
- [x] CTA glassmorphism con canvas partículas
- [x] Spacing responsive con `clamp()`
- [x] Creación de página del perfil de Franklin (#artist-frank) con portafolio dinámico a todo color y masonry estilo mural
- [x] Corrección de rutas de imágenes (Film Strip) para producción en Cloudflare
- [x] Habilitación y corrección de reproducción automática del video Hero en navegadores móviles
- [x] Corrección del menú de navegación móvil (apertura, navegación y auto-cierre)

---

## 🔄 Próximas Tareas

- [ ] **Footer — Rediseño Completo** (PRIORIDAD)
  - Col 1: "Estudio con +20 años de experiencia..." + © 2024 STATTOOS SOCIETY
  - Col 2: Mapa del sitio (Inicio, Artistas, Trabajos, Perforaciones, Agenda)
  - Col 3: Redes sociales glass (Instagram: https://www.instagram.com/stattoos593/ / Facebook: https://www.facebook.com/stattoos593)
  - Col 4: Ubicación "Babacos y Guaytambos, Ambato, Ecuador" + botón "CÓMO LLEGAR" → https://maps.app.goo.gl/BeNCpcNQctP7bwMeA
- [ ] Sección Testimonios / Reseñas
- [ ] SEO meta tags + Open Graph
- [ ] Performance en mobile real

---

## Últimos Cambios (Changelog)

* **Corrección de Menú de Navegación Móvil:** Se alineó el JavaScript con el archivo de estilos CSS al cambiar el toggling de la clase `mobile-open` a `active` sobre `#nav-menu`, permitiendo que el menú se abra y se auto-cierre al tocar cualquier enlace.
* **Autoplay de Video Hero en Móviles:** Se eliminó la regla CSS (`display: none`) que ocultaba el iframe en pantallas pequeñas y se añadieron los atributos y parámetros de reproducción en línea (`playsinline=1` en URL, y atributos HTML como `playsinline`, `webkit-playsinline`, `autoplay`, `muted`, `loop`, `preload="auto"`) al iframe del video Hero de YouTube.
* **Corrección de Rutas de Imágenes:** Se corrigió la ruta de las imágenes del Film Strip de la página de Inicio, reemplazando `../TATTOO/` por la ruta local correcta del proyecto `tattoo/` para garantizar su carga en Cloudflare Pages.
* **Creación de Repositorio en GitHub:** Proyecto subido y alojado en la dirección `https://github.com/mangocontaec/stattos2026` para conexión automática con el hosting.
