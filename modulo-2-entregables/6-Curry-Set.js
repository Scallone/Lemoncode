
function set(obj,prop,value) {
  const tmp = {...obj};
  if (tmp.hasOwnProperty(prop)) {
    tmp[prop]= value;
  }
  return tmp;
}
const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };
const updatedJulia = set(julia, 'age', 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
