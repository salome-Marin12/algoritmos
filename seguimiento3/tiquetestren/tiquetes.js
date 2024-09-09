     // Precios de los tiquetes según origen y destino
    const precios = {
        "Ciudad A": { "Ciudad B": 50, "Ciudad C": 80 },
        "Ciudad B": { "Ciudad A": 50, "Ciudad C": 60 },
        "Ciudad C": { "Ciudad A": 80, "Ciudad B": 60 }
    };

    // Manejar el evento de envío del formulario
    document.getElementById("formCompra").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

        // Obtener los valores del formulario
        let origen = document.getElementById("origen").value;
        let destino = document.getElementById("destino").value;
        let fecha = document.getElementById("fecha").value;
        let hora = document.getElementById("hora").value;
        let tipoTiquete = document.getElementById("tipoTiquete").value;
        let nombre = document.getElementById("nombre").value;
        let identificacion = document.getElementById("identificacion").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje");

        // Validar que el origen y destino no sean iguales
        if (origen === destino) {
            mensaje.textContent = "El origen y el destino no pueden ser iguales.";
            mensaje.style.color = "red";
            return;
        }

        // Calcular el costo del tiquete
        let costoTiquete = precios[origen][destino];
        if (tipoTiquete === "idaYVuelta") {
            costoTiquete *= 1.8; // Descuento por ida y vuelta
        }

        // Mostrar el resumen de la compra
        mensaje.innerHTML = `
            <h3>Resumen de la compra</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Identificación:</strong> ${identificacion}</p>
            <p><strong>Correo electrónico:</strong> ${email}</p>
            <p><strong>Origen:</strong> ${origen}</p>
            <p><strong>Destino:</strong> ${destino}</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>Hora:</strong> ${hora}</p>
            <p><strong>Tipo de tiquete:</strong> ${tipoTiquete === 'ida' ? 'Solo ida' : 'Ida y vuelta'}</p>
            <p><strong>Costo del tiquete:</strong> $${costoTiquete.toFixed(2)}</p>
            <button id="confirmarCompra">Confirmar Compra</button>
        `;

        // Manejar la confirmación de la compra
        document.getElementById("confirmarCompra").addEventListener("click", function() {
            mensaje.innerHTML = `<p>Transacción exitosa. ¡Gracias por su compra!</p>`;
            mensaje.style.color = "green";
        });
    });