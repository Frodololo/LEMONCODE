const calculoIva = (precio: number, iva: number ) => {
    const precioSinIva = precio / (1 + iva / 100);
    const ahorroIva = precio - precioSinIva;

    return {
        precioSinIva,
        ahorroIva
    };

};

const inputPrecio = document.getElementById("precio") as HTMLInputElement;
const selectIva = document.getElementById("iva") as HTMLSelectElement;
const botonCalcular = document.getElementById("calcular") as HTMLButtonElement;
const resultadoElemento = document.getElementById("resultado") as HTMLParagraphElement;

botonCalcular.addEventListener("click", () => {
  const precio = parseFloat(inputPrecio.value);
  const iva = parseFloat(selectIva.value);
  const resultado = calculoIva(precio, iva);
  resultadoElemento.innerHTML = 
  "Precio sin IVA:" + resultado.precioSinIva + "€<br>" +
  "Ahorro (IVA): " + resultado.ahorroIva + "€";
});