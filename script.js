/* ============================================
   JAVASCRIPT MEJORADO - PORTAFOLIO
   ============================================
   
   ÍNDICE:
   1. Menú hamburguesa móvil
   2. Modo claro/oscuro
   3. Formulario de contacto
   4. Animaciones al scroll (Intersection Observer)
   5. Scroll suave mejorado
   6. Efectos adicionales
*/

/* ============================================
   DOMContentLoaded
   ============================================
   Este evento se dispara cuando el HTML está completamente cargado
   y parseado, sin esperar a que se carguen imágenes o estilos
*/
document.addEventListener('DOMContentLoaded', () => {
    
    console.log('✅ JavaScript cargado correctamente');
    
    /* ============================================
       1. MENÚ HAMBURGUESA MÓVIL
       ============================================ */
    
    // Selecciona el botón hamburguesa del DOM
    // getElementById() busca un elemento por su atributo id="menu-toggle"
    const menuToggle = document.getElementById('menu-toggle');
    
    // Selecciona la lista del menú usando querySelector()
    // querySelector() busca el primer elemento que coincida con el selector CSS
    const listaMenu = document.querySelector('.lista-menu');
    
    // Selecciona TODOS los enlaces dentro del menú
    // querySelectorAll() devuelve una NodeList (similar a un array) con todos los elementos
    const enlaces = document.querySelectorAll('.lista-menu a');
    
    // Verifica que el botón existe antes de añadir el event listener
    // Esto evita errores si el elemento no está en el HTML
    if (menuToggle) {
        /*
           addEventListener() registra una función que se ejecutará
           cuando ocurra el evento especificado (en este caso 'click')
           
           Sintaxis: elemento.addEventListener('evento', función)
        */
        menuToggle.addEventListener('click', () => {
            /*
               classList.toggle() añade la clase si no existe,
               o la quita si ya existe. Es un interruptor (toggle).
               
               'activo' es la clase que en CSS hace que el menú se muestre
               'open' es la clase que transforma las barras en una X
            */
            listaMenu.classList.toggle('activo');
            menuToggle.classList.toggle('open');
        });
    }
    
    /*
       forEach() ejecuta una función para cada elemento del array/NodeList
       
       Sintaxis: array.forEach((elemento, índice) => {})
       
       En este caso, para cada enlace del menú:
    */
    enlaces.forEach(link => {
        link.addEventListener('click', () => {
            /*
               Cuando haces clic en un enlace del menú:
               1. Quita la clase 'activo' del menú (lo cierra)
               2. Quita la clase 'open' del botón (vuelve a ☰)
            */
            listaMenu.classList.remove('activo');
            menuToggle.classList.remove('open');
        });
    });
    
    
    /* ============================================
       2. MODO CLARO/OSCURO (DARK MODE)
       ============================================ */
    
    const botonTema = document.getElementById('boton-tema');
    const body = document.body; // Selecciona el elemento <body>
    
    /*
       localStorage: API del navegador que permite guardar datos
       de forma permanente (persisten incluso al cerrar el navegador)
       
       localStorage.getItem('clave'): recupera un valor guardado
       localStorage.setItem('clave', 'valor'): guarda un valor
    */
    const temaGuardado = localStorage.getItem('tema');
    
    /*
       Al cargar la página, verifica si había un tema guardado previamente
       Si el tema guardado es 'oscuro', activa el modo oscuro
    */
    if (temaGuardado === 'oscuro') {
        // classList.add() añade una clase al elemento
        body.classList.add('dark-mode');
        // innerText cambia el texto visible del elemento
        botonTema.innerText = '🌙';
    }
    
    // Event listener para el botón de cambio de tema
    botonTema.addEventListener('click', () => {
        /*
           classList.toggle('dark-mode'):
           - Si el body NO tiene la clase, la añade
           - Si el body YA tiene la clase, la quita
        */
        body.classList.toggle('dark-mode');
        
        /*
           classList.contains('clase'): devuelve true o false
           dependiendo de si el elemento tiene esa clase
        */
        if (body.classList.contains('dark-mode')) {
            // Modo oscuro activado
            botonTema.innerText = '🌙';
            // Guarda la preferencia en localStorage
            localStorage.setItem('tema', 'oscuro');
        } else {
            // Modo claro activado
            botonTema.innerText = '🌞';
            localStorage.setItem('tema', 'claro');
        }
    });
    
    
    /* ============================================
       3. FORMULARIO DE CONTACTO (FETCH API)
       ============================================
       Envía el formulario sin recargar la página usando AJAX
    */
    
    const form = document.querySelector('.formulario-contacto');
    const estadoForm = document.getElementById('estado-form');
    const btnEnviar = document.getElementById('btn-enviar');
    
    // Verifica que el formulario existe
    if (form) {
        /*
           'submit' = evento que se dispara al enviar el formulario
           async = palabra clave que permite usar 'await' dentro de la función
        */
        form.addEventListener('submit', async (e) => {
            /*
               e.preventDefault(): previene el comportamiento por defecto
               En este caso, evita que el formulario recargue la página
            */
            e.preventDefault();
            
            console.log('✅ Formulario enviado (sin recargar página)');
            
            // Limpia mensajes anteriores
            estadoForm.textContent = ''; // Borra el texto
            estadoForm.className = 'estado-form'; // Quita clases de éxito/error
            
            // Deshabilita el botón mientras se envía
            btnEnviar.disabled = true;
            btnEnviar.textContent = 'Enviando...';
            
            /*
               try...catch: maneja errores de forma elegante
               - try: intenta ejecutar el código
               - catch: captura errores si ocurren
               - finally: se ejecuta siempre al final
            */
            try {
                /*
                   FormData: objeto que contiene los datos del formulario
                   Automáticamente recoge todos los campos con atributo 'name'
                */
                const formData = new FormData(form);
                
                /*
                   fetch(): API moderna para hacer peticiones HTTP
                   Es asíncrona, por eso usamos 'await'
                   
                   await: espera a que la promesa se resuelva antes de continuar
                */
                const res = await fetch(form.action, {
                    method: 'POST',  // Método HTTP para enviar datos
                    body: formData,  // Datos del formulario
                    headers: {
                        'Accept': 'application/json' // Espera respuesta en JSON
                    }
                });
                
                /*
                   res.ok: true si el código de respuesta HTTP está entre 200-299
                   (indica que la petición fue exitosa)
                */
                if (res.ok) {
                    // Éxito: limpia el formulario
                    form.reset(); // Borra todos los campos
                    
                    // Muestra mensaje de éxito
                    estadoForm.textContent = '✅ Mensaje enviado! Te responderé pronto.';
                    estadoForm.classList.add('ok'); // Añade clase para color verde
                } else {
                    // Error del servidor
                    estadoForm.textContent = '❌ Hubo un problema al enviar. Intenta de nuevo.';
                    estadoForm.classList.add('error'); // Añade clase para color rojo
                }
            } catch (err) {
                /*
                   catch captura cualquier error que ocurra en el try
                   Por ejemplo: sin internet, servidor caído, etc.
                */
                console.error('❌ Error:', err);
                
                estadoForm.textContent = '❌ Error de conexión. Revisa tu internet.';
                estadoForm.classList.add('error');
            } finally {
                /*
                   finally se ejecuta siempre, haya éxito o error
                   Ideal para "limpiar" o restaurar estados
                */
                btnEnviar.disabled = false; // Reactiva el botón
                btnEnviar.textContent = 'Enviar Mensaje'; // Restaura el texto
            }
        });
    }
    
    /*
       pageshow: evento que se dispara al mostrar la página
       Útil cuando el usuario vuelve atrás en el navegador
    */
    window.addEventListener('pageshow', () => {
        const form = document.querySelector('.formulario-contacto');
        if (form) form.reset(); // Limpia el formulario
    });
    
    
    /* ============================================
       4. ANIMACIONES AL SCROLL (INTERSECTION OBSERVER)
       ============================================
       API moderna del navegador que detecta cuando un elemento
       entra o sale del viewport (área visible de la pantalla)
       
       ¡MUCHO MÁS EFICIENTE que escuchar el evento 'scroll'!
    */
    
    /*
       querySelectorAll('[data-animate]'):
       Selecciona TODOS los elementos que tengan el atributo data-animate
       El atributo data-* es personalizado y no afecta la funcionalidad HTML
    */
    const elementosAnimados = document.querySelectorAll('[data-animate]');
    
    /*
       Opciones para el Intersection Observer:
       - threshold: porcentaje del elemento que debe ser visible
                   0.1 = 10% visible, 1 = 100% visible
       - rootMargin: margen adicional al viewport
                    '-50px' = el elemento debe estar 50px dentro para activarse
    */
    const observerOptions = {
        threshold: 0.1,      // Se activa cuando 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px' // Margen inferior de 50px
    };
    
    /*
       IntersectionObserver: constructor que crea un observador
       
       Sintaxis: new IntersectionObserver(callback, opciones)
       
       callback: función que se ejecuta cuando cambia la intersección
       entries: array con información de los elementos observados
    */
    const observer = new IntersectionObserver((entries) => {
        /*
           forEach itera sobre cada entrada (elemento observado)
        */
        entries.forEach(entry => {
            /*
               entry.isIntersecting: true cuando el elemento está visible
               según las condiciones definidas en observerOptions
            */
            if (entry.isIntersecting) {
                /*
                   Cuando el elemento entra al viewport:
                   1. Añade la clase 'animate-in' que activa la animación CSS
                   2. Deja de observar este elemento (ya se animó)
                */
                entry.target.classList.add('animate-in');
                
                // unobserve(): deja de observar este elemento específico
                // Mejora el rendimiento al no seguir observando lo que ya se animó
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    /*
       Observa cada elemento que tenga data-animate
    */
    elementosAnimados.forEach(elemento => {
        // observe(): empieza a observar un elemento
        observer.observe(elemento);
    });
    
    console.log(`🎬 Observando ${elementosAnimados.length} elementos para animar`);
    
    
    /* ============================================
       5. SCROLL SUAVE MEJORADO
       ============================================
       Mejora la navegación con anclas (#inicio, #experiencia, etc.)
    */
    
    /*
       Selecciona todos los enlaces que empiezan con #
       a[href^="#"]: selector CSS que significa:
       - a: enlaces
       - [href^="#"]: cuyo atributo href empiece con #
    */
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');
    
    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            // Obtiene el valor del atributo href (ej: "#experiencia")
            const targetId = enlace.getAttribute('href');
            
            // Si es solo "#", no hace nada (previene errores)
            if (targetId === '#') return;
            
            // Busca el elemento con ese id
            const targetElement = document.querySelector(targetId);
            
            // Si el elemento existe, hace scroll hacia él
            if (targetElement) {
                e.preventDefault(); // Previene el scroll por defecto del navegador
                
                /*
                   scrollIntoView(): hace scroll hasta el elemento
                   
                   Opciones:
                   - behavior: 'smooth' = scroll suave
                   - block: 'start' = alinea al principio del viewport
                   - inline: 'nearest' = ajuste horizontal más cercano
                */
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });
    
    
    /* ============================================
       6. EFECTO PARALLAX SUAVE EN EL HERO
       ============================================
       Mueve la imagen del hero más lento que el scroll
       creando sensación de profundidad
    */
    
    const heroImagen = document.querySelector('.hero-imagen img');
    
    if (heroImagen) {
        /*
           'scroll': evento que se dispara al hacer scroll
           
           NOTA: Este es el único caso donde usamos scroll
           porque el parallax requiere actualización continua
        */
        window.addEventListener('scroll', () => {
            /*
               window.pageYOffset: cantidad de píxeles que se ha hecho scroll
               
               El cálculo: scrollY * 0.5 hace que la imagen se mueva
               a la mitad de velocidad del scroll
            */
            const scrollY = window.pageYOffset;
            
            /*
               transform: translateY(): mueve el elemento verticalmente
               Se divide entre 2 para hacer el movimiento más sutil
            */
            heroImagen.style.transform = `translateY(${scrollY * 0.3}px)`;
        });
    }
    
    
    /* ============================================
       7. CONTADOR ANIMADO PARA AÑOS DE EXPERIENCIA
       ============================================
       Anima números desde 0 hasta el valor final
    */
    
    function animarContador(elemento, valorFinal, duracion = 2000) {
        /*
           Parámetros:
           - elemento: el elemento HTML donde mostrar el número
           - valorFinal: el número final a alcanzar
           - duracion: tiempo de la animación en milisegundos (default 2000 = 2s)
        */
        
        let valorActual = 0; // Comienza en 0
        
        /*
           Date.now(): devuelve la fecha/hora actual en milisegundos
           Usado para calcular el progreso de la animación
        */
        const inicio = Date.now();
        
        /*
           requestAnimationFrame(): ejecuta una función antes del
           siguiente repintado del navegador (≈60 veces por segundo)
           
           Es MUCHO más eficiente que setInterval para animaciones
        */
        function actualizar() {
            // Tiempo transcurrido desde el inicio
            const tiempoTranscurrido = Date.now() - inicio;
            
            /*
               Progreso: valor entre 0 y 1
               - 0 al inicio
               - 1 cuando tiempoTranscurrido >= duracion
               
               Math.min(): devuelve el menor de dos valores
               Asegura que el progreso nunca supere 1
            */
            const progreso = Math.min(tiempoTranscurrido / duracion, 1);
            
            /*
               Calcula el valor actual basado en el progreso
               Ej: si progreso = 0.5 y valorFinal = 5, entonces = 2.5
               
               Math.floor(): redondea hacia abajo
            */
            valorActual = Math.floor(progreso * valorFinal);
            
            // Actualiza el texto del elemento
            elemento.textContent = valorActual;
            
            /*
               Si no ha terminado (progreso < 1),
               programa la siguiente actualización
            */
            if (progreso < 1) {
                requestAnimationFrame(actualizar);
            } else {
                // Cuando termina, asegura que muestre el valor exacto
                elemento.textContent = valorFinal;
            }
        }
        
        // Inicia la animación
        actualizar();
    }
    
    // Ejemplo de uso: anima los "5 años de experiencia"
    // Puedes añadir un elemento específico en el HTML para esto
    
    
    /* ============================================
       8. DETECCIÓN DE SCROLL HACIA ABAJO/ARRIBA
       ============================================
       Útil para ocultar/mostrar el header al hacer scroll
    */
    
    let scrollAnterior = window.pageYOffset; // Guarda la posición anterior
    const header = document.querySelector('.header-principal');
    
    window.addEventListener('scroll', () => {
        const scrollActual = window.pageYOffset;
        
        /*
           Compara la posición actual con la anterior
           para saber la dirección del scroll
        */
        if (scrollActual > scrollAnterior && scrollActual > 100) {
            // Scroll hacia abajo y más de 100px desde arriba
            // OPCIONAL: puedes ocultar el header aquí
            // header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll hacia arriba
            // header.style.transform = 'translateY(0)';
        }
        
        // Actualiza la posición anterior para la próxima comparación
        scrollAnterior = scrollActual;
    });
    
    
    /* ============================================
       9. SCROLL REVEAL ALTERNATIVO (SIN LIBRERÍA)
       ============================================
       Si prefieres no usar la librería ScrollReveal,
       este código replica funcionalidad similar
    */
    
    // Ya implementado arriba con Intersection Observer
    // Mucho más eficiente que ScrollReveal
    
    
    /* ============================================
       10. VALIDACIÓN ADICIONAL DEL FORMULARIO
       ============================================
       Validaciones personalizadas más allá de "required"
    */
    
    if (form) {
        const inputEmail = form.querySelector('input[type="email"]');
        const inputNombre = form.querySelector('input[name="Nombre"]');
        
        // Validación personalizada del email
        if (inputEmail) {
            inputEmail.addEventListener('blur', () => {
                /*
                   blur: evento cuando el input pierde el foco
                   (usuario hace clic fuera del campo)
                */
                
                /*
                   Expresión regular (regex) para validar email
                   /.../ delimita la expresión
                   ^ = inicio de la cadena
                   $ = fin de la cadena
                   .test() devuelve true si coincide
                */
                const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value);
                
                if (!emailValido && inputEmail.value !== '') {
                    // Si el email no es válido y no está vacío
                    inputEmail.style.borderColor = '#dc2626'; // Borde rojo
                } else {
                    inputEmail.style.borderColor = ''; // Restaura el borde original
                }
            });
        }
        
        // Validación del nombre (mínimo 3 caracteres)
        if (inputNombre) {
            inputNombre.addEventListener('blur', () => {
                /*
                   trim(): elimina espacios al inicio y final
                   length: cantidad de caracteres
                */
                if (inputNombre.value.trim().length < 3 && inputNombre.value !== '') {
                    inputNombre.style.borderColor = '#dc2626';
                } else {
                    inputNombre.style.borderColor = '';
                }
            });
        }
    }
    
    
    /* ============================================
       11. EFECTO DE ESCRITURA (TYPEWRITER)
       ============================================
       Texto que aparece letra por letra
    */
    
    function efectoEscritura(elemento, texto, velocidad = 100) {
        /*
           Parámetros:
           - elemento: donde mostrar el texto
           - texto: texto completo a escribir
           - velocidad: milisegundos entre cada letra
        */
        
        let indice = 0; // Posición actual en el texto
        elemento.textContent = ''; // Limpia el elemento
        
        /*
           setInterval(): ejecuta una función repetidamente
           cada X milisegundos
           
           Retorna un ID que se puede usar con clearInterval()
        */
        const intervalo = setInterval(() => {
            if (indice < texto.length) {
                /*
                   charAt(i): devuelve el caracter en la posición i
                   += : añade al final del texto existente
                */
                elemento.textContent += texto.charAt(indice);
                indice++;
            } else {
                // Cuando termina, detiene el intervalo
                clearInterval(intervalo);
            }
        }, velocidad);
    }
    
    // Ejemplo de uso (descomentado para activar):
    // const tituloHero = document.querySelector('.hero-texto h1');
    // if (tituloHero) {
    //     const textoOriginal = tituloHero.textContent;
    //     efectoEscritura(tituloHero, textoOriginal, 50);
    // }
    
    
    /* ============================================
       12. PERFORMANCE: LAZY LOADING DE IMÁGENES
       ============================================
       Carga imágenes solo cuando están cerca del viewport
    */
    
    // El atributo loading="lazy" en HTML ya hace esto,
    // pero aquí hay una implementación personalizada:
    
    const imagenesProyectos = document.querySelectorAll('.imagen-proyecto img');
    
    const imagenObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                /*
                   dataset: acceso a atributos data-*
                   ej: data-src="imagen.jpg" se accede como dataset.src
                */
                if (img.dataset.src) {
                    // Carga la imagen real
                    img.src = img.dataset.src;
                    // Remueve el atributo para no volver a cargar
                    img.removeAttribute('data-src');
                }
                
                imagenObserver.unobserve(img);
            }
        });
    }, { rootMargin: '100px' }); // Comienza a cargar 100px antes
    
    imagenesProyectos.forEach(img => {
        // Solo observa si tiene data-src
        if (img.dataset.src) {
            imagenObserver.observe(img);
        }
    });
    
    
    /* ============================================
       FIN DEL CÓDIGO
       ============================================ */
    
    console.log('🚀 Portafolio listo y optimizado');
    
}); // Fin de DOMContentLoaded


/* ============================================
   FUNCIONES AUXILIARES GLOBALES
   ============================================
   Funciones que pueden ser útiles en todo el proyecto
*/

/**
 * Debounce: retrasa la ejecución de una función
 * Útil para eventos que se disparan muchas veces (scroll, resize)
 * 
 * @param {Function} func - Función a ejecutar
 * @param {Number} wait - Milisegundos de espera
 * @returns {Function} - Función con debounce aplicado
 */
function debounce(func, wait = 100) {
    let timeout;
    
    /*
       Retorna una nueva función que:
       1. Cancela el timeout anterior
       2. Programa un nuevo timeout
       3. Solo ejecuta la función original después del tiempo de espera
    */
    return function executedFunction(...args) {
        // Limpia el timeout anterior si existe
        clearTimeout(timeout);
        
        /*
           setTimeout(): ejecuta una función después de X milisegundos
           Se ejecuta solo UNA vez (a diferencia de setInterval)
        */
        timeout = setTimeout(() => {
            // apply(): ejecuta la función con el contexto y argumentos correctos
            func.apply(this, args);
        }, wait);
    };
}

// Ejemplo de uso:
// window.addEventListener('resize', debounce(() => {
//     console.log('Ventana redimensionada');
// }, 250));


/**
 * Throttle: limita cuántas veces se puede ejecutar una función
 * Diferente a debounce: ejecuta la función periódicamente
 * 
 * @param {Function} func - Función a ejecutar
 * @param {Number} limit - Milisegundos mínimos entre ejecuciones
 * @returns {Function} - Función con throttle aplicado
 */
function throttle(func, limit = 100) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Ejemplo de uso para scroll (mejor rendimiento):
// window.addEventListener('scroll', throttle(() => {
//     console.log('Scroll detectado');
// }, 200));

