const buttonMaquina = document.querySelector('#maquina');
const buttonOtroJugador = document.querySelector('#otroJugador');
const container = document.querySelector('.container');

buttonMaquina.addEventListener('click', function () {
    container.classList.add('containerSalida');

    setTimeout(function () {
        container.innerHTML = `
            <h2>Nuevo contenido</h2>
            <p>Este es un párrafo</p>
        `;
        container.classList.remove('containerSalida');
        container.classList.add('containerEnter');
    }, 1000); 

    setTimeout(function () {
        container.classList.remove('containerEnter');
    }, 2000);
});