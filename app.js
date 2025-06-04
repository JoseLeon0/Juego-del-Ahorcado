const container = document.querySelector('.container');

function crearPantallaPrincipal(){
    container.classList.add('pantallaPrincipalAnimation');

    setTimeout(function(){
        container.innerHTML = ``;
        container.insertAdjacentHTML('beforeend', `
            <figure class="container__figure">
                <img src="img/ahorcado_0.png" alt="ahorcado">
            </figure>
            <div class="container__buttons">
                <button id="maquina">Maquina</button>
                <button id="otroJugador">Otro jugador</button>
            </div>
        `)
        container.classList.remove('pantallaPrincipalAnimation')
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

        container.classList.add('containerSalida');

        setTimeout(function () {
            container.innerHTML = ``;
            container.insertAdjacentHTML('beforeend', html)
            container.classList.remove('containerSalida');
            container.classList.add('containerEnter');
        }, 1000); 

        setTimeout(function () {
            container.classList.remove('containerEnter');
        }, 2000);

    }
})
