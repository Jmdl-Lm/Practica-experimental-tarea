//Entrada: edad1 (leer), edad2(leer), edad3(leer), edadMayor(asignar)
//Proceso: Mostrar "Ingrese la edad del primer hermano:"
          //Leer edad1
          //Mostrar "Ingrese la edad del segundo hermano:"
          //Leer edad2
          //Mostrar "Ingrese la edad del tercer hermano:"
          //Leer edad3
          //edadMayor ← máximo entre edad1, edad2 y edad3
          //Si edad1 = edad2 Y edad2 = edad3 Entonces
          //Mostrar "Los tres hermanos tienen la misma edad"
          //Sino Si (edad1 = edad2 Y edad2 ≠ edad3) 
          //O (edad1 = edad3 Y edad1 ≠ edad2)
          //O (edad2 = edad3 Y edad2 ≠ edad1) Entonces
          //Mostrar "Dos hermanos tienen la edad más alta con edadMayor años"
          //Sino
          //Mostrar "El hermano mayor tiene edadMayor años"
          //Fin
          
let edad1 = 0 , edad2 = 0, edad3 = 0, edadMayor = 0
edad1 = parseInt(prompt("Ingrese la edad del primer hermano:"));
edad2 = parseInt(prompt("Ingrese la edad del segundo hermano:"));
edad3 = parseInt(prompt("Ingrese la edad del tercer hermano:"));
edadMayor = Math.max(edad1, edad2, edad3);
if (edad1 === edad2 && edad2 === edad3) {
    alert(`Los tres hermanos tienen la misma edad`)
} else if (edad1 === edad2 && edad2 != edad3 || edad1 === edad3 && edad1 != edad2 || edad2 === edad3 && edad2 != edad1) { 
    alert(`Dos hermanos tienen la edad mas alta con ${edadMayor} años`)
} else {
    alert(`El hermano mayor tiene ${edadMayor} años`)
}
