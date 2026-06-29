/* ==========================================================================
   STATTOOS SOCIETY — Main Application Script
   Single Page Application Router, UI interactions, Animations, Globe
   ========================================================================== */

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    initShaderPreloader();
    initRouter();
    initMobileMenu();
    initScrollEffects();
    initSovereigntyFilters();
    initGalleryCarousel();
    initGalleryLightbox();
    initInteractiveForms();
    initCtaParticles();
    initUnifiedBackground();
});

/* ==========================================================================
   1. SPA ROUTER
   ========================================================================== */
function initRouter() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    function navigate() {
        let hash = window.location.hash || '#home';
        if (hash.endsWith('/')) hash = hash.slice(0, -1);
        const pageName = hash.replace('#', '');

        let navPage = pageName;
        if (pageName === 'artist-profile' || pageName === 'artist-frank' || pageName === 'artist-saris') navPage = 'artists';

        // Show/hide sections
        sections.forEach(sec => {
            sec.classList.remove('active');
            if (sec.id === pageName) sec.classList.add('active');
        });

        // Update active nav link
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === navPage) item.classList.add('active');
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Trigger page-specific logic
        if (pageName === 'booking') {
            setTimeout(() => initBookingGlobe(), 300);
        } else if (pageName === 'artist-frank') {
            initFranklinPortfolio();
        } else if (pageName === 'artist-saris') {
            initSarisPortfolio();
        }
    }

    window.addEventListener('hashchange', navigate);
    navigate();
}

const FRANKLIN_IMAGES = [
    '658955318_27020283830906649_5090289939039690665_n.jpg',
    '673679131_27284668601134836_5800676656137250742_n.jpg',
    '673962307_27284668577801505_1704395994635659186_n.jpg',
    '674085888_27284668437801519_5840378755391095688_n.jpg',
    '674196641_27284668341134862_6073177844151814818_n.jpg',
    '678988292_27375250502076645_2096502396638677993_n.jpg',
    '723228908_18580349938062266_7524056536623623397_n.jpg',
    '731339033_28113706961564325_41816633548126_n.jpg'
];

const SARIS_IMAGES = [
    'WhatsApp Image 2026-06-29 at 17.27.37 (1).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.37 (2).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.37 (3).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.37.jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.38 (1).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.38 (2).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.38 (3).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.38 (4).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.38.jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.39 (1).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.39 (2).jpeg',
    'WhatsApp Image 2026-06-29 at 17.27.39.jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.15.jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.16 (1).jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.16 (2).jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.16.jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.17 (1).jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.17 (2).jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.17.jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.21.jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.22 (1).jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.22.jpeg',
    'WhatsApp Image 2026-06-29 at 17.32.23.jpeg'
];

function initSarisPortfolio() {
    const grid = document.getElementById('saris-portfolio-grid');
    if (!grid || grid.children.length > 0) return; // avoid duplicate load

    SARIS_IMAGES.forEach(imgName => {
        const item = document.createElement('div');
        item.className = 'profile-portfolio-item saris-portfolio-item';
        
        const img = document.createElement('img');
        img.src = 'tattoo_sara_002/' + imgName;
        img.alt = 'Tattoo Work Saris Toro';
        img.loading = 'lazy';
        img.style.cursor = 'pointer';
        
        item.appendChild(img);
        grid.appendChild(item);
    });
}

function initFranklinPortfolio() {
    const grid = document.getElementById('frank-portfolio-grid');
    if (!grid || grid.children.length > 0) return; // avoid duplicate load

    FRANKLIN_IMAGES.forEach(imgName => {
        const item = document.createElement('div');
        item.className = 'profile-portfolio-item frank-portfolio-item';
        
        const img = document.createElement('img');
        img.src = 'tattoo/' + imgName;
        img.alt = 'Tattoo Work Franklin';
        img.loading = 'lazy';
        img.style.cursor = 'pointer';
        
        item.appendChild(img);
        grid.appendChild(item);
    });
}

/* ==========================================================================
   2. SHADER INTRO PRELOADER — Three.js GLSL Shader (Red Tint)
   ========================================================================== */
function initShaderPreloader() {
    const preloader = document.getElementById('intro-preloader');
    const container  = document.getElementById('shader-container');
    if (!preloader || !container) return;

    // Check route and skip preloader if not on Home/main page
    const hash = window.location.hash;
    if (hash && hash !== '#home' && hash !== '#') {
        preloader.style.display = 'none';
        return;
    }

    // Three.js is already loaded via CDN in <head>
    // Fallback to canvas if THREE not available
    if (typeof THREE === 'undefined') {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 800);
        }, 2800);
        return;
    }

    // ── Three.js setup ──────────────────────────────────────────────────────
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene    = new THREE.Scene();
    const geometry = new THREE.PlaneBufferGeometry(2, 2);

    const uniforms = {
        time:       { type: 'f',  value: 1.0 },
        resolution: { type: 'v2', value: new THREE.Vector2() }
    };

    // ── Vertex shader ────────────────────────────────────────────────────────
    const vertexShader = `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `;

    // ── Fragment shader — procedural lines with red tint ────────────────────
    // Original channels were BGR; we remap to boost R, suppress G/B
    const fragmentShader = `
        precision highp float;
        uniform vec2  resolution;
        uniform float time;

        float random(in float x) {
            return fract(sin(x) * 1e4);
        }
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        void main(void) {
            vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy)
                      / min(resolution.x, resolution.y);

            // Mosaic pixelation
            vec2 fMosaicScal = vec2(4.0, 2.0);
            vec2 vScreenSize = vec2(256.0, 256.0);
            uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x)
                         / (vScreenSize.x / fMosaicScal.x);
            uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y)
                         / (vScreenSize.y / fMosaicScal.y);

            float t = time * 0.06 + random(uv.x) * 0.4;
            float lineWidth = 0.0008;

            // Build 3 raw channels
            vec3 color = vec3(0.0);
            for (int j = 0; j < 3; j++) {
                for (int i = 0; i < 5; i++) {
                    color[j] += lineWidth * float(i * i)
                        / abs(fract(t - 0.01 * float(j)
                              + float(i) * 0.01) * 1.0 - length(uv));
                }
            }

            // RED TINT: amplify red channel, crush green/blue
            // Original mapping was BGR → RGB (color[2],color[1],color[0])
            // We keep that base but weight heavily toward red (#E50914)
            float r = clamp(color[2] * 2.5 + color[1] * 0.3,  0.0, 1.0);
            float g = clamp(color[1] * 0.12,                   0.0, 1.0);
            float b = clamp(color[0] * 0.05,                   0.0, 1.0);

            gl_FragColor = vec4(r, g, b, 1.0);
        }
    `;

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const mesh     = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    function onResize() {
        const rect = container.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        uniforms.resolution.value.x = renderer.domElement.width;
        uniforms.resolution.value.y = renderer.domElement.height;
    }
    onResize();
    window.addEventListener('resize', onResize);

    let animId = null;
    function animate() {
        animId = requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
    }
    animate();

    // ── Fade out after 2.8 s ─────────────────────────────────────────────────
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            cancelAnimationFrame(animId);
            renderer.dispose();
            preloader.style.display = 'none';
            window.removeEventListener('resize', onResize);
        }, 800);
    }, 2800);
}

/* ==========================================================================
   3. MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener('click', () => {
        const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isOpen);
        navMenu.classList.toggle('active', !isOpen);
        toggleBtn.classList.toggle('active', !isOpen);
    });

    // Close on nav item click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            toggleBtn.classList.remove('active');
        });
    });
}

/* ==========================================================================
   4. SCROLL EFFECTS (Header shrink)
   ========================================================================== */
function initScrollEffects() {
    const header = document.getElementById('site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ==========================================================================
   5. SOVEREIGNTY / PIERCINGS FILTER
   ========================================================================== */
function initSovereigntyFilters() {
    const filterBtns = document.querySelectorAll('.sovereignty-filter-btn');
    const cards = document.querySelectorAll('.sovereignty-card');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const show = filter === 'all' || card.dataset.cat === filter;
                card.style.display = show ? '' : 'none';
                card.style.opacity = show ? '1' : '0';
            });
        });
    });
}
/* ==========================================================================
   6. FILM STRIP — Infinite auto-scroll + drag
   ========================================================================== */
function initGalleryCarousel() {
    const wrapper = document.getElementById('film-strip-wrapper');
    const track   = document.getElementById('film-strip-track');
    if (!wrapper || !track) return;

    // Wait for layout so we can measure half-width (Set A = 8 items)
    requestAnimationFrame(() => {
        const items     = track.querySelectorAll('.film-strip-item');
        const halfCount = items.length / 2;   // 8 (half of 16 cloned)

        if (items.length < 2) return;

        // Calculate exact setWidth using the distance from the 1st item to the 1st cloned item (9th item)
        let setWidth = items[halfCount].offsetLeft - items[0].offsetLeft;

        // Fallback calculations if offsetLeft is zero during initial load
        if (setWidth <= 0) {
            setWidth = 0;
            for (let i = 0; i < halfCount; i++) {
                setWidth += items[i].offsetWidth + 36; // 36 is the new gap
            }
        }

        // ── State ──────────────────────────────────────────────────────────
        let offset    = 0;       // current translateX (negative = scrolled right)
        let speed     = 0.6;     // px per frame (auto-scroll)
        let isDragging = false;
        let dragStartX = 0;
        let dragOffsetStart = 0;
        let velocity   = 0;
        let lastX      = 0;
        let raf        = null;

        function applyTransform() {
            track.style.transform = `translateX(${-offset}px)`;
        }

        // Circular 3D Perspective Curve Effect
        function applyCurvedPerspective() {
            const width = window.innerWidth;
            if (width <= 640) {
                // Mobile: No curvature, reset transforms so they are flat
                items.forEach(item => {
                    item.style.transform = '';
                });
                return;
            }

            const wrapperRect = wrapper.getBoundingClientRect();
            const centerX = wrapperRect.width / 2;

            // Curve factor adjusts depth. Tablet gets a softer angle.
            const curveFactor = width <= 1024 ? 0.45 : 1.0; 

            items.forEach(item => {
                // If user is hovering the card, let CSS transitions take over
                if (item.matches(':hover')) return;

                const itemRect = item.getBoundingClientRect();
                const itemCenterX = itemRect.left - wrapperRect.left + (itemRect.width / 2);
                
                // Distance from center of the screen
                const distFromCenter = itemCenterX - centerX;
                const normalizedDist = distFromCenter / centerX; // Range approx [-1.2, 1.2]

                // Calculate 3D values based on horizontal screen position
                // Center cards are scaled up (1.0), edge cards scale down (approx 0.88)
                const scale = 1 - Math.pow(Math.abs(normalizedDist), 2) * 0.08 * curveFactor;
                
                // Rotate cards inwards towards the viewer to form a subtle circle (concave curvature)
                const rotateY = normalizedDist * -14 * curveFactor;
                
                // Push edge cards slightly back in 3D space
                const translateZ = Math.pow(Math.abs(normalizedDist), 2) * -70 * curveFactor;

                // Apply premium transforms using hardware acceleration
                item.style.transform = `scale(${scale}) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
            });
        }

        function loop() {
            // Si el slider está oculto o no existe en el DOM, pausar cálculos para evitar NaNs y bloqueos de renderizado
            if (!wrapper || wrapper.offsetWidth === 0) {
                raf = requestAnimationFrame(loop);
                return;
            }

            if (!isDragging) {
                // Apply inertia decay from drag release
                if (Math.abs(velocity) > 0.05) {
                    offset  += velocity;
                    velocity *= 0.94;   // friction
                } else {
                    velocity = 0;
                    offset  += speed;   // auto-scroll
                }
            }

            // Infinite loop: when we've scrolled one full set, jump back
            if (offset >= setWidth) offset -= setWidth;
            if (offset < 0)         offset += setWidth;

            applyTransform();
            applyCurvedPerspective();
            raf = requestAnimationFrame(loop);
        }

        loop();

        // Recalculate on resize
        window.addEventListener('resize', () => {
            if (items[halfCount] && items[0]) {
                const newWidth = items[halfCount].offsetLeft - items[0].offsetLeft;
                if (newWidth > 0) {
                    setWidth = newWidth;
                }
            }
        });

        // ── Mouse drag ────────────────────────────────────────────────────
        wrapper.addEventListener('mousedown', e => {
            isDragging     = true;
            dragStartX     = e.clientX;
            dragOffsetStart = offset;
            velocity       = 0;
            lastX          = e.clientX;
            wrapper.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', e => {
            if (!isDragging) return;
            const delta = dragStartX - e.clientX;
            offset = dragOffsetStart + delta;
            velocity = lastX - e.clientX;   // for inertia on release
            lastX = e.clientX;
        });

        window.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            wrapper.style.cursor = 'grab';
        });

        // ── Touch drag ────────────────────────────────────────────────────
        wrapper.addEventListener('touchstart', e => {
            isDragging      = true;
            dragStartX      = e.touches[0].clientX;
            dragOffsetStart = offset;
            velocity        = 0;
            lastX           = e.touches[0].clientX;
        }, { passive: true });

        wrapper.addEventListener('touchmove', e => {
            if (!isDragging) return;
            const delta = dragStartX - e.touches[0].clientX;
            offset  = dragOffsetStart + delta;
            velocity = lastX - e.touches[0].clientX;
            lastX   = e.touches[0].clientX;
        }, { passive: true });

        wrapper.addEventListener('touchend', () => {
            isDragging = false;
        });

        // ── Pause auto-scroll on hover (not during drag) ──────────────────
        wrapper.addEventListener('mouseenter', () => { if (!isDragging) speed = 0; });
        wrapper.addEventListener('mouseleave', () => { speed = 0.6; });
    });
}
function initGalleryLightbox() {
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    if (!lightbox) return;

    // Event delegation to capture clicks on static and dynamically generated images
    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target && target.tagName === 'IMG') {
            const isGalleryImg = target.closest('.film-strip-item') || 
                                 target.closest('.frank-portfolio-item') ||
                                 target.closest('.saris-portfolio-item') ||
                                 target.classList.contains('timeline-main-img');
            if (isGalleryImg) {
                lightboxImg.src = target.src;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

/* ==========================================================================
   8. INTERACTIVE FORMS
   ========================================================================== */
function initInteractiveForms() {
    const piercingForm = document.getElementById('piercing-consultation-form');
    const piercingSuccess = document.getElementById('p-form-success');

    if (piercingForm && piercingSuccess) {
        piercingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            piercingForm.style.display = 'none';
            piercingSuccess.style.display = 'block';
        });
    }
}

/* ==========================================================================
   9. CTA SECTION PARTICLES (canvas animation)
   ========================================================================== */
function initCtaParticles() {
    const ctaCanvas = document.getElementById('cta-particles-canvas');
    if (!ctaCanvas) return;

    const ctx = ctaCanvas.getContext('2d');
    let particles = [];
    let mouse = { x: -9999, y: -9999 };

    function resize() {
        ctaCanvas.width = ctaCanvas.offsetWidth;
        ctaCanvas.height = ctaCanvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    ctaCanvas.addEventListener('mousemove', e => {
        const rect = ctaCanvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    ctaCanvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * ctaCanvas.width,
            y: Math.random() * ctaCanvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 2 + 0.5,
            color: Math.random() > 0.7 ? 'rgba(229,9,20,0.6)' : 'rgba(80,80,80,0.5)'
        });
    }

    function animate() {
        ctx.clearRect(0, 0, ctaCanvas.width, ctaCanvas.height);
        particles.forEach(p => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                p.x -= (dx / dist) * 1.5;
                p.y -= (dy / dist) * 1.5;
            }
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = ctaCanvas.width;
            if (p.x > ctaCanvas.width) p.x = 0;
            if (p.y < 0) p.y = ctaCanvas.height;
            if (p.y > ctaCanvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        // Draw connections
        particles.forEach((p, i) => {
            particles.slice(i + 1).forEach(q => {
                const d = Math.hypot(p.x - q.x, p.y - q.y);
                if (d < 80) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(229,9,20,${0.15 * (1 - d / 80)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   10. UNIFIED BACKGROUND CANVAS (Artists & Gallery sections)
   ========================================================================== */
function initUnifiedBackground() {
    const canvases = document.querySelectorAll('.unified-bg-canvas');
    canvases.forEach(canvas => drawSketchBackground(canvas));
}

function drawSketchBackground(canvas) {
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
        console.warn("WebGL2 not supported, falling back to empty canvas");
        return;
    }

    const vertexShaderSource = `#version 300 es
    precision highp float;
    in vec4 position;
    void main() {
        gl_Position = position;
    }`;

    const fragmentShaderSource = `#version 300 es
    precision highp float;
    out vec4 O;
    uniform float time;
    uniform vec2 resolution;
    uniform vec3 u_color;

    #define FC gl_FragCoord.xy
    #define R resolution
    #define T (time+660.)

    float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
    float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

    void main(){
      vec2 uv=(FC-.5*R)/R.y;
      vec3 col=vec3(1);
      uv.x+=.25;
      uv*=vec2(2,1);

      float n=fbm(uv*.28-vec2(T*.01,0));
      n=noise(uv*3.+n*2.);

      col.r-=fbm(uv+vec2(0,T*.015)+n);
      col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
      col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

      // KEY CHANGE: Mix with our custom u_color (tinting red)
      col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));

      col=mix(vec3(.08),col,min(time*.1,1.));
      col=clamp(col,.08,1.);
      O=vec4(col,1);
    }`;

    // --- WebGL Setup ---
    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;

    // Compile VS
    gl.shaderSource(vs, vertexShaderSource);
    gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error("VS error:", gl.getShaderInfoLog(vs));
        return;
    }

    // Compile FS
    gl.shaderSource(fs, fragmentShaderSource);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        console.error("FS error:", gl.getShaderInfoLog(fs));
        return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program));
        return;
    }

    const vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "resolution");
    const uTime = gl.getUniformLocation(program, "time");
    const uColor = gl.getUniformLocation(program, "u_color");

    // Color: #E50914 -> RGB ratios
    const r = 229 / 255;
    const g = 9 / 255;
    const b = 20 / 255;

    function resize() {
        const dpr = Math.max(1, window.devicePixelRatio);
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    let animationFrameId;
    function draw(now) {
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);

        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uTime, now * 1e-3);
        gl.uniform3f(uColor, r, g, b); // Send RED color to the shader

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        animationFrameId = requestAnimationFrame(draw);
    }
    draw(0);

    // Store references on canvas object for cleanup if needed
    canvas._cleanupWebGL = () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resize);
        gl.detachShader(program, vs);
        gl.detachShader(program, fs);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteProgram(program);
        gl.deleteBuffer(buffer);
    };
}

/* ==========================================================================
   11. PORTFOLIO MODAL (Artists Page)
   ========================================================================== */
window.openPortfolioModal = function(artist) {
    const modal = document.getElementById('portfolio-modal');
    const grid = document.getElementById('portfolio-masonry-grid');
    grid.innerHTML = '';

    let images = [];
    if (artist === 'frankliin') {
        images = [
            '658955318_27020283830906649_5090289939039690665_n.jpg',
            '673679131_27284668601134836_5800676656137250742_n.jpg',
            '673962307_27284668577801505_1704395994635659186_n.jpg',
            '674085888_27284668437801519_5840378755391095688_n.jpg',
            '674196641_27284668341134862_6073177844151814818_n.jpg',
            '678988292_27375250502076645_2096502396638677993_n.jpg',
            '723228908_18580349938062266_7524056536623623397_n.jpg',
            '731339033_28113706961564325_41816633548126_n.jpg'
        ].map(img => encodeURI('tattoo/' + img));
    } else if (artist === 'saris') {
        images = [
            '[image] - 1376879.jpg',
            '[image] - 1411273.jpg',
            '[image] - 2304893.jpg',
            '[image] - 3879351.jpg',
            '[image] - 420940.jpg',
            '[image] - 5377126.jpg',
            '[image] - 6083530.jpg',
            '[image] - 7360171.jpg',
            '[image] - 8032438.jpg'
        ].map(img => encodeURI('tattoo_sara/' + img));
    }

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.loading = 'lazy';
        img.onerror = () => img.style.display = 'none';
        grid.appendChild(img);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

window.closePortfolioModal = function() {
    const modal = document.getElementById('portfolio-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closePortfolioModal();
});

/* ==========================================================================
   12. BOOKING — HOLOGRAPHIC GLOBE (Globe.gl)
   ========================================================================== */
let globeInstance = null;
let bookingAnimated = false;

function initBookingGlobe() {
    if (bookingAnimated) return;
    bookingAnimated = true;

    const container = document.getElementById('globe-canvas');
    if (!container) return;

    // If Globe.gl not available, fall back to Google Maps reveal
    if (typeof Globe === 'undefined') {
        console.warn('Globe.gl not loaded. Falling back to maps reveal.');
        revealGoogleMaps();
        return;
    }

    const isMobile = window.innerWidth <= 768;
    const globeSize = isMobile ? Math.min(window.innerWidth * 0.9, 400) : 700;

    container.style.width = globeSize + 'px';
    container.style.height = globeSize + 'px';

    // Ambato, Ecuador coordinates
    const LAT = -1.24;
    const LNG = -78.63;

    const globe = Globe()(container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .atmosphereColor('rgba(229, 9, 20, 0.3)')
        .atmosphereAltitude(0.2)
        .backgroundColor('rgba(0,0,0,0)')
        .pointsData([{ lat: LAT, lng: LNG, size: 0.5, color: '#E50914', label: 'STATTOOS SOCIETY' }])
        .pointLat('lat')
        .pointLng('lng')
        .pointColor('color')
        .pointAltitude('size')
        .pointRadius(0.8)
        .pointsMerge(false)
        .arcsData([{
            startLat: 0, startLng: 0,
            endLat: LAT, endLng: LNG,
            color: ['rgba(229,9,20,0.1)', 'rgba(229,9,20,0.9)']
        }])
        .arcColor('color')
        .arcAltitude(0.3)
        .arcStroke(1.5)
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(3000);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1.5;
    globe.controls().enableZoom = false;

    globeInstance = globe;

    // Animate initial appearance with GSAP if available
    const hologramEl = document.getElementById('hologram-container');
    const leftPanel = document.querySelector('.booking-left-panel');
    const mapCard = document.querySelector('.glass-map-card');

    if (hologramEl) {
        hologramEl.style.opacity = '0';
        hologramEl.style.transform = 'scale(1.2)';
        hologramEl.style.transition = 'opacity 1s ease, transform 1.5s ease';
        setTimeout(() => {
            hologramEl.style.opacity = '1';
            hologramEl.style.transform = 'scale(1)';
        }, 100);
    }

    // After 2s, zoom to Ecuador
    setTimeout(() => {
        globe.pointOfView({ lat: LAT, lng: LNG, altitude: 1.5 }, 2500);

        // After zoom completes, show the pin and shrink globe into card
        setTimeout(() => {
            const pin = document.getElementById('target-pin');
            if (pin) {
                pin.style.opacity = '1';
                pin.style.transform = 'scale(1)';
                pin.style.transition = 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)';
            }

            // Shrink and move globe into right panel card
            setTimeout(() => {
                if (hologramEl) {
                    hologramEl.style.position = 'static';
                    hologramEl.style.width = '100%';
                    hologramEl.style.height = '100%';
                    hologramEl.style.transform = 'none';
                    container.style.width = '100%';
                    container.style.height = '100%';
                    container.style.transition = 'all 0.8s ease';

                    // Move hologram into the map placeholder
                    const placeholder = document.querySelector('.map-target-placeholder');
                    if (placeholder) {
                        placeholder.style.position = 'relative';
                        placeholder.style.overflow = 'hidden';
                        placeholder.appendChild(hologramEl);
                    }

                    globe.controls().autoRotateSpeed = 0.6;
                }

                // Show map card
                if (mapCard) {
                    mapCard.style.opacity = '1';
                    mapCard.style.transition = 'opacity 0.8s ease';
                }

                // After globe is settled, reveal Google Maps over it
                setTimeout(() => {
                    revealGoogleMaps();
                }, 2000);

                // Fade in left panel
                if (leftPanel) {
                    leftPanel.style.opacity = '1';
                    leftPanel.style.transform = 'translateX(0)';
                    leftPanel.style.transition = 'all 0.8s ease';
                }
            }, 1500);
        }, 2500);
    }, 2000);
}

function revealGoogleMaps() {
    const iframe = document.getElementById('google-maps-iframe');
    const mapCard = document.querySelector('.glass-map-card');

    if (iframe) {
        iframe.style.pointerEvents = 'all';
        iframe.style.opacity = '1';
        iframe.style.transition = 'opacity 1s ease';
    }
    if (mapCard) {
        mapCard.style.opacity = '1';
        mapCard.style.transition = 'opacity 0.8s ease';
    }

    // Also show left panel content
    const leftPanel = document.querySelector('.booking-left-panel');
    if (leftPanel) {
        leftPanel.style.opacity = '1';
        leftPanel.style.transform = 'translateX(0)';
        leftPanel.style.transition = 'all 0.8s ease';
    }
}

// If page loads directly on #booking, trigger globe
if (window.location.hash === '#booking') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initBookingGlobe, 800);
    });
}

// Bind Franklin's card on Home page dynamically to #artist-frank
document.addEventListener('DOMContentLoaded', () => {
    const frankCard = document.querySelector('.masters-grid .master-card');
    if (frankCard) {
        frankCard.setAttribute('onclick', "window.location.hash = '#artist-frank'");
    }
});

