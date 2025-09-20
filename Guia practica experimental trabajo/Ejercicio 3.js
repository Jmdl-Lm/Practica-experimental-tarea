//Entrada: edades(leer), edadMayor(asignar)
//Proceso: Mostrar "Ingrese la edad del primer hermano:"
          // Leer edades[0]
          // Mostrar "Ingrese la edad del segundo hermano:"
          // Leer edades[1]
          // Mostrar "Ingrese la edad del tercer hermano:"
          // Leer edades[2]
          // edadMayor = máximo entre edades[0], edades[1], edades[2]
          // Si edades[0] = edades[1] Y edades[1] = edades[2] Entonces
          // Mostrar "Los tres hermanos tienen la misma edad"
          // Sino Si (edades[0] = edades[1] Y edades[1] != edades[2])
          // O (edades[0] = edades[2] Y edades[0] != edades[1])
          // O (edades[1] = edades[2] Y edades[1] != edades[0]) Entonces
          // Mostrar "Dos hermanos tienen la edad más alta con edadMayor años"
          // Sino
          // Mostrar "El hermano mayor tiene edadMayor años"
          // Fin

let edades = [] , edadMayor = 0
edades[0] = parseInt(prompt("Ingrese la edad del primer hermano"));
edades[1] = parseInt(prompt("Ingrese la edad del segundo hermano"));
edades[2] = parseInt(prompt("Ingrese la edad del tercer hermano")); 
edadMayor = Math.max(edades[0], edades[1], edades[2]);
if (edades[0] === edades[1] && edades[1] === edades[2]) {
    alert(`Los tres hermanos tienen la misma edad`);
} else if (edades[0] === edades[1] && edades[1] != edades[2] || edades[0] === edades[2] && edades[0] != edades[1] || edades[1] === edades[2] && edades[1] != edades[0]) { 
    alert(`Dos hermanos tienen la edad mas alta con ${edadMayor} años`);
} else {
    alert(`El hermano mayor tiene ${edadMayor} años`);
}