const TARIFA_HORAS = 25;
const inputHoras = document.getElementById("horas") as HTMLInputElement;
const botonCalcular = document.getElementById("calcular") as HTMLButtonElement;
const resultadoElemento = document.getElementById("resultado") as HTMLParagraphElement;

//Función calculo

const calcularTotal = (horas: number): number => TARIFA_HORAS * horas;

/*function calcularTotal(horas: number) {
    return TARIFA_HORAS * horas;
}*/

//Evento para el botón

botonCalcular.addEventListener("click", () => {
    const horasTrabajadas = parseInt(inputHoras.value);
    const total = calcularTotal(horasTrabajadas);
    resultadoElemento.innerHTML = `Total a pagar: ${total.toFixed(2)}`;
});
