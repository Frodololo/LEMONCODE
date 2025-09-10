import { plantarse, adivinar, daCarta, muestraPuntuacion } from "./motor";
import { reiniciarJuego } from "./ui";

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
};
// Evento para el botón Nueva Partida
const botonNuevaPartida = document.getElementById("nuevaPartida");
if (
  botonNuevaPartida !== null &&
  botonNuevaPartida !== undefined &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  botonNuevaPartida.addEventListener("click", reiniciarJuego);
};
