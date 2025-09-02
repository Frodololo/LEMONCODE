const calcularNota = (
  nota1: number,
  nota2: number,
  nota3: number,
  nota4: number
): string => {
  if (nota1 <= 3 || nota2 <= 3 || nota3 <= 3 || nota4 <= 3) {
    return "Debido a tus calificaciones eres NO APTO para la consecución del título.";
  }

  const mediaExamenes = (nota1 + nota2 + nota3 + nota4) / 4;

  let calificacion: string;
  if (mediaExamenes < 5) {
    calificacion = "INSUFICIENTE"
  } else if (mediaExamenes >= 5 && mediaExamenes <= 6) {
    calificacion = "SUFICIENTE"
  } else if (mediaExamenes >=7 && mediaExamenes <= 9) {
    calificacion = "NOTABLE"
  } else {
    calificacion = "SOBRESALIENTE"
  }  

  return mediaExamenes < 5
    ? `NO APTO: ${calificacion} (media ${mediaExamenes.toFixed(2)})`
    : `APTO: ${calificacion} (media ${mediaExamenes.toFixed(2)})`;
};

const inputNotaExamen1 = document.getElementById("nota1") as HTMLInputElement;
const inputNotaExamen2 = document.getElementById("nota2") as HTMLInputElement;
const inputNotaExamen3 = document.getElementById("nota3") as HTMLInputElement;
const inputNotaExamen4 = document.getElementById("nota4") as HTMLInputElement;
const botonCalcularApto = document.getElementById(
  "calculo"
) as HTMLButtonElement;
const mensajeAptitud = document.getElementById(
  "mensaje"
) as HTMLParagraphElement;

botonCalcularApto.addEventListener("click", () => {
  const nota1 = parseInt(inputNotaExamen1.value);
  const nota2 = parseInt(inputNotaExamen2.value);
  const nota3 = parseInt(inputNotaExamen3.value);
  const nota4 = parseInt(inputNotaExamen4.value);
  mensajeAptitud.innerHTML = calcularNota(nota1, nota2, nota3, nota4);

});