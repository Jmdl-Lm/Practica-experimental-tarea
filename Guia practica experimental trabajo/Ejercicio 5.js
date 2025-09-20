//Entrada: pedidos (leer), cantidadTarjetas (leer), precio (asignar), vf (calcular), i(asignar)
//Proceso: Mostrar "Ingrese la cantidad de pedidos:"
          // Leer pedidos
          // i = 1
          // Para i desde 1 hasta pedidos hacer
          // Mostrar "Ingrese la cantidad de tarjetas del pedido i:"
          // Leer cantidadTarjetas
          // Si cantidadTarjetas <= 200
          // precio = 2.00
          // sino si (cantidadTarjetas >= 201 y cantidadTarjetas <= 300)
          // precio = 1.80
          // sino
          // precio = 1.50
          // vf = cantidadTarjetas * precio
          // Mostrar "El costo total del pedido i es $vf"
          // Fin Para
          //Fin

let vf = 0, cantidadTarjetas = 0, precio = 0, pedidos = 0;
pedidos = parseInt(prompt("Ingrese la cantidad de pedidos"));
for(let i = 1; i <= pedidos; i++){ 
    cantidadTarjetas = parseInt(prompt(`Ingrese la cantidad de tarjetas del pedido ${i}`));
    if (cantidadTarjetas <= 200) {
        precio = 2.00;
    } else if (cantidadTarjetas >= 201 & cantidadTarjetas <= 300) {
        precio = 1.80;
    } else {
        precio = 1.50;
    }
    vf = cantidadTarjetas * precio;
    alert(`El costo total del pedido ${i} es $${vf}`);
}