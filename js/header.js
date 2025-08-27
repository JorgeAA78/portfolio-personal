// Componente Header
const header = document.getElementById('header');

const headerContent = `
    <div class="container">
        <div class="logo">
            <a href="index.html" aria-label="Inicio"><i class="fas fa-laptop-code" style="color: black;"></i></a>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
`;

header.innerHTML = headerContent;

// Menú hamburguesa para móviles
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}
