import { juego, EstadoJuego, PUNTUACION_MAX } from "./modelo";
import {
  dameCarta,
  valorDeCarta,
  obtenerNumeroAleatorio,
  sumarPuntos,
  actualizarPuntuacion,
} from "./motor";

// Deshabilita todos los botones
export const desahabilitarBotones = (): void => {
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
export const desahabilitarBotonesAlPlantarse = (): void => {
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
// Muestra la imagen en el DOM
export const muestraCarta = (urlCarta: string): void => {
  const imagen = document.getElementById("carta") as HTMLImageElement;
  if (
    imagen !== null &&
    imagen !== undefined &&
    imagen instanceof HTMLImageElement
  ) {
    imagen.src = urlCarta;
  }
};
// Lógica para los mensajes
export const mostrarMensaje = (id: string, mensaje: string) => {
  const elemento = document.getElementById(id);
  if (
    elemento !== null &&
    elemento !== undefined &&
    elemento instanceof HTMLParagraphElement
  ) {
    elemento.innerHTML = mensaje;
  }
};
// Reinicia el juego y la interfaz
export const reiniciarJuego = (): void => {
  juego.estado = "jugando";
  juego.puntuacion = 0;
  mostrarMensaje("mensaje", "");
  mostrarMensaje("mensaje-plantarse", "");
  mostrarMensaje("mensaje-adivinar", "");
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
// Nos da la url de la imagen de la carta mostrada
export const obtenerUrlCarta = (carta: number) => {
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
// Muestra el mensaje de puntuación según el estado
export const muestraPuntuacion = () => {
  if (juego.estado === "plantado") {
    mostrarMensaje("puntuacion", "");
    return;
  }
  if (juego.puntuacion > PUNTUACION_MAX) {
    mostrarMensaje("puntuacion", "GAME OVER");
  } else if (juego.puntuacion === PUNTUACION_MAX) {
    mostrarMensaje(
      "puntuacion",
      "Increible performance. Lo clavaste: 7.5 puntos para el campeón"
    );
  } else {
    mostrarMensaje("puntuacion", `Llevas ${juego.puntuacion} puntos.`);
  }
};
// Muestra el mensaje tras plantarse según la puntuación
export const muestraMensajeTrasPlantarse = () => {
  if (juego.puntuacion < 4) {
    mostrarMensaje("mensaje-plantarse", "Has sido muy conservador");
  } else if (juego.puntuacion >= 4 && juego.puntuacion < 6) {
    mostrarMensaje("mensaje-plantarse", "Te ha entrado el canguelo, ¿eh?");
  } else if (juego.puntuacion >= 6) {
    mostrarMensaje("mensaje-plantarse", "Casi... casi...");
  }
};
// Muestra mensaje con puntuación al plantarse
export const mostrarMensajePlantado = (): void => {
  mostrarMensaje("mensaje", `Te has plantado con ${juego.puntuacion} puntos.`);
};
// Devuelve el estado de la partida (solo para ganar o perder)
export const obtenerEstadoPartida = () => {
  if (juego.puntuacion === PUNTUACION_MAX) {
    juego.estado = "ganado";
  } else if (juego.puntuacion > PUNTUACION_MAX) {
    juego.estado = "perdido";
  }
  return juego.estado;
};
// Muestra el mensaje final
export const mostrarMensajeEstadoPartida = (estado: EstadoJuego) => {
  switch (estado) {
    case "ganado":
      mostrarMensaje("mensaje", "¡Victoria total!");
      break;
    case "perdido":
      if (juego.puntuacion > PUNTUACION_MAX) {
        mostrarMensaje("mensaje", "Te has pasado de 7.5. Perdiste 🪦.");
      } else {
        mostrarMensaje(
          "mensaje",
          `Te has plantado con ${juego.puntuacion} puntos.`
        );
      }
      break;
    default:
      mostrarMensaje("mensaje", "");
  }
};
// Gestiona el estado de la partida tras cada acción
export const gestionarEstadoPartida = () => {
  juego.estado = obtenerEstadoPartida();
  mostrarMensajeEstadoPartida(juego.estado);
  if (juego.estado === "ganado" || juego.estado === "perdido") {
    desahabilitarBotones();
  }
};
// Lógica al pulsar "Dame carta"
export const daCarta = () => {
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
// Lógica al pulsar Plantarse
export const plantarse = (): void => {
  if (juego.estado !== "jugando") return;
  juego.estado = "plantado";
  muestraPuntuacion();
  muestraMensajeTrasPlantarse();
  mostrarMensajePlantado();
  desahabilitarBotonesAlPlantarse();
  const botonAdivinar = document.getElementById("adivinar");
  if (botonAdivinar instanceof HTMLButtonElement) {
    botonAdivinar.style.display = "inline-block";
    botonAdivinar.disabled = false;
  }
  desahabilitarBotonesAlPlantarse();
};
// Lógica al pulsar Adivinar
export const adivinar = (): void => {
  if (juego.estado !== "plantado" && juego.estado !== "adivinando") return;
  // Limpiar otros mensajes
  mostrarMensaje("mensaje-plantarse", "");
  mostrarMensaje("mensaje", "");
  // Mensaje exclusivo de adivinar
  mostrarMensaje(
    "mensaje-adivinar",
    "Esta hubiera sido tu siguiente carta...🃏"
  );
  // Deshabilitar el botón Adivinar
  const botonAdivinar = document.getElementById("adivinar");
  if (botonAdivinar instanceof HTMLButtonElement) botonAdivinar.disabled = true;
  const numero = obtenerNumeroAleatorio();
  const carta = dameCarta(numero);
  muestraCarta(obtenerUrlCarta(carta));
  juego.estado = "perdido";
  desahabilitarBotones();
};
