// Array de frases
var frases = [
    "La vida es como una bicicleta, para mantener el equilibrio debes seguir adelante. - Albert Einstein",
    "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes al no intentarlo. - Jack Canfield",
    "La suerte es lo que sucede cuando la preparación encuentra a la oportunidad. - Seneca",
    "La mente es como un paracaídas, solo funciona si está abierta. - Albert Einstein"
];

// Función para obtener una frase al azar
function obtenerFraseAleatoria() {
    var indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}
