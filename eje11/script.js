// Función para verificar si la fecha es válida
function verificarFecha() {
    // Obtener los valores del formulario
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var anio = parseInt(document.getElementById("anio").value);

    // Verificar si la fecha es válida
    var esValida = validarFecha(dia, mes, anio);

    // Mostrar el mensaje correspondiente
    var mensaje = document.getElementById("mensaje");
    if (esValida) {
        mensaje.textContent = "La fecha " + dia + "/" + mes + "/" + anio + " es válida.";
    } else {
        mensaje.textContent = "La fecha " + dia + "/" + mes + "/" + anio + " es inválida.";
    }
}

// Función para validar la fecha
function validarFecha(dia, mes, anio) {
    // Verificar si el año es válido
    if (anio < 1900 || anio > 2100) {
        return false;
    }

    // Verificar si el mes es válido
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Verificar si el día es válido
    var ultimoDiaMes = new Date(anio, mes, 0).getDate(); // Obtener el último día del mes
    if (dia < 1 || dia > ultimoDiaMes) {
        return false;
    }

    // Si no se encontraron problemas, la fecha es válida
    return true;
}
