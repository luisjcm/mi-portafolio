document.addEventListener('DOMContentLoaded', () => {
    
    console.log('✅ Portafolio Workana Edition: JS Optimizado');

    // --- 1. MENÚ HAMBURGUESA (Interactividad) ---
    const menuToggle = document.getElementById('menu-toggle');
    const listaMenu = document.querySelector('.lista-menu');
    const enlaces = document.querySelectorAll('.lista-menu a');
    
    if (menuToggle && listaMenu) {
        menuToggle.addEventListener('click', () => {
            listaMenu.classList.toggle('activo');
            menuToggle.classList.toggle('open');
        });
    }
    
    enlaces.forEach(link => {
        link.addEventListener('click', () => {
            listaMenu.classList.remove('activo');
            menuToggle.classList.remove('open');
        });
    });

    // --- 2. MODO CLARO/OSCURO ---
    const botonTema = document.getElementById('boton-tema');
    const body = document.body;
    const temaGuardado = localStorage.getItem('tema');
    
    if (temaGuardado === 'oscuro') {
        body.classList.add('dark-mode');
        if(botonTema) botonTema.innerText = '🌙';
    }
    
    if (botonTema) {
        botonTema.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const esOscuro = body.classList.contains('dark-mode');
            botonTema.innerText = esOscuro ? '🌙' : '🌞';
            localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
        });
    }

    // --- 3. ANIMACIONES AL SCROLL (Efectos de entrada) ---
    // Mantiene las transiciones de izquierda/derecha sin el movimiento de la foto
    const elementosAnimados = document.querySelectorAll('[data-animate]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elementosAnimados.forEach(el => observer.observe(el));
});