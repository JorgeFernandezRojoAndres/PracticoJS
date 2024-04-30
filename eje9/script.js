// Array para almacenar los datos de las personas
var personas = [];

// Función para agregar una persona al array y mostrarla en la tabla
function agregarPersona() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;

    // Crear un objeto con los datos de la persona
    var persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        correo: correo
    };

    // Agregar el objeto persona al array de personas
    personas.push(persona);

    // Mostrar las personas en la tabla
    mostrarPersonas();
}

// Función para mostrar las personas en la tabla
function mostrarPersonas() {
    var cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = ""; // Limpiar el contenido de la tabla

    // Recorrer el array de personas y agregar cada una a la tabla
    personas.forEach(function(persona) {
        var fila = "<tr>" +
                      "<td>" + persona.nombre + "</td>" +
                      "<td>" + persona.apellido + "</td>" +
                      "<td>" + persona.edad + "</td>" +
                      "<td>" + persona.correo + "</td>" +
                  "</tr>";
        cuerpoTabla.innerHTML += fila;
    });
}
