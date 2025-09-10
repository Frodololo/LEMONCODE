import { juego, EstadoJuego, PUNTUACION_MAX } from "./modelo";
import {
  desahabilitarBotones,
  desahabilitarBotonesAlPlantarse,
  mostrarMensaje,
  muestraCarta,
} from "./ui";

// Devuelve el valor de la carta según su número
export const valorDeCarta = (carta: number): number =>
  carta >= 10 ? 0.5 : carta;
// Devuelve un numero aleatorio entre 1 y 10
export const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};
// Devuelve el número de la carta para el intervalo 1-7, 10-12
export const dameCarta = (numero: number): number =>
  numero > 7 ? numero + 2 : numero;
// Suma los puntos de la carta a la untuación actual
export const sumarPuntos = (puntos: number): number =>
  juego.puntuacion + puntos;
// Actualiza la puntuación
export const actualizarPuntuacion = (puntos: number): void => {
  juego.puntuacion = puntos;
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