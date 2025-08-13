// Variables para los géneros músicales
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clásica = "🎼 Clásica";

// Interfaz para los grupos músicales
interface Grupo {
    nombre: string;
    año: number;
    activo: boolean;
    género: string;
}

// Variables para cada grupo músical
const grupo1: Grupo = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    género: popRock,
}
const grupo2: Grupo = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    género: rock,
}
const grupo3: Grupo = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    género: hardRock,
}
const grupo4: Grupo = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    género: clásica,
}
const grupo5: Grupo = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    género: rock,
}

// Estilo para el título de cada grupo
const estiloTítulo ="font-weight: bold; background-color: green; font-size: large;";

console.log(`%cThe Beatles`, estiloTítulo);
console.log(grupo1);
console.log(`%cQueen`, estiloTítulo);
console.log(grupo2);
console.log(`%cAC DC`, estiloTítulo);
console.log(grupo3);
console.log(`%cLudwig van Beethoven`, estiloTítulo);
console.log(grupo4);
console.log(`%cThe Rolling Stones`, estiloTítulo);
console.log(grupo5);
