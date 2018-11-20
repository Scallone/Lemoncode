/* CONCAT */ 

const a = ["Uno", "Dos", "Tres"];
const  b = ["Cuatro", "Cinco", "Seis"];
const c = ["Siete","Ocho","Nueve"];
const d = ["Diez","Once","Doce"];

// 1 - Dos arrays

const concat = (a, b) => {return [...a,...b]};
console.log(concat(a,b));

// 2 - N arrays

const concatN = (...nArrays) => {return [].concat(...nArrays)};
console.log(concatN(a,b,c,d));