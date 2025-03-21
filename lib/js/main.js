// main.js

// 1. Inicialización de componentes de Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar tooltips (opcional)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Inicializar popovers (opcional)
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// 2. Funcionalidad personalizada para el formulario de reserva
document.addEventListener('DOMContentLoaded', function () {
    const reservaForm = document.getElementById('reservaForm');

    if (reservaForm) {
        reservaForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar envío del formulario

            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const fecha = document.getElementById('fecha').value;
            const hora = document.getElementById('hora').value;

            // Validación básica
            if (!nombre || !email || !fecha || !hora) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Simular envío de reserva (puedes reemplazar esto con una llamada AJAX)
            console.log('Reserva enviada:', { nombre, email, fecha, hora });
            alert('¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.');

            // Limpiar el formulario
            reservaForm.reset();
        });
    }
});

// 3. Funcionalidad para el menú de navegación en dispositivos móviles
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.nav-links');

    if (navbarToggler && navLinks) {
        navbarToggler.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});

// 4. Animación para las tarjetas al hacer hover
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-custom');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 8px rgba(212, 175, 55, 0.3)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// 5. Funcionalidad para el botón de "Volver arriba"
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});