     // Datos simulados de reservas ya realizadas
     const reservas = [];

     // Horario disponible: de 8 a 18 horas
     const horarioLaboratorio = { apertura: 8, cierre: 18 };

     // Manejar el evento de envío del formulario
     document.getElementById("formReserva").addEventListener("submit", function(event) {
         event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

         // Obtener los valores del formulario
         let fecha = document.getElementById("fecha").value;
         let horaInicio = parseInt(document.getElementById("hora").value);
         let duracion = parseInt(document.getElementById("duracion").value);
         let usuario = document.getElementById("usuario").value;
         let mensaje = document.getElementById("mensaje");

         // Validar la hora de inicio de la reserva
         if (horaInicio < horarioLaboratorio.apertura || horaInicio + duracion > horarioLaboratorio.cierre) {
             mensaje.textContent = "La reserva no es posible. El horario del laboratorio es de 8:00 a 18:00.";
             mensaje.style.color = "red";
             return;
         }

         // Verificar disponibilidad (no se superponen reservas)
         let conflicto = reservas.find(reserva => reserva.fecha === fecha &&
             (horaInicio < reserva.horaInicio + reserva.duracion && horaInicio + duracion > reserva.horaInicio));

         if (conflicto) {
             mensaje.textContent = "No es posible realizar la reserva. Ya existe una reserva en el horario solicitado.";
             mensaje.style.color = "red";
             return;
         }

         // Registrar la reserva
         reservas.push({ fecha, horaInicio, duracion, usuario });
         mensaje.textContent = `Reserva confirmada para ${usuario} el ${fecha} de ${horaInicio}:00 a ${horaInicio + duracion}:00 horas.`;
         mensaje.style.color = "green";

         // Limpiar el formulario
         document.getElementById("formReserva").reset();
     });