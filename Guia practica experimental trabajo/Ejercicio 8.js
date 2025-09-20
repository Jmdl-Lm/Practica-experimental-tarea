//Entrada: N (leer), precioInicial (leer), marcaCel (leer), capacidad (leer), precioFinal (calcular), i(asignar)
//Proceso: Mostrar "Ingrese la cantidad de celulares a vender:"
          // Leer N
          // i = 1 
          // Para i desde 1 hasta N hacer
          // Mostrar "Ingrese el precio inicial del celular i:"
          // Leer precioInicial
          // Mostrar "Ingrese la marca del celular:"
          // Leer marcaCel
          // Mostrar "Ingrese la memoria en Gb del celular:"
          // Leer capacidad
          // Si (marcaCel === "A" y capacidad === 64)
          // precioFinal = precioInicial + 20
          // sino si (marcaCel === "A" y capacidad === 128)
          // precioFinal = precioInicial + 30
          // sino si (marcaCel === "B" y capacidad === 64)
          // precioFinal = precioInicial - 30
          // sino si (marcaCel === "B" y capacidad === 128)
          // precioFinal = precioInicial - 50
          // sino
          // Mostrar "Valores ingresados no válidos, revise bien la marca y memoria"
          // Mostrar "El valor final del celular i es de $precioFinal"
          // Fin Para
          //Fin

let precioInicial = 0, marcaCel = "", capacidad = 0, precioFinal = 0, N = 0;
N = parseInt(prompt("Ingrese la cantidad de celulares a vender"))
for(let i = 1; i <= N; i++){
precioInicial = parseFloat(prompt(`Ingres el precio inicial del celular ${i}`));
marcaCel = prompt("Ingrese la marca del celular");
capacidad = parseInt(prompt("Ingrese la memoria en Gb del celular"));
if (marcaCel === "A" && capacidad === 64){
    precioFinal = precioInicial + 20
} else if (marcaCel === "A" && capacidad === 128){
    precioFinal = precioInicial + 30
} else if (marcaCel === "B" && capacidad === 64){
    precioFinal = precioInicial - 30
} else if (marcaCel === "B" && capacidad === 128){
    precioFinal = precioInicial - 50
} else {
    alert("Valores ingresados no válidos, revise bien la marca y memoria")
}
alert(`El valor final del celular ${i} es de $${precioFinal.toFixed(2)}`)
}