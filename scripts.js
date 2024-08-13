document.addEventListener("DOMContentLoaded", function() {
    // Añadir efectos de entrada/salida para secciones
    const sections = document.querySelectorAll('#content > div');
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY > sectionTop - window.innerHeight / 2) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });

    // Obtener la ruta actual
    const currentPath = window.location.pathname;
    
    // Asegurarse de que el currentPath sea solo la parte relevante de la URL
    const path = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Seleccionar todos los enlaces de la navegación
    const navLinks = document.querySelectorAll('.nav-link');

    // Iterar sobre los enlaces
    navLinks.forEach(link => {
        // Obtener el atributo href del enlace
        const linkPath = link.getAttribute('href');

        // Comparar la ruta del enlace con la ruta actual
        if (linkPath === path || (linkPath === '' && currentPath === '/')) {
            // Agregar la clase 'active' al enlace actual
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
