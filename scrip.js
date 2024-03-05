function ingresarNombre() {
    // Obtener el nombre del usuario
    const nombreUsuario = prompt("¿Cuál es tu nombre?");

    // Actualizar el nombre en la página
    const nombreElement = document.getElementById("nombre");
    nombreElement.textContent = nombreUsuario;

    }