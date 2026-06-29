# STATTOOS SOCIETY — Resumen del Proyecto (28 de Junio de 2026)
Este documento sirve como punto de restauración de contexto rápido y eficiente para optimizar el uso de tokens.

---

## 📁 Estado General
- **URL Local:** `http://localhost:8080`
- **Ruta de Trabajo:** `d:\MANGO FILMS 2026\STATTOOS\WEBSITE\stitch_stattoos_society_digital_studio\`

---

## 🛠️ Arquitectura de Archivos

| Archivo | Función |
|---|---|
| `index.html` | Estructura principal del sitio SPA. |
| `style.css` | Estilos y tokens globales del sitio. |
| `app.js` | Lógica JS (carrusel 3D, preloader, lightbox, etc.). |
| `cta.js` | Componente de CTA de WhatsApp con partículas. |
| `footer.js` | Componente del pie de página (reutilizable). |

---

## 💎 Identidad Visual
- **Rojo Principal:** `#E50914` (tinte RGB para WebGL: `229/255, 9/255, 20/255`)
- **Fondo:** `#000000` (negro absoluto)
- **Tipografía Display:** Anybody, Cormorant Garamond
- **Tipografía Cuerpo:** Hanken Grotesk, Inter

---

## 🚀 Componentes y Funcionalidades Clave

### 1. Preloader (Three.js WebGL + GLSL Shader)
- **Visual:** Inicia en negro sólido de inmediato con el logo en pantalla. El shader de WebGL hace un fade-in suave de `0.5s` (con delay de `0.1s`) dibujando líneas curvas en movimiento con tinte rojo y un efecto CRT/mosaico de pixelación (`fMosaicScal = vec2(4.0, 2.0)`).
- **Timing:** A los `2.8s` el contenedor completo del preloader hace fade-out suave de `0.8s` hacia la página y se remueve del DOM para liberar memoria de GPU.
- **JS:** `initShaderPreloader()` en `app.js`.

### 2. Film Strip Futurista (Efecto Curvo 3D / Apple Vision Pro)
- **Aesthetic:** Fondo 100% transparente. Desvanecido transparente real a la izquierda y derecha mediante CSS mask-image (`mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)`).
- **Glassmorphism Cards:** Tarjetas con bordes redondeados (`18px`), borde delgado semi-transparente (`rgba(255,255,255,0.12)`), fondo cristalino suave (`rgba(255,255,255,0.02)`), filtro `backdrop-filter: blur(8px)` y sombras de ambiente flotantes.
- **Curvatura Circular:** Las tarjetas calculan su coordenada X relativa al centro del viewport durante la animación. Las del centro se ven planas (`scale(1.0)`) y las laterales rotan en Y hacia adentro (hasta `-14deg` / `14deg`) y se alejan en profundidad en el eje Z (hasta `-70px`).
- **Autoplay & Drag:** Desplazamiento automático fluido continuo. Drag con ratón y touch con inercia de caída libre. Pausa el autoplay automáticamente en `:hover` y lo reanuda al quitar el cursor.
- **Hover:** Brillo incrementado (`1.08`), escala interactiva de 1.05, elevación Z (`translateZ(30px)`), brillo rojo en borde, y un destello de luz diagonal que barre la tarjeta.
- **JS:** `initGalleryCarousel()` en `app.js`.

### 3. Background Unificado (Spooky Smoke WebGL2)
- **Rango:** Desde que termina el video de cabecera hasta el final de la página (Contact / Footer).
- **Shader:** Smoke procedural animado renderizado nativamente en WebGL2, tintado en el rojo oficial de la marca (`#E50914`) mediante el uniform `u_color` enviado a la GPU en cada frame.
- **JS:** `drawSketchBackground(canvas)` en `app.js`.

### 4. Lightbox de Galería
- Abre las imágenes del film-strip en pantalla completa al hacerles clic.
- **Selector:** `.film-strip-item img, .timeline-main-img`.

---

## 🔄 Tareas en Curso y Pendientes

- [ ] **Footer — Rediseño Completo** (Pendiente)
  - Columna 1: Texto de presentación ("Estudio con +20 años...") + copyright.
  - Columna 2: Mapa del sitio (Inicio, Artistas, Trabajos, Perforaciones, Agenda).
  - Columna 3: Redes sociales glass (Instagram y Facebook oficiales).
  - Columna 4: Ubicación "Ambato, Ecuador" + botón glass "CÓMO LLEGAR".
- [ ] Implementar sección de testimonios.
- [ ] Optimización de meta tags de SEO y Open Graph.
- [ ] Revisión final del autoplay del video en dispositivos iOS/Safari.
