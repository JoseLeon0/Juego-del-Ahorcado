const palabras = [
    "computadora",
    "elefante",
    "murcielago",
    "astronauta",
    "bicicleta",
    "universo",
    "jirafa",
    "refrigerador",
    "montaña",
    "biblioteca",
    "camaleon",
    "tornillo",
    "mariposa",
    "escalera",
    "telescopio",
    "cascada",
    "uriel valdivia",
    "coscomatepec",
    "informatica",
    "java y javascript",
    "españa madrid"
]

function generarNumeroAleatorio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min )) + min;
}