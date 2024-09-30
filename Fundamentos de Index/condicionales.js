/* 
  Condicionales

  Son estructuras que permiten ejecutar diferentes bloques de código en función de si una condición (expresión) es verdadera o falsa.
  Estas estructuras controlan el flujo de los programas.

  1. if (si)

  El bloque if se ejecuta solo si la condición que se le pasa es verdadera 'true'. Si la condición es falsa 'false' el código dentro de if se omite.

  if (condición) {
  código que se ejecuta si es verdadera
  }

  2. else -> de lo contrario

  Este bloque ejecuta un código cuando las condiciones anteriores no son verdaderas.

  if(condicion) {
    Código que se ejecuta en caso de que la condición sea verdadera
  } else {
    Código que se ejecuta si la condicion anterior es falsa
  }

  3. else if -> si no

  nos ayuda a comprobar condiciones adicionales si la condición if es falsa. Podemos tener tantos else if como nesecitemos. los 'else if' se escriben entre el 'if' y entre el 'if' y el 'else'

  if (condicional) {
  //  Código...

  } else if (condicional) {
  // Código a ejecutar... 
  } else if (condicional) {
  // Código a ejecutar... 
  } else {
  // código...

  }
*/

// Sentencia o bloque if
let numero = 30;

if (30 < 10) {
  console.log("Me ejecute porque la primera condición es verdadera");
} else if (true) {
  console.log("Me ejecute porque la segunda condición es verdadera");
} else {
  console.log("Me ejecute porque las condiciones aneriores son falsas");
}