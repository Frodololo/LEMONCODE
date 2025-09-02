// La serie de Fibonacci = si los dos primeros números son 0 y 1 cada número después se obtiene sumando los dos anteriores

const calculoSerieFibonacci = (numero: number) => {
    let a = 0;
    let b = 1;
    let resultado = "";

    for (let i = 0; i < numero; i++) {
        if(i === 0) {
            resultado += a;
        } else if(i === 1) {
            resultado += ", " + b;
        } else {
            const siguiente = a + b;
            resultado += ", " + siguiente;
            a = b;
            b = siguiente;
        }
    }
return resultado;

};

const inputNumero = document.getElementById("numero") as HTMLInputElement;
const botonCalculoSerie = document.getElementById("calcular") as HTMLButtonElement;
const resultadoSerie = document.getElementById("resultado") as HTMLParagraphElement;

botonCalculoSerie.addEventListener ("click", () => {
    const numero = parseInt(inputNumero.value);
    resultadoSerie.innerText = calculoSerieFibonacci(numero);
});
