const container = document.querySelector('.container');
const modalPalabra = document.querySelector('dialog')
const modalResultado = document.querySelector('dialog:nth-of-type(2)')
const buttonCloseModalResultado = document.querySelector('#modalResultado')
const buttonCloseModalPalabra = document.querySelector('#modalPalabra')

let palabraSeleccionada = null
let contadorImg = 6

let textosModal = {
    victoria : [
        '¡Felicidades!', 'Has acertado la palabra' 
    ], 
    derrota : [
        '¡Oh no!', 'Mas suerte la proxima vez amig@'
    ]
}

//True -> Gana. False -> Pierde
function creacionContenidoModalRespuesta(value){
    if(value){
        modalResultado.querySelector('h2').textContent = textosModal.victoria[0]
        modalResultado.querySelector('p').textContent = textosModal.victoria[1]
    }else{
        modalResultado.querySelector('h2').textContent = textosModal.derrota[0]
        modalResultado.querySelector('p').textContent = textosModal.derrota[1]
    }
}

function crearInterfazJuego(palabraUser){
    let html = `
    <figure class="container__figure">
        <img src="img/ahorcado_6.png" alt="Ahorcado">
    </figure>
    <div class="container__word"></div>
    <div class="container__keys">
        <input type="button" value="q">
        <input type="button" value="w">
        <input type="button" value="e">
        <input type="button" value="r">
        <input type="button" value="t">
        <input type="button" value="y">
        <input type="button" value="u">
        <input type="button" value="i">
        <input type="button" value="o">
        <input type="button" value="p">
        <input type="button" value="a">
        <input type="button" value="s">
        <input type="button" value="d">
        <input type="button" value="f">
        <input type="button" value="g">
        <input type="button" value="h">
        <input type="button" value="j">
        <input type="button" value="k">
        <input type="button" value="l">
        <input type="button" value="ñ">
        <input type="button" value="z">
        <input type="button" value="x">
        <input type="button" value="c">
        <input type="button" value="v">
        <input type="button" value="b">
        <input type="button" value="n">
        <input type="button" value="m">
    </div>
    `
    container.classList.add('centroADerecha');
    setTimeout(function () {
        container.textContent = ``;
        container.insertAdjacentHTML('beforeend', html)

        if(palabraUser)
            palabraSeleccionada = palabraUser
        else{
            const numero = generarNumeroAleatorio(0, palabras.length)
            palabraSeleccionada = palabras[numero]
        }
        console.log(palabraSeleccionada)
        displayWord(palabraSeleccionada)
        container.classList.remove('centroADerecha');
        container.classList.add('izquierdaACentro');
    }, 1000); 
    setTimeout(function () {
        container.classList.remove('izquierdaACentro');
    }, 2000);
}

function displayWord(word) {
    const container = document.querySelector('.container__word');
    container.innerHTML = ''; // Limpia cualquier contenido previo

    word.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? ' ' : '_'; // Espacio en blanco o guion bajo
        span.classList.add('letter'); // Clase opcional para estilos
        container.appendChild(span);
    });
}

function crearPantallaPrincipal(){
    container.textContent = ``;
    container.insertAdjacentHTML('beforeend', `
        <figure class="container__figure">
            <img src="img/portada2.png" alt="ahorcado">
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

buttonCloseModalResultado.addEventListener('click', function(){
    modalResultado.close()
    crearPantallaPrincipal()
})

buttonCloseModalPalabra.addEventListener('click', function(){
    const palabraUser = document.querySelector('input[type="text"]').value
    modalPalabra.close()
    document.querySelector('input[type="text"]').value = ""
    crearInterfazJuego(palabraUser)
})

container.addEventListener('click', function(e){
    const elemento = e.target

    if(elemento.matches('button')){

        if(elemento.matches('#otroJugador'))
            modalPalabra.showModal()
        else
            crearInterfazJuego()
    }else if(elemento.matches('input')){
        const valor = elemento.value

        if(palabraSeleccionada.includes(valor)){
            elemento.style.backgroundColor = "green"

            const letras = document.querySelectorAll('.container__word .letter');
            palabraSeleccionada.split('').forEach((char, index) => {
                if (char === valor) {
                    letras[index].textContent = valor;
                }
            });

            const todasReveladas = Array.from(letras).every(letra => letra.textContent !== '_');
            if (todasReveladas) {
                contadorImg = 6
                creacionContenidoModalRespuesta(true)
                modalResultado.showModal()
            }

        }else{
            elemento.style.backgroundColor = "crimson"
            contadorImg--

            if(contadorImg == 0){
                contadorImg = 6
                creacionContenidoModalRespuesta(false)
                modalResultado.showModal()
            }

            const imgAhorcado = document.querySelector('.container__figure img')
            imgAhorcado.setAttribute('src', `img/ahorcado_${contadorImg}.png`)
        }

        elemento.setAttribute('disabled', true)
    }
})

crearPantallaPrincipal()
