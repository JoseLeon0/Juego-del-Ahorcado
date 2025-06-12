let palabras = [
    'perro', 
    'aguila',
    'python',
    'jhon cena',
    'black clover',
    'frontend',
    'jefe tribal',
    'ronaldo',
    'coscomatepec',
    'madrid',
    'liga mx'
]

function generarNumeroAleatorio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min )) + min;
}