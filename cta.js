/**
 * cta.js — Componente CTA Premium Compartido
 * Inyecta la sección de CTA en los placeholders con clase .cta-shared-placeholder
 */
(function () {
    const CTA_HTML = /* html */`
    <!-- Lead Gen CTA - Premium -->
    <div class="cta-premium-section" id="cta-premium">
        <div class="container">
            <div class="cta-premium-card">
                <div class="cta-card-glow" aria-hidden="true"></div>
                <h3 class="cta-premium-title uppercase">AGENDA TU CITA PARA PODER ASESORARTE SOBRE TU IDEA.</h3>
                <a href="https://wa.link/k4isuj" target="_blank" rel="noopener noreferrer" class="btn-cta-premium" id="cta-whatsapp-btn">
                    <span class="btn-cta-text">AGENDA TU CITA</span>
                    <span class="btn-sweep-light" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    </div>
    `;

    // Inject into all placeholders
    const placeholders = document.querySelectorAll('.cta-shared-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.outerHTML = CTA_HTML;
    });
})();
