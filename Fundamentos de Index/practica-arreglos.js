/* alert ("Quiero hacerme bolita y mimir :,3")
 */ 
/* 
Practicas arreglos - Ligas Supergeroes

1.Definir un arreglo llamado heroes que contenga 5 nombres de superheroes y muestralo en la consola.

2.Agrega un nuevo héroe al final del Array.

3. Eliminar al primer heroe

4.cambiamos al tercer heroe por uno mas poderoso.

5. Ordenar Alfabeticamente el array "heroes".

6. Crear un nuevo array llamado enemigos, con los ultimos 3 heroes del array con un metodo. 

7. Mostrar por consola los dos arrays: heroe y villanos.
*/

// 1.
let heroes = ["Dynamight", "Deku", "Shoto", "Hawks", "Uravity"];
//2.
heroes.push("All Might");
//3.
heroes.shift();
//4.
heroes[2] = "Endeavor";
//5.
heroes.sort();
//6.
let villanos = heroes.slice(2, 5);
console.log(heroes);
console.log(villanos);
