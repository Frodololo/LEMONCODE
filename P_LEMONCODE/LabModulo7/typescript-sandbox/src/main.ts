// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

function comprobarDivision(number1: number, number2: number) {
  if (number2 === 0) {
    return "Error: no se puede dividir por 0";
  }
  if (number1 % number2 === 0) {
    return `${number1} es divisible por ${number2}`;
  } else {
    return `${number1} NO es divisible por ${number2}`;
  }
}

function comprobarDivisibilidad(number1: number, number2: number): string {
  return number2 === 0
    ? "Error: no se puede dividir por 0"
    : number1 % number2
    ? `${number1} es divisible por ${number2}`
    : `${number1} NO es divisible por ${number2}`;
}


console.log(comprobarDivision(10,3));
console.log(comprobarDivision(10,2));
console.log(comprobarDivision(3, 10));
console.log(comprobarDivisibilidad(100,10));
console.log(comprobarDivisibilidad(100,23));
console.log(comprobarDivisibilidad(34,100));
