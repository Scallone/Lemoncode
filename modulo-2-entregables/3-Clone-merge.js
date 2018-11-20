/* CLONE & MERGE */ 

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};


// 1a - Clone: for ..in

function clone(source) {
  var obj = {};
  for (var prop in source) {
    obj[prop] = source[prop];
  }
  return obj;
} 
// 1b - Clone: spread

function cloneSpread(source) {
  return {...source};
  }

//console.log(a,cloneSpread(a));

// 2a - Merge for .. in

function merge(source, target) {
  var obj = clone(target);
  // Source (a) overwrites target (b) if two properties are equal
  for (var prop in source) {
    obj[prop] = source[prop];
  }
  return obj;
}

// 2b - Merge with spread

function mergeSpread(source, target) {
  return { ...target, ...source}
}

//console.log(a,b,mergeSpread(a,b));