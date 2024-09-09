  // Duración de cada luz en milisegundos
  const tiempoRojo = 5000;    // 5 segundos
  const tiempoAmarillo = 2000; // 2 segundos
  const tiempoVerde = 5000;   // 5 segundos

  // Referencias a los elementos HTML
  const luzRoja = document.getElementById('rojo');
  const luzAmarilla = document.getElementById('amarillo');
  const luzVerde = document.getElementById('verde');

  // Función que controla el ciclo del semáforo
  function cicloSemaforo() {
      // Rojo: Detenerse
      luzRoja.classList.add('rojo');
      luzAmarilla.classList.remove('amarillo');
      luzVerde.classList.remove('verde');
      console.log("Luz Roja: Detenerse");

      // Cambiar a verde después de tiempoRojo
      setTimeout(() => {
          // Verde: Avanzar
          luzRoja.classList.remove('rojo');
          luzVerde.classList.add('verde');
          console.log("Luz Verde: Avanzar");

          // Cambiar a amarillo después de tiempoVerde
          setTimeout(() => {
              // Amarillo: Precaución
              luzVerde.classList.remove('verde');
              luzAmarilla.classList.add('amarillo');
              console.log("Luz Amarilla: Precaución");

              // Volver a rojo después de tiempoAmarillo
              setTimeout(cicloSemaforo, tiempoAmarillo);
          }, tiempoVerde);
      }, tiempoRojo);
  }

  // Iniciar el ciclo del semáforo
  cicloSemaforo();