/*
// Primer refactor : interfaz para el estado del Juego
-
let puntuacion: number = 0;
let juegoActivo: boolean = true;
let jugadorSePlanta: boolean = false;
-
interface Juego {
  puntuacion: number;
  estado: EstadoJuego;
}

let juego: Juego = {
  puntuacion: 0,
  estado: "jugando",
};

// Segundo refactor : mejorar la puntuación máxima y no usar número
-
const hasSuperadoLaPuntuacionNecesaria = () => puntuacion > 7.5;
const hasClavadoLaPuntuacion = () => puntuacion === 7.5;
-
const PUNTUACION_MAX = 7.5;

if (juego.puntuacion === PUNTUACION_MAX) {
  gestionarVictoria();
}

if (juego.puntuacion > PUNTUACION_MAX) {
  gestionarGameOver();
}

// Tercer refactor: función para deshabilitar botones

const deshabilitarBotones = (): void => {
  (document.getElementById("da-carta") as HTMLButtonElement).disabled = true;
  (document.getElementById("plantarse") as HTMLButtonElement).disabled = true;
};

// Cuarto refactor: cartas y valores
-
const dameCarta = (): number => {
  let numero = Math.floor(Math.random() * 10) + 1;
  if (numero > 7) {
    numero = numero + 2;
  }
  return numero;
};
-

type Carta = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;

const dameCarta = (): Carta => {
  let numero = Math.floor(Math.random() * 10) + 1;
  if (numero > 7) {
    numero += 2;
  }
  return numero as Carta;
};

// Quinto refactor: gestion de estados finales (victoria y game over)
-
const gestionarVictoria = () => {
  juegoActivo = false;
  // ...
  botonDaCarta.disabled = true;
  botonPlantarse.disabled = true;
};

const gestionarGameOver = () => {
  juegoActivo = false;
  // ...
  botonDaCarta.disabled = true;
  botonPlantarse.disabled = true;
};
-

const gestionarVictoria = (): void => {
  juego.estado = "ganado";
  // ...
  deshabilitarBotones();
};

const gestionarGameOver = (): void => {
  juego.estado = "perdido";
  // ...
  deshabilitarBotones();
};
*/