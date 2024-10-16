/* 
  Los Arrays pueden contener datos de cualquier tipo:
  números, strings, booleanos, incluiso arrays anidados,

  Sintaxis
  let nombreArrays = [elemento, elemento2, elemento3] 
*/

let frutasFavoritas = ["sandia", "uva", "mango"];
let numeroSuerte = [13, 20, 4, 29, 24];
let meQuiereNoMeQuiere = [true, false, false, true];
let misDatos = ["Ange", "Luna", 20, false];
let anidandosArrays = [
  [152, 956, 464], 
  ["Gato", "Perro", "Buho"], 
  [true, false, true]
];

/* 
  array ->["sandia", "uva", "mango"];
  Indice ->    0       1       2

  array -> [ 5, 10, 8, 16, 35]
  Indice ->  0   1  2   3   4
*/

/* 
  Acceder a los elementos de Array
  Para acceder a un dato usamos la siguiente sintaxis:

  nombreArray[Indice];

*/

console.log( frutasFavoritas[0] );
console.log( numeroSuerte[2])
console.log( anidandosArrays[2][2]);

/* 
  Modificar elementos de Array

  Para cambiar el valor de cualquier elemento dentro del array usamos la siguiente sintaxis:

  nombreArray[indice] = nuevoDato

*/
console.log(frutasFavoritas);

frutasFavoritas[0] = "Pera";

console.log(frutasFavoritas);

/* 
  Metodos utiles para los arrays

  Los elementos son "funciones" que trabajan con los datos de los arrays, su sintaxis es la siguiente:

  1. nombreArray.nombreMetodo
  2. nombreArray.nombreMetodo(parametro)

*/

/* 
  length nos dice cuantos elementos tiene un array 

*/

console.log(frutasFavoritas.length)
console.log(numeroSuerte.length)
console.log(anidandosArrays.length)
/* 
  push() - Agrega un elemento al final del Array:
  nombreArray.push(dato)
*/

console.log(frutasFavoritas);
frutasFavoritas.push("maracuya");
console.log(frutasFavoritas);

/* 

  pop() - Eliminamos el ultimo elemento del Array y lo devuelve.

  nombreArray.pop()
*/

console.log(numeroSuerte);
let numeroquitado = numeroSuerte.pop()
console.log(numeroSuerte);
console.log(numeroquitado)