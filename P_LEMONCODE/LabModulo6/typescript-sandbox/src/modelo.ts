export type EstadoJuego =
  | "jugando"
  | "plantado"
  | "ganado"
  | "perdido"
  | "adivinando";

export const PUNTUACION_MAX = 7.5;

export interface Juego {
  puntuacion: number;
  estado: EstadoJuego;
}

export let juego: Juego = {
  puntuacion: 0,
  estado: "jugando",
};
