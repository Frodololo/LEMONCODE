/* 
Hay dos botones: tirar y plantarse
Número aleatorio del 1-6 => si sale 6: juego finalizado
Si sale del 1-5 sumamos puntuación
si la puntuación llega a 50 puntos o más se gana el juego
si se pulsa el botón de plantarse, el juego acaba con la puntuación actual

se muestra en pantalla: la imagen del dado // puntuación acumulada // mensaje situación: ganar, perder, plantarse

si se gana o pierde, deshabilitar botones

variables: 
    puntuación
    juegoEnActivo
    numeroDelDado

*/

let puntuacion: number = 0;
let juegoEnActivo: boolean = true;

const botonTirar = document.getElementById("tirarDado") as HTMLButtonElement;
const botonPlantarse = document.getElementById("terminarPartida") as HTMLButtonElement;
const imagenDado = document.getElementById("imagen-dado") as HTMLImageElement;
const parrafoPuntuacion = document.getElementById("puntuacion") as HTMLParagraphElement;
const parrafoMensaje = document.getElementById("mensaje") as HTMLParagraphElement;

const tirarDado = (): number => Math.floor(Math.random() * 6) + 1;

const muestraImagen = (numero: number) => {
    imagenDado.src = `img/dado${numero}.png`;
    imagenDado.alt = `Dado ${numero}`;
};

const desactivarJuego = () => {
    juegoEnActivo = false;
    botonTirar.disabled = true;
    botonPlantarse.disabled = true;
}

botonTirar.addEventListener("click", () => {
    if (!juegoEnActivo) return;

    const dado = tirarDado();
    muestraImagen(dado);

    if (dado === 6) {
        parrafoMensaje.textContent = "Has sacado un 6. ¡Has perdido!";
        desactivarJuego();
        return;
    }

    puntuacion += dado;
    parrafoPuntuacion.textContent = `Puntuación: ${puntuacion}`;

    if (puntuacion >= 50) {
        parrafoMensaje.textContent = `¡Has ganado con ${puntuacion} puntos!`;
        desactivarJuego();
    }

});

botonPlantarse.addEventListener("click", () => {
    if (!juegoEnActivo) return;
    parrafoMensaje.textContent = `Te has plantado con ${puntuacion} puntos.`
    desactivarJuego();
});



