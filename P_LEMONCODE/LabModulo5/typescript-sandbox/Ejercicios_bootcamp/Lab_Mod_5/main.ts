export {};

let puntuacion: number = 0;
let juegoActivo: boolean = true;
let jugadorSePlanta: boolean = false;

const hasSuperadoLaPuntuacionNecesaria = () => puntuacion > 7.5;
const hasClavadoLaPuntuacion = () => puntuacion === 7.5;

const muestraPuntuacion = () => {
  let elementoPuntuacion = document.getElementById(
    "puntuacion"
  ) as HTMLDivElement;
  if (jugadorSePlanta) {
    elementoPuntuacion.innerHTML = "";
    return;
  }

  if (puntuacion > 7.5) {
    elementoPuntuacion.innerHTML = "GAME OVER";
  } else if (puntuacion === 7.5) {
    elementoPuntuacion.innerHTML =
      "Increible performance. Lo clavaste: 7.5 puntos para el campeón";
  } else {
    elementoPuntuacion.innerHTML = `Llevas ${puntuacion} puntos.`;
  }
};

document.addEventListener("DOMContentLoaded", () => muestraPuntuacion());

const dameCarta = (): number => {
  let numero = Math.floor(Math.random() * 10) + 1;
  if (numero > 7) {
    numero = numero + 2;
  }
  return numero;
};

const gestionarVictoria = () => {
  juegoActivo = false;
  const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;
  if (puntuacion === 7.5) {
    mensaje.innerHTML = "";
  }

  (document.getElementById("da-carta") as HTMLButtonElement).disabled = true;
  (document.getElementById("plantarse") as HTMLButtonElement).disabled = true;
};

const gestionarGameOver = () => {
  juegoActivo = false;

  const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;
  if (puntuacion > 7.5) {
    mensaje.innerHTML = "Te has pasado de 7.5. Perdiste 🪦.";
  } else {
    mensaje.innerHTML = `Te has plantado con ${puntuacion} puntos.`;
  }

  (document.getElementById("da-carta") as HTMLButtonElement).disabled = true;
  (document.getElementById("plantarse") as HTMLButtonElement).disabled = true;
};

const muestraCarta = (carta: number): void => {
  const imagen = document.getElementById("carta") as HTMLImageElement;

  switch (carta) {
    case 1:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const muestraMensajeTrasPlantarse = () => {
  const mensajeTrasPlantarse = document.getElementById(
    "mensaje-plantarse"
  ) as HTMLParagraphElement;
  if (puntuacion < 4) {
    mensajeTrasPlantarse.innerHTML = "Has sido muy conservador";
  } else if (puntuacion >= 4 && puntuacion < 6) {
    mensajeTrasPlantarse.innerHTML = "Te ha entrado el canguelo, ¿eh?";
  } else if (puntuacion >= 6) {
    mensajeTrasPlantarse.innerHTML = "Casi... casi...";
  }
};
const botonDameCarta = document.getElementById("da-carta") as HTMLButtonElement;
botonDameCarta.addEventListener("click", () => {
  if (!juegoActivo) return;

  const carta = dameCarta();
  muestraCarta(carta);

  let valorCarta = carta >= 10 ? 0.5 : carta;

  puntuacion += valorCarta;
  muestraPuntuacion();

  if (hasClavadoLaPuntuacion()) {
    gestionarVictoria();
  }

  if (hasSuperadoLaPuntuacionNecesaria()) {
    gestionarGameOver();
  }
});

const botonPlantarse = document.getElementById(
  "plantarse"
) as HTMLButtonElement;
botonPlantarse.addEventListener("click", () => {
  if (!juegoActivo) return;
  jugadorSePlanta = true;
  muestraMensajeTrasPlantarse();
  gestionarGameOver();
});
