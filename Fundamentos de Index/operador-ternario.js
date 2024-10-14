/* 
  Ejemplo con if / else

  1. Declarar una variable edad y le asignamos un valor numerico.
  2. Comprobamos si edad es igual o mayor que 18, mostramos el mensaje: "Eres mayor de edad".
  3. Si edad no es mayor que 18, mostramos el mensaje: "Eres un bebe"
*/

/* let edad = 8;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres un bebe");
} */

/* 
  El operador ternario es una forma más cocisa de escribir una condición if / else.

  Trabajo con tres operandos:

  1. Una condición
  2. La expresión si la condición es verdadera.
  3. La expresión si la condición es falsa

  Sintaxis:
  condición ? expresionSiVerdadera : expresionSiFalsa

*/

let edad = 18;

let resultado = edad >= 18 ? "Eres mayor de edad" : "Eres un bebe";

console.log(resultado)