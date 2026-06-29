/**
 * footer.js — Componente Footer Compartido
 * Inyecta el footer en todas las páginas del sitio.
 * Para usarlo en cualquier página: <div id="site-footer"></div> + <script src="footer.js"></script>
 */
(function () {
    const FOOTER_HTML = /* html */`
    <footer class="site-footer">
        <!-- Top border accent -->
        <div class="footer-top-line" aria-hidden="true"></div>

        <div class="container">
            <div class="footer-grid">

                <!-- ── Col 1: Brand ── -->
                <div class="footer-col footer-col--brand">
                    <div class="footer-logo-wrap">
                        <img src="LOGO-STATTOOS.png" alt="STATTOOS SOCIETY" class="footer-logo-img">
                    </div>
                    <p class="footer-brand-desc">
                        Estudio de tatuajes y perforaciones con más de 20 años de experiencia.
                        Durante este trayecto han pasado por Stattoos artistas de alto nivel,
                        tanto nacionales como internacionales.
                    </p>
                    <p class="footer-copy">© 2024 STATTOOS SOCIETY.</p>
                </div>

                <!-- ── Col 2: Mapa del Sitio ── -->
                <div class="footer-col">
                    <h4 class="footer-col-title">MAPA DEL SITIO</h4>
                    <ul class="footer-links">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#artists">Artistas</a></li>
                        <li><a href="#gallery">Trabajos</a></li>
                        <li><a href="#piercings">Perforaciones</a></li>
                        <li><a href="#booking">Agenda</a></li>
                    </ul>
                </div>

                <!-- ── Col 3: Redes Sociales ── -->
                <div class="footer-col">
                    <h4 class="footer-col-title">REDES SOCIALES</h4>
                    <div class="footer-social-list">
                        <a href="https://www.instagram.com/stattoos593/"
                           target="_blank" rel="noopener noreferrer"
                           class="footer-social-btn" aria-label="Instagram">
                            <i class="fa-brands fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/stattoos593"
                           target="_blank" rel="noopener noreferrer"
                           class="footer-social-btn" aria-label="Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>

                <!-- ── Col 4: Ubicación ── -->
                <div class="footer-col">
                    <h4 class="footer-col-title">UBICACIÓN</h4>
                    <address class="footer-address">
                        <p>Babacos y Guaytambos</p>
                        <p>Ambato, Ecuador</p>
                    </address>
                    <a href="https://maps.app.goo.gl/BeNCpcNQctP7bwMeA"
                       target="_blank" rel="noopener noreferrer"
                       class="footer-map-btn" aria-label="Ver en Google Maps">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>CÓMO LLEGAR</span>
                    </a>
                </div>

            </div><!-- /.footer-grid -->
        </div><!-- /.container -->
    </footer>
    `;

    // Inject into placeholder or append to body
    const placeholder = document.getElementById('site-footer');
    if (placeholder) {
        placeholder.outerHTML = FOOTER_HTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
})();
