import { juego } from "./modelo";
import { muestraPuntuacion } from "./motor";

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