 // Datos de prueba para validar el registro
 const estudiantes = [
    { codigo: "12345", carrera: "Ingeniería" },
    { codigo: "67890", carrera: "Medicina" }
];

const actividadesDeportivas = [
    { nombre: "Fútbol", cupos: 10, semestre: 1 },
    { nombre: "Baloncesto", cupos: 5, semestre: 1 },
    { nombre: "Natación", cupos: 0, semestre: 2 }
];

// Manejar el evento de envío del formulario
document.getElementById("formRegistro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

    // Obtener los valores del formulario
    let codigoEstudiante = document.getElementById("codigo").value;
    let carrera = document.getElementById("carrera").value;
    let actividadDeportiva = document.getElementById("actividad").value;
    let semestre = parseInt(document.getElementById("semestre").value);

    let mensaje = document.getElementById("mensaje");

    // Validar si el estudiante está registrado
    let estudianteValido = estudiantes.find(est => est.codigo === codigoEstudiante && est.carrera === carrera);

    if (!estudianteValido) {
        mensaje.textContent = "No se puede registrar. Estudiante no registrado o no pertenece a la carrera.";
        mensaje.style.color = "red";
        return;
    }

    // Verificar disponibilidad de cupos en la actividad y el semestre
    let actividadValida = actividadesDeportivas.find(act => act.nombre === actividadDeportiva && act.semestre === semestre);

    if (!actividadValida) {
        mensaje.textContent = "No se encontró la actividad deportiva en el semestre seleccionado.";
        mensaje.style.color = "red";
        return;
    }

    if (actividadValida.cupos <= 0) {
        mensaje.textContent = "No hay cupos disponibles en la actividad seleccionada.";
        mensaje.style.color = "red";
        return;
    }

    // Registro exitoso
    actividadValida.cupos -= 1; // Reducir el número de cupos
    mensaje.textContent = `Registro exitoso en ${actividadDeportiva}. Cupos restantes: ${actividadValida.cupos}`;
    mensaje.style.color = "green";
});