/* ARRAY OPERATIONS */ 

const arr = [ "Uno", "Dos", "Tres", "Cuatro","Cinco","Seis"];

// 1 - Head

const head = ([first]) => {return first};
console.log(head(arr));
//console.log(arr);


// 2 - Tail

const tail = ([ , ...rest]) => {return rest};
console.log(tail(arr));
//console.log(arr);

// 3 - Array.prototype

const init = (arr) => {return arr.slice(0,arr.length -1)};
//const init = (arr) => {console.log(arr.filter(item , idx => ))};
console.log(init(arr));
//console.log(arr);

// 4 - Last

const last = ({[arr.length-1] : last}) => {return last}; 
console.log(last(arr));
//console.log(arr);

