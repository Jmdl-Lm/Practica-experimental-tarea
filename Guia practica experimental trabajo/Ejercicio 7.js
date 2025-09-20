//Entrada: precioInicial (leer), marcaCel (leer), capacidad (leer), precioFinal (calcular)
//Proceso: Mostrar "Ingrese el precio inicial del celular:"
          // Leer precioInicial
          // Mostrar "Ingrese la marca del cel:"
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
          // Mostrar "El valor final del celular es de $precioFinal"
          //Fin

let precioInicial = 0, marcaCel = "", capacidad = 0, precioFinal;
precioInicial = parseFloat(prompt("Ingrese el precio inicial del celular"));
marcaCel = prompt("Ingrese la marca del cel");
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
alert(`El valor final del celular es de $${precioFinal.toFixed(2)}`)