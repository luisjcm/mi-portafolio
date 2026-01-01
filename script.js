

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


    /**( Envio de formulario sin redirección (Formspree + Fetch)) */
    const form = document.querySelector('.formulario-contacto');
    const estadoForm = document.getElementById('estado-form');
    const btnEnviar = document.getElementById('btn-enviar');


    console.log('JS cargó y DOM listo');
    if(form){
        form.addEventListener('submit', async(e) => {
            e.preventDefault();

            console.log('✅ Submit interceptado: no debería redirigir');


            estadoForm.textContent = '';
            estadoForm.className = 'estado-form';
            btnEnviar.disabled = true;
            btnEnviar.textContent = 'Enviando...';
    

    console.log('Intecepté el submit (no debería redirigir)');
            try{
                const formData = new FormData(form);

                const res = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json'}
                });

                if(res.ok){
                    form.reset();
                    estadoForm.textContent = 'Mensaje Enviado! Te responderé pronto.';
                    estadoForm.classList.add('ok');
                } else {
                    estadoForm.textContent = 'Hubo un problema al enviar. Intenta de nuevo';
                    estadoForm.classList.add('error');
                }
            } catch(err) {
                console.error('❌ Error real del fetch:', err);


                estadoForm.textContent = 'Error de conexión. Revisa tu internet e inténtalo de nuevo.'
                estadoForm.classList.add('error');
            } finally {
                btnEnviar.disabled = false;
                btnEnviar.textContent = 'Enviar Mensaje';
            }

        });
    }

    window.addEventListener('pageshow', () => {
            const form = document.querySelector('.formulario-contacto');
                if (form) form.reset();
    });



    /* Animaciones scroll reveal*/

    if(typeof ScrollReveal !== 'undefined'){
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
    } else {
        console.warn('ScrollReveal no está cargado. Las animaciones no se aplicarán.')
    }

    });