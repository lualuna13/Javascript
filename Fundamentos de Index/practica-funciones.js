/* alert ("Pongan cumbia") */
/* 
  Ejercicio funciones

  1.Vamos a definir una varaible llamada 'heroe' que tenga un dato en 'string' con el nombre de un superheroe.

*/

let heroe =  prompt ("Escribe el nombre de heroe de un personaje principal de My ero Academia:")
;

function obtenerpoder(heroe) {
 if (heroe === "Deku") {
  console.log("Eres el noveno sucesor del One For All");

 } else if (heroe === "Dynamight"){
  console.log("Eres un aspirante a ser el heroe numero uno");

 } else if (heroe === "Shoto"){
  console.log("Seras un heroe que vivira con la sombra de los pecados de su padre y hermano");

 } else {
  console.log("No te invitaron a la fiesta :c")
 }

}

obtenerpoder(heroe);

