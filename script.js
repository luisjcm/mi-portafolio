

document.addEventListener('DOMContentLoaded',() => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const listaMenu = document.querySelector('.lista-menu');
    const enlaces = document.querySelectorAll('.lista-menu a');

    if(menuToggle){
        menuToggle.addEventListener('click', () =>{
                listaMenu.classList.toggle('activo');
                menuToggle.classList.toggle('open');
        });
    }

    enlaces.forEach(link => {
        link.addEventListener('click',() => {
            listaMenu.classList.remove('activo');
            menuToggle.classList.remove('open');
        });
    });


/* Modo Claro/Oscuro */

    const botonTema = document.getElementById('boton-tema');
    const body = document.body;

    const temaGuardado = localStorage.getItem('tema');
    if(temaGuardado === 'oscuro'){
        body.classList.add('dark-mode');
        botonTema.innerText = '🌙';
    }

    botonTema.addEventListener('click', ()=>{
        body.classList.toggle('dark-mode');

        if(body.classList.contains('dark-mode')){
            botonTema.innerText = '🌙';
            localStorage.setItem('tema', 'oscuro');
        } else {
            botonTema.innerText = '🌞';
            localStorage.setItem('tema','claro');
        }
    });



    /* Animaciones scroll reveal*/

    const sr = ScrollReveal ({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });

    sr.reveal('.hero-texto', { origin: 'left'});
    sr.reveal('.hero-imagen', { origin: 'right', delay: 500});
    sr.reveal('.titulo-seccion', { origin: 'top', interval: 100});
    sr.reveal('.tarjeta',{ origin: 'bottom', interval: 200});
    sr.reveal('.proyecto', { origin: 'bottom', interval: 200});
    sr.reveal('.pie-pagina', { origin: 'bottom', delay: 100 });


    });