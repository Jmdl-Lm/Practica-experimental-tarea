//Entrada: cantidadTarjetas(leer), precio(asignar), vf(calcular)
//Proceso: Mostrar "Ingrese la cantidad de tarjetas del pedido:"
          // Leer cantidadTarjetas
          // Si cantidadTarjetas <= 200 Entonces
          // precio = 2.00
          // Sino Si cantidadTarjetas >= 201 Y cantidadTarjetas <= 300 Entonces
          // precio = 1.80
          // Sino
          // precio = 1.50
          // Fin Si
          // vf = cantidadTarjetas * precio
          // Mostrar "El costo total del pedido es $vf"
          //Fin

let vf = 0, cantidadTarjetas = 0, precio = 0;
cantidadTarjetas = parseInt(prompt("Ingrese la cantidad de tarjetas del pedido"));
if (cantidadTarjetas <= 200) {
    precio = 2.00;
} else if (cantidadTarjetas >= 201 && cantidadTarjetas <= 300) {
    precio = 1.80;
} else {
    precio = 1.50;
}
vf = cantidadTarjetas * precio
alert(`El costo total del pedido es $${vf}`);