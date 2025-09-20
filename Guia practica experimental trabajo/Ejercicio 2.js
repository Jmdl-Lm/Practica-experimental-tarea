//Entrada: N(leer), edad1(leer), edad2(leer), edad3(leer), edadMayor(asignar)
//Proceso: Mostrar "Ingrese el número de grupos:"
          //Leer N
          //i = 1 
          //Para i desde 1 hasta N hacer
          //Mostrar "Ingrese la edad del primer hermano:"
          //Leer edad1
          //Mostrar "Ingrese la edad del segundo hermano:"
          //Leer edad2
          //Mostrar "Ingrese la edad del tercer hermano:"
          //Leer edad3
          //edadMayor = máximo entre edad1, edad2 y edad3
          //Si edad1 = edad2 Y edad2 = edad3 Entonces
          //Mostrar "En el grupo i, los tres hermanos tienen la misma edad"
          //Sino Si (edad1 = edad2 Y edad2 != edad3)
          //O (edad1 = edad3 Y edad1 != edad2)
          //O (edad2 = edad3 Y edad2 != edad1) Entonces
          //Mostrar "En el grupo i, dos hermanos tienen la edad más alta con edadMayor años"
          //Sino
          //Mostrar "En el grupo i, el hermano mayor tiene edadMayor años"
          //Fin Para
          //Fin

let N = 0 , edad1 = 0, edad2 = 0, edad3 = 0, edadMayor = 0;
N = parseInt(prompt("Ingrese el número de grupos"));
for(let i = 1; i <= N ; i++) {
    edad1 = parseInt(prompt("Ingrese la edad del primer hermano"));
    edad2 = parseInt(prompt("Ingrese la edad del segundo hermano"));
    edad3 = parseInt(prompt("Ingrese la edad del tercer hermano")); 
    edadMayor = Math.max(edad1, edad2, edad3);
    if (edad1 === edad2 && edad2 === edad3) {
    alert(`En el grupo ${i}, los tres hermanos tienen la misma edad`)
    } else if (edad1 === edad2 && edad2 != edad3 || edad1 === edad3 && edad1 != edad2 || edad2 === edad3 && edad2 != edad1) { 
    alert(`En el grupo ${i}, dos hermanos tienen la edad mas alta con ${edadMayor} años`)
    } else {
    alert(`En el grupo ${i}, el hermano mayor tiene ${edadMayor} años`)
    }
}