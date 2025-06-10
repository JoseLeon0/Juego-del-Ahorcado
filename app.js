const container = document.querySelector('.container');

function crearPantallaPrincipal(){
    container.textContent = ``;
    container.insertAdjacentHTML('beforeend', `
        <figure class="container__figure">
            <img src="img/portada.jpg" alt="ahorcado">
        </figure>
        <div class="container__buttons">
            <button id="maquina">Maquina</button>
            <button id="otroJugador">Otro jugador</button>
        </div>
    `)
    
    container.classList.add('creacionPantallaPrincipal');

    setTimeout(function(){
        container.classList.remove('creacionPantallaPrincipal');
    }, 1000)
}

container.addEventListener('click', function(e){
    const elemto = e.target

    if(elemto.matches('button')){
        let html
        if(elemto.matches('#maquina')){
            html = `
            <h2>Vas a jugar vs maquina</h2>
            <p>parrafo</p>
            `
        }else{
            html = `
            <h2>Vas a jugar vs otro jugador</h2>
            <p>parrafo 2</p>
            `
        }

        container.classList.add('centroADerecha');

        setTimeout(function () {
            container.textContent = ``;
            container.insertAdjacentHTML('beforeend', html)
            container.classList.remove('centroADerecha');
            container.classList.add('izquierdaACentro');
        }, 1000); 

        setTimeout(function () {
            container.classList.remove('izquierdaACentro');
        }, 2000);

    }
})

crearPantallaPrincipal()
