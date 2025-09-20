//Entrada: N (leer), precioInicial (leer), marcaCel (leer), capacidad(leer), precioFinal (calcular), c (asignar), i(asignar)
//Proceso: Mostrar "Ingrese la cantidad de celulares a vender:"
          // Leer N
          // c = 1
          // i = 0
          // Para i desde 0 hasta N - 1 hacer
          // Mostrar "Ingrese el precio inicial del celular c:"
          // Leer precioInicial
          // Mostrar "Ingrese la marca del celular:"
          // Leer marcaCel[i]
          // Mostrar "Ingrese la memoria en Gb del celular:"
          // Leer capacidad[i]
          // Si (marcaCel[i] === "A" y capacidad[i] === 64)
          // precioFinal[i] = precioInicial + 20
          // sino si (marcaCel[i] === "A" y capacidad[i] === 128)
          // precioFinal[i] = precioInicial + 30
          // sino si (marcaCel[i] === "B" y capacidad[i] === 64)
          // precioFinal[i] = precioInicial - 30
          // sino si (marcaCel[i] === "B" y capacidad[i] === 128)
          // precioFinal[i] = precioInicial - 50
          // sino
          // Mostrar "Valores ingresados no válidos, revise bien la marca y memoria"
          // Mostrar "El valor final del celular c es de $precioFinal[i]"
          // c = c + 1
          // Fin Para
          //Fin

let precioInicial = 0, marcaCel = [], capacidad = [], precioFinal = [], N = 0, c = 1;
N = parseInt(prompt("Ingrese la cantidad de celulares a vender"))
for(let i = 0; i < N; i++){
precioInicial = parseFloat(prompt(`Ingres el precio inicial del celular ${c}`));
marcaCel[i] = prompt("Ingrese la marca del celular");
capacidad[i] = parseInt(prompt("Ingrese la memoria en Gb del celular"));
if (marcaCel[i] === "A" && capacidad[i] === 64){
    precioFinal[i] = precioInicial + 20
} else if (marcaCel[i] === "A" && capacidad[i] === 128){
    precioFinal[i] = precioInicial + 30
} else if (marcaCel[i] === "B" && capacidad[i] === 64){
    precioFinal[i] = precioInicial - 30
} else if (marcaCel[i] === "B" && capacidad[i] === 128){
    precioFinal[i] = precioInicial - 50
} else {
    alert("Valores ingresados no válidos, revise bien la marca y memoria")
}
alert(`El valor final del celular ${c} es de $${precioFinal[i].toFixed(2)}`)
c++
}