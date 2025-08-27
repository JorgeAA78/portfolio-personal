// Componente Footer
const footer = document.getElementById('footer');

const footerContent = `
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contacto</h3>
                <p>Email: info@precisohys.com</p>
                <p>Teléfono: +54 9 11 61966833</p>
            </div>
            <div class="footer-section">
                <h3>Sígueme</h3>
                <div class="social-links">
                    <a href="#" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
        </div>
    </div>
`;

footer.innerHTML = footerContent;
