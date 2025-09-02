const IVA = 0.21;

const calculoIva = (precioConIva: number) => {
    const precioSinIva = precioConIva / (1 + IVA);
    const ahorroIva = precioConIva - precioSinIva;

    return {
        precioSinIva,
        ahorroIva
    };

};

const inputPrecio = document.getElementById("precio") as HTMLInputElement;
const botonCalcular = document.getElementById("calcular") as HTMLButtonElement;
const resultadoElemento = document.getElementById("resultado") as HTMLParagraphElement;

botonCalcular.addEventListener("click", () => {
  const precioConIva = parseInt(inputPrecio.value);
  const resultado = calculoIva(precioConIva);
  resultadoElemento.innerHTML = 
  "Precio sin IVA:" + resultado.precioSinIva + "€<br>" +
  "Ahorro (IVA): " + resultado.ahorroIva + "€";
});