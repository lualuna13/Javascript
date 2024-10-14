/* alert ("wuenas")
 */
/* 
  Instrucciones condicionales if / else if / else

  1. Crear una variable dia y asignarle un valor númerico.
  2. Con la sentencia if,  else if y else, evaluar el valor de la variable dia con las siguientes condiciones:

  - dia === 1 // Lunes
  - dia === 2 // Martes
  - dia === 3 // Miercoles
  - dia === 4 // Jueves
  - dia === 5 // Viernes
  - dia === ? // Dia no valido

*/

/* let dia = 0;

if (dia == 1) {
  console.log("Lunes");
} else if (dia == 2) {
  console.log("Martes");
} else if (dia == 3) {
  console.log ("Miercoles");
} else if (dia == 4){
  console.log("Jueves");
} else if (dia == 5) {
  console.log("Viernes");
} else {
  console.log("Dia no valido");
} */

/* 

  Switch

  Es una estructura de control de flujo condicional, pero se utilixa cuando tenemos multiples casos posibles para evaluar una expresión.
  
  Es mas eficiente y legible en situaciones donde se quiere comparar una sola variable con varios valores posibles.

  Sintaxis:

  switch (expresión) {
    case valor1:
      // Código que se ejecuta
      break;
    case valor2:
      // Código que se ejecuta
      break;
    case valor3:
      // Código que se ejecuta
      break;
    default;
      // Código que se ejecuta
  }
*/

let dia = 1;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes")
  default:
    console.log("Dia no valido");
}

/* 
  Ejercicio Switch

  1. Crear una variable pokemon y asignarle un valor en string con el nombre de un pokemon.

*/

let pokemon = "Charmander";

switch (pokemon) {
  case "Pikachu":
    console.log(`Tu pokemon es ${pokemon} y es tipo electrico`);
    break;
  case "Charmander":
    console.log(`Tu pokemon es ${pokemon} y es tipo fuego`);
    break;
  case "Snorlax":
    console.log(`Tu pokemon es ${pokemon} y es tipo normal`);
    break;
  default:
  console.log(`¿Qué Pokemon es ese?`);
}
