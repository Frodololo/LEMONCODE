export {};

type EstadoJuego = "jugando" | "plantado" | "ganado" | "perdido" | "adivinando";

const PUNTUACION_MAX = 7.5;

interface Juego {
  puntuacion: number;
  estado: EstadoJuego;
}

let juego: Juego = {
  puntuacion: 0,
  estado: "jugando",
};
// Devuelve el valor de la carta según su número
const valorDeCarta = (carta: number): number => (carta >= 10 ? 0.5 : carta);
// Devuelve un numero aleatorio entre 1 y 10
const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};
// Devuelve el número de la carta para el intervalo 1-7, 10-12
const dameCarta = (numero: number): number =>
  numero > 7 ? numero + 2 : numero;
// Suma los puntos de la carta a la untuación actual
const sumarPuntos = (puntos: number): number => juego.puntuacion + puntos;
// Actualiza la puntuación
const actualizarPuntuacion = (puntos: number): void => {
  juego.puntuacion = puntos;
};
// Deshabilita todos los botones
const desahabilitarBotones = (): void => {
  const botonDameCarta = document.getElementById("da-carta");
  const botonPlantarse = document.getElementById("plantarse");
  const botonAdivinar = document.getElementById("adivinar");

  if (botonDameCarta instanceof HTMLButtonElement)
    botonDameCarta.disabled = true;
  if (botonPlantarse instanceof HTMLButtonElement)
    botonPlantarse.disabled = true;
  if (botonAdivinar instanceof HTMLButtonElement) botonAdivinar.disabled = true;
};
// Desabilita los botones para adivinar
const desahabilitarBotonesAlPlantarse = (): void => {
  const botonDameCarta = document.getElementById("da-carta");
  const botonPlantarse = document.getElementById("plantarse");
  const botonAdivinar = document.getElementById("adivinar");

  if (botonDameCarta instanceof HTMLButtonElement)
    botonDameCarta.disabled = true;
  if (botonPlantarse instanceof HTMLButtonElement)
    botonPlantarse.disabled = true;
  if (botonAdivinar instanceof HTMLButtonElement)
    botonAdivinar.disabled = false;
};
// Nos da la url de la imagen de la carta mostrada
const obtenerUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};
// Muestra la imagen en el DOM
const muestraCarta = (urlCarta: string): void => {
  const imagen = document.getElementById("carta") as HTMLImageElement;
  if (
    imagen !== null &&
    imagen !== undefined &&
    imagen instanceof HTMLImageElement
  ) {
    imagen.src = urlCarta;
  }
};
// Muestra el mensaje de puntuación según el estado
const muestraPuntuacion = () => {
  let elementoPuntuacion = document.getElementById("puntuacion");
  if (
    elementoPuntuacion !== null &&
    elementoPuntuacion !== undefined &&
    elementoPuntuacion instanceof HTMLElement
  ) {
    if (juego.estado === "plantado") {
      elementoPuntuacion.innerHTML = "";
      return;
    }

    if (juego.puntuacion > PUNTUACION_MAX) {
      elementoPuntuacion.innerHTML = "GAME OVER";
    } else if (juego.puntuacion === PUNTUACION_MAX) {
      elementoPuntuacion.innerHTML =
        "Increible performance. Lo clavaste: 7.5 puntos para el campeón";
    } else {
      elementoPuntuacion.innerHTML = `Llevas ${juego.puntuacion} puntos.`;
    }
  }
};
// Muestra el mensaje tras plantarse según la puntuación
const muestraMensajeTrasPlantarse = () => {
  const mensajeTrasPlantarse = document.getElementById("mensaje-plantarse");
  if (
    mensajeTrasPlantarse !== null &&
    mensajeTrasPlantarse !== undefined &&
    mensajeTrasPlantarse instanceof HTMLParagraphElement
  ) {
    if (juego.puntuacion < 4) {
      mensajeTrasPlantarse.innerHTML = "Has sido muy conservador";
    } else if (juego.puntuacion >= 4 && juego.puntuacion < 6) {
      mensajeTrasPlantarse.innerHTML = "Te ha entrado el canguelo, ¿eh?";
    } else if (juego.puntuacion >= 6) {
      mensajeTrasPlantarse.innerHTML = "Casi... casi...";
    }
  }
};
// Muestra mensaje con puntuación al plantarse
const mostrarMensajePlantado = (): void => {
  const elementoMensaje = document.getElementById("mensaje");
  if (
    elementoMensaje !== null &&
    elementoMensaje !== undefined &&
    elementoMensaje instanceof HTMLParagraphElement
  ) {
    elementoMensaje.innerHTML = `Te has plantado con ${juego.puntuacion} puntos.`;
  }
};
// Devuelve el estado de la partida (solo para ganar o perder)
const obtenerEstadoPartida = () => {
  if (juego.puntuacion === PUNTUACION_MAX) {
    juego.estado = "ganado";
  } else if (juego.puntuacion > PUNTUACION_MAX) {
    juego.estado = "perdido";
  }
  return juego.estado;
};
// Muestra el mensaje final
const mostrarMensajeEstadoPartida = (estado: EstadoJuego) => {
  const elementoMensaje = document.getElementById("mensaje");

  if (
    elementoMensaje !== null &&
    elementoMensaje !== undefined &&
    elementoMensaje instanceof HTMLParagraphElement
  ) {
    switch (estado) {
      case "ganado":
        elementoMensaje.innerHTML = "¡Victoria total!";
        break;

      case "perdido":
        if (juego.puntuacion > PUNTUACION_MAX) {
          elementoMensaje.innerHTML = "Te has pasado de 7.5. Perdiste 🪦.";
        } else {
          elementoMensaje.innerHTML = `Te has plantado con ${juego.puntuacion} puntos.`;
        }
        break;

      default:
        elementoMensaje.innerHTML = "";
    }
  }
};
// Gestiona el estado de la partida tras cada acción
const gestionarEstadoPartida = () => {
  juego.estado = obtenerEstadoPartida();
  mostrarMensajeEstadoPartida(juego.estado);

  if (juego.estado === "ganado" || juego.estado === "perdido") {
    desahabilitarBotones();
  }
};
// Reinicia el juego y la interfaz
const reiniciarJuego = (): void => {
  juego.estado = "jugando";
  juego.puntuacion = 0;

  const mensaje = document.getElementById("mensaje");
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLParagraphElement
  )
    mensaje.innerHTML = "";
  const mensajePlantarse = document.getElementById("mensaje-plantarse");
  if (
    mensajePlantarse !== null &&
    mensajePlantarse !== undefined &&
    mensajePlantarse instanceof HTMLParagraphElement
  )
    mensajePlantarse.innerHTML = "";
  const mensajeAdivinar = document.getElementById("mensaje-adivinar");
  if (
    mensajeAdivinar !== null &&
    mensajeAdivinar !== undefined &&
    mensajeAdivinar instanceof HTMLParagraphElement
  )
    mensajeAdivinar.innerHTML = "";
  (document.getElementById("da-carta") as HTMLButtonElement).disabled = false;
  (document.getElementById("plantarse") as HTMLButtonElement).disabled = false;

  const carta = document.getElementById("carta");
  if (
    carta !== null &&
    carta !== undefined &&
    carta instanceof HTMLImageElement
  )
    carta.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

  const botonDameCarta = document.getElementById("da-carta");
  if (botonDameCarta instanceof HTMLButtonElement)
    botonDameCarta.disabled = false;

  const botonPlantarse = document.getElementById("plantarse");
  if (botonPlantarse instanceof HTMLButtonElement)
    botonPlantarse.disabled = false;

  const botonAdivinar = document.getElementById("adivinar");
  if (botonAdivinar instanceof HTMLButtonElement) {
    botonAdivinar.style.display = "none";
    botonAdivinar.disabled = false;
  }
  muestraPuntuacion();
};
// Inicia la interfaz al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  const botonAdivinar = document.getElementById(
    "adivinar"
  ) as HTMLButtonElement | null;
  if (botonAdivinar) {
    botonAdivinar.style.display = "none";
  }
});
// Lógica al pulsar "Dame carta"
const daCarta = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = dameCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  muestraCarta(urlCarta);
  const puntosCarta = valorDeCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
  gestionarEstadoPartida();
};
// Evento para el botón Dame Carta
const botonDameCarta = document.getElementById("da-carta");
if (
  botonDameCarta !== null &&
  botonDameCarta !== undefined &&
  botonDameCarta instanceof HTMLButtonElement
) {
  botonDameCarta.addEventListener("click", () => {
    daCarta();
  });
}
// Lógica al pulsar Plantarse
const plantarse = (): void => {
  if (juego.estado !== "jugando") return;

  juego.estado = "plantado";
  muestraPuntuacion();
  muestraMensajeTrasPlantarse();
  mostrarMensajePlantado();
  desahabilitarBotonesAlPlantarse();

  const botonAdivinar = document.getElementById("adivinar");
  if (botonAdivinar instanceof HTMLButtonElement) {
    botonAdivinar.style.display = "inline-block"; //
    botonAdivinar.disabled = false;
  }

  desahabilitarBotonesAlPlantarse();
};
// Evento para el botón Plantarse
const botonPlantarse = document.getElementById("plantarse");
if (
  botonPlantarse !== null &&
  botonPlantarse !== undefined &&
  botonPlantarse instanceof HTMLButtonElement
) {
  botonPlantarse.addEventListener("click", () => {
    plantarse();
  });
}
// Lógica al pulsar Adivinar
const adivinar = (): void => {
  if (juego.estado !== "plantado" && juego.estado !== "adivinando") return;

  // Limpiar otros mensajes
  const mensajePlantarse = document.getElementById("mensaje-plantarse");
  if (mensajePlantarse instanceof HTMLParagraphElement)
    mensajePlantarse.innerHTML = "";

  const mensaje = document.getElementById("mensaje");
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLParagraphElement
  )
    mensaje.innerHTML = "";

  // Mensaje exclusivo de adivinar
  const mensajeAdivinar = document.getElementById("mensaje-adivinar");
  if (
    mensajeAdivinar !== null &&
    mensajeAdivinar !== undefined &&
    mensajeAdivinar instanceof HTMLParagraphElement
  ) {
    mensajeAdivinar.innerHTML = "Esta hubiera sido tu siguiente carta...🃏";
  }
  // Deshabilitar el botón Adivinar
  const botonAdivinar = document.getElementById("adivinar");
  if (botonAdivinar instanceof HTMLButtonElement) botonAdivinar.disabled = true;

  const numero = obtenerNumeroAleatorio();
  const carta = dameCarta(numero);
  muestraCarta(obtenerUrlCarta(carta));

  juego.estado = "perdido";
  desahabilitarBotones();
};
// Evento para el botón Adivinar
const botonAdivinar = document.getElementById("adivinar");
if (
  botonAdivinar !== null &&
  botonAdivinar !== undefined &&
  botonAdivinar instanceof HTMLButtonElement
) {
  botonAdivinar.addEventListener("click", () => {
    adivinar();
  });
}

// Evento para el botón Nueva Partida
const botonNuevaPartida = document.getElementById("nuevaPartida");
if (
  botonNuevaPartida !== null &&
  botonNuevaPartida !== undefined &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  botonNuevaPartida.addEventListener("click", reiniciarJuego);
}
