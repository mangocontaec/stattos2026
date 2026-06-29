# STATTOOS SOCIETY — Resumen del Proyecto
**Actualizado:** 2026-06-29 · 18:52 (UTC-5)

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
| `style.css` | Todos los estilos (~3193 líneas) |
| `app.js` | Toda la lógica JavaScript (~710 líneas) |
| `LOGO-STATTOOS.png` | Logo original (se renderiza con `filter: brightness(0) invert(1)`) |
| `frank.jpg` | Foto del artista Franklin |
| `saris.jpg` | Foto de la artista Saris Toro |
| `ear_model_v2.glb` | Modelo 3D de la oreja para la sección de piercings |
| `tattoo/` | Carpeta con 8 imágenes del film strip de Inicio |
| `tattoo_sara_002/` | Carpeta con 23 imágenes del portafolio de Saris Toro |
| `convenciones_images/` | Posters oficiales de las ediciones del festival (2026, 2024, 2022) |

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
| `#artist-frank` | Perfil de Franklin (mural masonry, color, full width) |
| `#artist-saris` | Perfil de Saris Toro (mural masonry, color, full width) |
| `#piercings` | Infografía interactiva 3D con model-viewer |
| `#conventions` | Timeline interactivo y parallax de Ink The Garden City |
| `#booking` | Formulario de cita con mapa interactivo de hologramas |

---

## Componentes Implementados

### 1. Preloader — Three.js GLSL Shader ✅
- **Tecnología:** Three.js r89 + WebGL fragment shader.
- **Efecto:** Líneas procedurales animadas con tinte rojo dominante.
- **Bypass:** Si el hash de la URL al momento de la carga no es `#home` o está vacío, el preloader se oculta inmediatamente, evitando esperas innecesarias en páginas secundarias.

### 2. Header / Navbar — Glassmorphic ✅
- `backdrop-filter: blur(20px)`, fondo negro semitransparente con borde inferior rojo y botón "BOOK NOW" tipo píldora.
- Soporta menú hamburguesa en mobile con auto-cierre automático al hacer clic en cualquier enlace.

### 3. Hero Section (Home) ✅
- Video YouTube `EtTl2sXKKYA` de fondo con controles desactivados y reproducción automática en móviles.
- Overlay negro y gradiente rojo para una legibilidad premium.

### 4. Sección: CONOCE A NUESTROS ARTISTAS ✅
- Tarjetas interactivas con transición grayscale → color y efecto hover con sombra roja 3D.

### 5. Sección: TRABAJOS — Film Strip Infinito ✅
- Auto-scroll continuo con pausa en hover y soporte total de drag manual (mouse y touch inertia).

### 6. Fondo Unificado (Unified BG Zone) ✅
- Canvas único con haces de luz diagonales animados por IntersectionObserver.

### 7. Perfiles de Artistas Dinámicos (Franklin y Saris Toro) ✅
- Portafolios a pantalla completa sin márgenes anchos (3 columnas en desktop, 2 en tablet, 1 en mobile).
- Mantienen proporciones de imagen estables y cargan dinámicamente mediante arrays de imágenes y el visor lightbox global.

### 8. Perforaciones — Infografía 3D Interactiva ✅ (NUEVO)
- **Tecnología:** Google `<model-viewer>` + modelo GLB optimizado (`ear_model_v2.glb`).
- **Hotspots:** 9 puntos (Helix, Mid Helix, Flat, Rook, Forward Helix, Daith, Tragus, Conch, Lóbulo) con tooltips glassmorphism y detalles de sanación y joyería.
- **Física:** Rotación 3D sutil guiada por el cursor (mousemove) y rotación automática pausada al interactuar.

### 9. Convenciones — Timeline Inmersivo ✅ (NUEVO)
- **Hero:** Video YouTube de fondo (`mdHY0jWpDoI`), caja de texto glassmorphic y scroll indicator animado.
- **Timeline:** Ediciones 2026, 2024, 2022 representadas por posters verticales completos sin recortar (`object-fit: contain`).
- **Línea de Progreso:** Línea vertical central que crece proporcionalmente según el progreso del scroll del usuario.
- **Scroll Reveal:** Tarjetas con entrada sincronizada fade-in, scale y un sutil efecto parallax en las imágenes.

---

## Tareas Completadas (Historial)

- [x] Preloader Three.js GLSL con bypass automático en subpáginas.
- [x] Film Strip infinito con drag e inertia en Home.
- [x] Creación de página del perfil de Franklin (`#artist-frank`) con portafolio dinámico masonry.
- [x] Creación de la página Saris Toro (`#artist-saris`) duplicando el layout y portafolio dinámico de 23 imágenes.
- [x] Eliminación de "Rol: Piercer" en Saris Toro.
- [x] Configuración de portafolios a pantalla completa en 3/2/1 columnas para ambos artistas.
- [x] Corrección de comportamiento global de navegación: scroll-to-top forzado al recargar y navegar hashes.
- [x] Integración de model-viewer 3D interactivo en la página de piercings con 9 hotspots descriptivos.
- [x] Rediseño de Convenciones con timeline dinámico, posters verticales completos y video YouTube de fondo.
- [x] Eliminación de la sección redundante "JOIN THE CIRCLE" en Convenciones.
- [x] Limpieza del repositorio eliminando assets 3D/video temporales pesados y no utilizados.

---

## 🔄 Próximas Tareas

- [ ] **Footer — Rediseño Completo** (PRIORIDAD)
  - Col 1: Información de marca + copyright.
  - Col 2: Mapa del sitio interactivo.
  - Col 3: Iconos de redes sociales con efecto glassmorphism.
  - Col 4: Dirección del estudio + botón de Google Maps "CÓMO LLEGAR".
- [ ] Sección Testimonios / Reseñas de clientes.
- [ ] SEO meta tags + Open Graph.
- [ ] Ajustes finales de rendimiento mobile.

---

## Últimos Cambios (Changelog)

* **Rediseño de Convenciones e Integración de Video:** Se implementó un timeline de 3 ediciones con posters verticales completos, línea de progreso interactiva en scroll y video de fondo YouTube en loop (`mdHY0jWpDoI`) configurado desde el segundo 2.
* **Infografía 3D de Oreja en Piercings:** Se configuró el elemento de model-viewer con el asset optimizado `ear_model_v2.glb`, dotado de 9 hotspots interactivos con tooltips informativos de sanación y joyería.
* **Corrección de Carga y Navegación:** Se configuró `history.scrollRestoration = 'manual'` para forzar scroll-to-top global al recargar o cambiar de sección, y se implementó un bypass en `app.js` para saltar el preloader 3D si la ruta de entrada no es la Home.
* **Páginas de Artistas Optimizadas:** Se creó la ruta de Saris Toro con 23 imágenes y se actualizaron ambos perfiles de artistas para mostrar un portafolio de pantalla completa en cuadrícula de 3 columnas (desktop) / 2 columnas (tablet) / 1 columna (mobile).
* **Limpieza de Repositorio:** Se eliminaron los archivos grandes `conventions_bg.mp4` y `ear_model.glb` para optimizar el tamaño de la base del repositorio y evitar límites de subida de GitHub.
