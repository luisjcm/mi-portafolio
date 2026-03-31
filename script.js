document.addEventListener('DOMContentLoaded', () => {
    
    console.log('✅ Portafolio Workana Edition: JS Optimizado');
    myUndefinedFunction();
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

    // =======================================================
    // --- 4. ALERTA CV WORKANA (Intercepción del Botón CV) ---
    // =======================================================
    
    // a. Seleccionamos los elementos del DOM.
    // Usamos querySelector porque tienes una clase (.boton-cv) en lugar de un ID.
    const btnCV = document.querySelector('.boton-cv'); 
    const toast = document.getElementById('toast-workana');
    
    // b. Creamos una variable vacía para guardar el temporizador.
    // Esto es crucial para poder cancelarlo si el usuario hace clics rápidos.
    let toastTimeout; 

    // c. Comprobamos que ambos elementos existan en la página antes de agregar eventos,
    // para evitar errores en consola si alguna vez quitas el botón.
    if(btnCV && toast) {
        
        // d. Escuchamos el evento de 'clic' en el botón
        btnCV.addEventListener('click', (e) => {
            
            // e. Evitamos el comportamiento por defecto del enlace (<a href="#">).
            // Si no ponemos esto, la página saltará bruscamente hacia arriba (al inicio).
            e.preventDefault(); 

            // f. Animación de "Sacudida" (Shake) en el botón:
            // Le añadimos la clase que tiene la animación en CSS...
            btnCV.classList.add('shake-animation');
            
            // ...y usamos setTimeout para quitársela justo cuando la animación termina (400ms = 0.4s).
            // Esto permite que la animación pueda volver a ocurrir en el siguiente clic.
            setTimeout(() => {
                btnCV.classList.remove('shake-animation');
            }, 400); 

            // g. Mostramos el Toast agregándole la clase que lo desliza hacia adentro en CSS.
            toast.classList.add('mostrar');

            // h. Reseteamos el temporizador.
            // Si el usuario hace clic dos veces seguidas, borramos la cuenta regresiva anterior
            // para que los 6 segundos de visualización empiecen de nuevo.
            clearTimeout(toastTimeout);

            // i. Ocultamos el Toast automáticamente.
            // Le decimos al navegador: "Espera 6000 milisegundos (6 segundos) y quítale la clase 'mostrar'".
            toastTimeout = setTimeout(() => {
                toast.classList.remove('mostrar');
            }, 6000);
            
        });
    }
});