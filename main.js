// main.js
// Abre y cierra la ventana modal
function abrirModal(idModal) {
    document.getElementById(idModal).style.display = 'flex';
}

function cerrarModal(idModal) {
    document.getElementById(idModal).style.display = 'none';
}

// Ejemplo de función para registrarse (debes adaptarlo según tu lógica)
function registrarse() {
    // Aquí puedes agregar la lógica para registrar al usuario
    // Por ahora, simplemente cerramos la ventana modal
    cerrarModal('modalRegistrarse');
}
