import { juego } from "./modelo";

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