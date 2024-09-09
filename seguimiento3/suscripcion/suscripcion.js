   // Precios por plan
    const preciosPlan = {
    "mensual": 30,
    "trimestral": 80,
    "anual": 300
};

document.getElementById("formSuscripcion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores del formulario
    let edad = parseInt(document.getElementById("edad").value);
    let plan = document.getElementById("plan").value;
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let mensaje = document.getElementById("mensaje");

    // Validar que el usuario sea mayor de edad
    if (edad < 18) {
        mensaje.textContent = "No puedes suscribirte, debes ser mayor de edad.";
        mensaje.style.color = "red";
        return;
    }

    // Calcular el costo total según el tipo de plan
    let costoTotal = preciosPlan[plan];
    
    if (plan === "trimestral" || plan === "anual") {
        costoTotal *= cuotas;
    }

    // Mostrar el resumen de la suscripción
    mensaje.innerHTML = `
        <h3>Resumen de la Suscripción</h3>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Tipo de Plan:</strong> ${plan.charAt(0).toUpperCase() + plan.slice(1)}</p>
        <p><strong>Número de Cuotas:</strong> ${cuotas}</p>
        <p><strong>Costo Total:</strong> $${costoTotal.toFixed(2)}</p>
    `;
    mensaje.style.color = "black";
});

// Opción para salir del programa
document.getElementById("salir").addEventListener("click", function() {
    let salir = prompt("¿Estás seguro de que quieres salir del programa? (presiona 's' para salir)");

    if (salir.toLowerCase() === 's') {
        document.body.innerHTML = "<h1>Has salido del programa.</h1>";
    }
});