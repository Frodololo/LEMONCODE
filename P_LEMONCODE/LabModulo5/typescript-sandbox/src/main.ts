export {};

type Carta = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;
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

const valorDeCarta = (carta: Carta): number => (carta >= 10 ? 0.5 : carta);

const dameCarta = (): Carta => {
  let numero = Math.floor(Math.random() * 10) + 1;
  if (numero > 7) {
    numero += 2;
  }
  return numero as Carta;
};

const desahabilitarBotones = (): void => {
  (document.getElementById("da-carta") as HTMLButtonElement).disabled = true;
  (document.getElementById("plantarse") as HTMLButtonElement).disabled = true;
  (document.getElementById("adivinar") as HTMLButtonElement).disabled = true;
};

const desahabilitarBotonesAlPlantarse = (): void => {
  (document.getElementById("da-carta") as HTMLButtonElement).disabled = true;
  (document.getElementById("plantarse") as HTMLButtonElement).disabled = true;
  const botonAdivinar =document.getElementById("adivinar") as HTMLButtonElement;
  if (botonAdivinar) {
    botonAdivinar.disabled = false;
  }
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

const muestraPuntuacion = () => {
  let elementoPuntuacion = document.getElementById(
    "puntuacion"
  ) as HTMLParagraphElement;
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
};

const muestraMensajeTrasPlantarse = () => {
  const mensajeTrasPlantarse = document.getElementById(
    "mensaje-plantarse"
  ) as HTMLParagraphElement;
  if (juego.puntuacion < 4) {
    mensajeTrasPlantarse.innerHTML = "Has sido muy conservador";
  } else if (juego.puntuacion >= 4 && juego.puntuacion < 6) {
    mensajeTrasPlantarse.innerHTML = "Te ha entrado el canguelo, ¿eh?";
  } else if (juego.puntuacion >= 6) {
    mensajeTrasPlantarse.innerHTML = "Casi... casi...";
  }
};

const gestionarVictoria = () => {
  juego.estado = "ganado";
  const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;
  mensaje.innerHTML = "¡Victoria total!";
  desahabilitarBotones();
};

const gestionarGameOver = () => {
  juego.estado = "perdido";
  const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;

  if (juego.puntuacion > PUNTUACION_MAX) {
    mensaje.innerHTML = "Te has pasado de 7.5. Perdiste 🪦.";
  } else {
    mensaje.innerHTML = `Te has plantado con ${juego.puntuacion} puntos.`;
  }

  desahabilitarBotones();
};

const reiniciarJuego = (): void => {
  juego.estado = "jugando";
  juego.puntuacion = 0;

  const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;
  mensaje.innerHTML = "";
  const mensajePlantarse = document.getElementById(
    "mensaje-plantarse"
  ) as HTMLParagraphElement;
  mensajePlantarse.innerHTML = "";
  const mensajeAdivinar = document.getElementById(
    "mensaje-adivinar"
  ) as HTMLParagraphElement;
  mensajeAdivinar.innerHTML = "";

  (document.getElementById("da-carta") as HTMLButtonElement).disabled = false;
  (document.getElementById("plantarse") as HTMLButtonElement).disabled = false;

  const carta = document.getElementById("carta") as HTMLImageElement;
  carta.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

  const botonAdivinar = document.getElementById(
    "adivinar"
  ) as HTMLButtonElement;
  if (botonAdivinar) {
    botonAdivinar.style.display = "none";
    botonAdivinar.disabled = false;
  }

  muestraPuntuacion();
};

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  const botonAdivinar = document.getElementById(
    "adivinar"
  ) as HTMLButtonElement | null;
  if (botonAdivinar) {
    botonAdivinar.style.display = "none";
  }
});

const botonDameCarta = document.getElementById("da-carta") as HTMLButtonElement;
botonDameCarta.addEventListener("click", () => {
  if (juego.estado !== "jugando") return;

  const carta = dameCarta();
  muestraCarta(carta);

  juego.puntuacion += valorDeCarta(carta);
  muestraPuntuacion();

  if (juego.puntuacion === PUNTUACION_MAX) {
    gestionarVictoria();
  }

  if (juego.puntuacion > PUNTUACION_MAX) {
    gestionarGameOver();
  }
});

const botonPlantarse = document.getElementById(
  "plantarse"
) as HTMLButtonElement;
botonPlantarse.addEventListener("click", () => {
  if (juego.estado !== "jugando") return;

  juego.estado = "plantado";
  muestraMensajeTrasPlantarse();

  const botonAdivinar = document.getElementById(
    "adivinar"
  ) as HTMLButtonElement;
  if (botonAdivinar) {
    botonAdivinar.style.display = "inline-block";
    botonAdivinar.disabled = false;
  }
   const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;
  mensaje.innerHTML = `Te has plantado con ${juego.puntuacion} puntos.`;

  desahabilitarBotonesAlPlantarse();

  juego.estado = "adivinando";
});

const botonAdivinar = document.getElementById("adivinar") as HTMLButtonElement;
botonAdivinar.addEventListener("click", () => {
  if (juego.estado !== "adivinando") return;
  const mensajeAdivinar = document.getElementById(
    "mensaje-adivinar"
  ) as HTMLParagraphElement;
  mensajeAdivinar.innerHTML = "Esta hubiera sido tu siguiente carta...🃏.";
  const carta = dameCarta();
  muestraCarta(carta);
  const botonA = document.getElementById("adivinar") as HTMLButtonElement;
  botonA.disabled = true;

  juego.estado = "perdido";
});

const botonNuevaPartida = document.getElementById(
  "nuevaPartida"
) as HTMLButtonElement;
botonNuevaPartida.addEventListener("click", reiniciarJuego);
