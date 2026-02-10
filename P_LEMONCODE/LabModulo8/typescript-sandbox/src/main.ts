// Tipar un array

const edades: number[] = [1, 2, 3, 4, 5];

// Tipar un array de strings

const películas: string[] = ['El Padrino', 'El Señor de los Anillos', 'El Club de la Pelea'];

// Tipar un array de objetos

interface Persona {
  nombre: string;
  edad: number;
};

const personas: Persona[] = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 35 }
];

// Any

const amalgama: any[] = [1, 'Hola', true, { nombre: 'Juan' }, [1, 2, 3]];

// Como parametro en una función un array tipado

const pintaEdades = (edadColección: number[]) => {
  console.log(edadColección);
};

pintaEdades(edades);

// Devolver un array tipado desde una función

const obtenerPaliculas = (): string[] => {
  return películas;
};

console.log(obtenerPaliculas());

// Tipar un bucle for

const apellidos: string[] = ['García', 'Pérez', 'López'];

for (let i: number = 0; i < apellidos.length; i++) {
  console.log(apellidos[i]);
};

// Operaciones básicas con arrays tipados

interface Cliente {
  nombre: string;
  edad: number;
};

const ana: Cliente = { nombre: 'Ana', edad: 28 };

const clientes: Cliente[] = [
  ana,
  { nombre: 'Luis', edad: 32 },
  { nombre: 'Sofía', edad: 24 }
];

// Modificar de forma mutable

clientes[0] = {
  nombre: 'Ana María',
  edad: 28
};

// Modificar de forma inmutable

interface Individuo {
  nombre: string;
  edad: number;
};

const individuo: Individuo = { nombre: 'Ana', edad: 28 };

const individuos: Individuo[] = [
  individuo,
  { nombre: 'Luis', edad: 32 },
  { nombre: 'Sofía', edad: 24 }
];

individuos[0] = {
  nombre: 'Ana María',
  edad: 28
};

// Tipado con genéricos

const numeros: Array<number> = [1, 2, 3, 4, 5];

const cadenas: Array<string> = ['Hola', 'Mundo', 'TypeScript'];

const objetos: Array<{ nombre: string; edad: number }> = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 35 }
];

const cabezaDeLista = (miArray: string[]): string => {
  return miArray[0];
};

console.log(cabezaDeLista(cadenas));

const cabezaDeListaGenerica = <T>(miArray: T[]): T => {
  return miArray[0];
};

console.log(cabezaDeListaGenerica(numeros));
console.log(cabezaDeListaGenerica(cadenas));
console.log(cabezaDeListaGenerica(objetos));


// Tipado con genéricos II

const películas2 = ["Batman", "Superman", "Spiderman"];

const peliculasFavoritas = [
  ...películas2.slice(0,1),
  ...películas2.slice(2),
];

console.log(películas2);
console.log(peliculasFavoritas);

const borrarElemento = <T>(array: T[], index: number): T[] => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

const pelisNuevas = borrarElemento(películas2, 1);

console.log(películas2);
console.log(pelisNuevas);

const number = [1, 2, 3, 4, 5];

const nuevoNumero = borrarElemento(number, 2);

// Función

const peliculas3: string[] = ['El Padrino', 'El Señor de los Anillos', 'El Club de la Pelea'];

const insertaPelicula = <T>(array: T[], pelicula: T, alInicio: boolean): T[] => {
  if (alInicio) {
    return [pelicula, ...array];
  } else {
    return [...array, pelicula];
  }
};

// Con ternario

const insertaPelicula2 = <T>(array: T[], pelicula: T, alInicio: boolean): T[] => 
  alInicio ? [pelicula, ...array] : [...array, pelicula];


const peliculasNuevas2 = insertaPelicula2 (
  peliculas3,
  "el Hobbit",
  false
);

console.log(peliculas3);
console.log(peliculasNuevas2);

