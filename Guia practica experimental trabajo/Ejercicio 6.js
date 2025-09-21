//Entrada: pedidos (leer), cantidadTarjetas (leer), precio (asignar), vf (calcular), N (asignar), i(asignar) 
//Proceso: Mostrar "Ingrese la cantidad de pedidos:"
          // Leer pedidos
          // N = 1
          // i = 0
          // Para i desde 0 hasta pedidos hacer
          // Mostrar "Ingrese la cantidad de tarjetas del pedido N:"
          // Leer cantidadTarjetas[i]
          // Si cantidadTarjetas[i] <= 200
          // precio = 2.00
          // sino si (cantidadTarjetas[i] >= 201 y cantidadTarjetas[i] <= 300)
          // precio = 1.80
          // sino
          // precio = 1.50
          // vf[i] = cantidadTarjetas[i] * precio
          // Mostrar "El costo total del pedido N es $vf[i]"
          // N = N + 1
          // Fin Para
          //Fin

let cantidadTarjetas = [], vf = [], precio = 0, N = 1, pedidos = 0;
pedidos = parseInt(prompt("Ingrese la cantidad de pedidos"));
for(let i = 0; i < pedidos; i++){
    cantidadTarjetas[i] = parseInt(prompt(`Ingrese la cantidad de tarjetas del pedido ${N}`));
    if (cantidadTarjetas[i] <= 200) {
        precio = 2.00;
    } else if (cantidadTarjetas[i] >= 201 && cantidadTarjetas[i] <= 300) {
        precio = 1.80;
    } else {
        precio = 1.50;
    }
    vf[i] = cantidadTarjetas[i] * precio;
    alert(`El costo total del pedido ${N} es $${vf[i]}`);
    N++

}
