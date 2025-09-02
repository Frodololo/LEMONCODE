const muestraMensajeSegunHora = (hora: number): string => {
    if (hora >= 6 && hora <= 12) {
        return "Buenos días"
    }
    if (hora >= 13 && hora <= 20) {
        return "Buenas tardes"
    }
    return "Buenas noches"
};

const inputHora = document.getElementById("hora") as HTMLInputElement;
const boton = document.getElementById("saludo");
const mensaje = document.getElementById("resultado") as HTMLDivElement;

boton?.addEventListener("click", () => {
    const hora = parseInt(inputHora.value);
    if (!isNaN(hora) && hora >=0 && hora <= 23) {
        mensaje.innerText = muestraMensajeSegunHora(hora);
    } else {
        mensaje.innerText = "Introduce una hora válida entre 0 y 23"
    }
});




