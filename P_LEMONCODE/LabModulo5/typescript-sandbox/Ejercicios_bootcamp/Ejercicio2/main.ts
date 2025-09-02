const cambiar = document.getElementById("cambiar") as HTMLInputElement;
const botoncambiar = document.getElementById(
  "botonCambiar"
) as HTMLButtonElement;
const dolares = document.getElementById("resultado") as HTMLParagraphElement;

function cambio(numero: number) {
  const tasa = 1.09;
  return numero * tasa;
}
botoncambiar.addEventListener("click", () => {
  const resultado = cambio(parseFloat(cambiar.value));
  dolares.innerHTML = resultado.toString();
});