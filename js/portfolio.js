// Elementos del DOM
const portfolioGrid = document.querySelector('.portfolio-grid');

// Datos de los proyectos
const projects = [
    {
        id: 1,
        title: 'Proyecto 1',
        description: 'Descripción breve del primer proyecto destacado. Incluye las tecnologías utilizadas y el objetivo principal.',
        image: 'images/proyecto1.jpg',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción breve del segundo proyecto destacado. Muestra las características principales y tecnologías.',
        image: 'images/proyecto2.jpg',
        tags: ['React', 'Node.js', 'MongoDB'],
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 3,
        title: 'Proyecto 3',
        description: 'Descripción breve del tercer proyecto destacado. Explica el desafío y la solución implementada.',
        image: 'images/proyecto3.jpg',
        tags: ['Vue.js', 'Firebase', 'Sass'],
        demoUrl: '#',
        codeUrl: '#'
    }
];

// Mostrar proyectos en la cuadrícula
function displayProjects() {
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="portfolio-item">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="portfolio-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="portfolio-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="portfolio-links">
                    <a href="${project.demoUrl}" class="button is-primary is-outlined is-small" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Ver Demo
                    </a>
                    <a href="${project.codeUrl}" class="button is-primary is-small" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> Código
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Mostrar proyectos en la cuadrícula
function displayProjects(projects) {
    if (!projects || projects.length === 0) {
        displayDefaultProjects();
        return;
    }

    const projectsHTML = projects.map(project => {
        const fields = project.fields;
        const imageUrl = fields.image ? `https:${fields.image.fields.file.url}` : 'images/placeholder-project.jpg';
        
        return `
            <div class="portfolio-item">
                <div class="portfolio-image">
                    <img src="${imageUrl}" alt="${fields.title || 'Proyecto'}">
                    <div class="portfolio-overlay">
                        <div class="portfolio-links">
                            <a href="${fields.demoUrl || '#'}" class="btn" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i> Demo
                            </a>
                            <a href="${fields.githubUrl || '#'}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i> Código
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-info">
                    <h3>${fields.title || 'Proyecto'}</h3>
                    <p>${fields.description || 'Descripción del proyecto.'}</p>
                    <div class="portfolio-tags">
                        ${fields.technologies ? fields.technologies.map(tech => 
                            `<span class="tag">${tech}</span>`
                        ).join('') : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    portfolioGrid.innerHTML = projectsHTML;
}

// Mostrar proyectos por defecto en caso de error
function displayDefaultProjects() {
    portfolioGrid.innerHTML = `
        <div class="portfolio-item">
            <div class="portfolio-image">
                <img src="images/placeholder-project.jpg" alt="Proyecto 1">
                <div class="portfolio-overlay">
                    <div class="portfolio-links">
                        <a href="#" class="btn" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a href="#" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> Código
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <h3>Sitio Web Personal</h3>
                <p>Un sitio web personal desarrollado con HTML, CSS y JavaScript.</p>
                <div class="portfolio-tags">
                    <span class="tag">HTML5</span>
                    <span class="tag">CSS3</span>
                    <span class="tag">JavaScript</span>
                </div>
            </div>
        </div>
        
        <div class="portfolio-item">
            <div class="portfolio-image">
                <img src="images/placeholder-project.jpg" alt="Proyecto 2">
                <div class="portfolio-overlay">
                    <div class="portfolio-links">
                        <a href="#" class="btn" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a href="#" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> Código
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <h3>Aplicación de Tareas</h3>
                <p>Una aplicación para gestionar tareas diarias con React.</p>
                <div class="portfolio-tags">
                    <span class="tag">React</span>
                    <span class="tag">Node.js</span>
                    <span class="tag">MongoDB</span>
                </div>
            </div>
        </div>
        
        <div class="portfolio-item">
            <div class="portfolio-image">
                <img src="images/placeholder-project.jpg" alt="Proyecto 3">
                <div class="portfolio-overlay">
                    <div class="portfolio-links">
                        <a href="#" class="btn" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a href="#" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> Código
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <h3>Tienda en Línea</h3>
                <p>Una tienda en línea desarrollada con Next.js y Stripe.</p>
                <div class="portfolio-tags">
                    <span class="tag">Next.js</span>
                    <span class="tag">Stripe</span>
                    <span class="tag">Tailwind CSS</span>
                </div>
            </div>
        </div>
    `;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    
    // Efecto de carga suave para las imágenes
    const images = document.querySelectorAll('.portfolio-image img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = 1;
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transition = 'opacity 0.5s ease-in-out';
        imageObserver.observe(img);
    });
});
