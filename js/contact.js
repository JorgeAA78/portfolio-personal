// Elementos del DOM
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const messageText = document.getElementById('message-text');
const closeButton = document.querySelector('.notification .delete');

// Cerrar notificación
if (closeButton) {
    closeButton.addEventListener('click', () => {
        formMessage.classList.add('is-hidden');
    });
}

// Manejar el envío del formulario de contacto
async function handleContactFormSubmit(e) {
    e.preventDefault();
    
    // Mostrar estado de carga
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    // Obtener datos del formulario
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    try {
        // Enviar el formulario a la API
        const response = await fetch('https://formspree.io/f/xdklylwo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: formValues.email,
                message: `Nuevo mensaje de contacto:\n\nNombre: ${formValues.name}\nEmail: ${formValues.email}\nAsunto: ${formValues.subject || 'Sin asunto'}\n\nMensaje:\n${formValues.message}`
            })
        });
        
        if (response.ok) {
            // Mostrar mensaje de éxito
            showFormMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.', 'success');
            contactForm.reset();
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        showFormMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.', 'error');
    } finally {
        // Restaurar el botón
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
}

// Mostrar mensaje de estado del formulario
function showFormMessage(message, type = 'is-info') {
    // Mostrar el contenedor de mensaje
    formMessage.classList.remove('is-hidden');
    
    // Establecer el tipo de notificación (success, danger, etc.)
    formMessage.className = `notification ${type} is-light`;
    
    // Asegurarse de que el botón de cerrar esté visible
    const closeBtn = formMessage.querySelector('.delete');
    if (closeBtn) closeBtn.style.display = 'block';
    
    // Establecer el mensaje
    if (messageText) messageText.textContent = message;
    
    // Desplazarse al mensaje
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Ocultar el mensaje después de 10 segundos
    setTimeout(() => {
        formMessage.classList.add('is-hidden');
    }, 10000);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Configurar el manejador del formulario
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
        
        // Añadir validación en tiempo real
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('invalid', (e) => {
                e.target.classList.add('is-danger');
            });
            
            input.addEventListener('input', (e) => {
                if (e.target.checkValidity()) {
                    e.target.classList.remove('is-danger');
                    e.target.classList.add('is-success');
                } else {
                    e.target.classList.remove('is-success');
                }
            });
        });
    }
    
    // Animación para los campos del formulario
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        // Añadir clase cuando el campo tiene valor
        input.addEventListener('change', function() {
            if (this.value.trim() !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // Disparar el evento change al cargar la página para campos con valor
        if (input.value.trim() !== '') {
            input.dispatchEvent(new Event('change'));
        }
    });
});
