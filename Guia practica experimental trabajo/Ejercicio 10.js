//Entrada: usuarios (leer), valorPorUsuario (asignar), vf (calcular)
//Proceso: Mostrar "Ingrese el número de usuarios:"
          // Leer usuarios
          // Si usuarios >= 100
          // valorPorUsuario = 5
          // vf = usuarios * valorPorUsuario
          // sino si (usuarios >= 50 y usuarios <= 99)
          // valorPorUsuario = 6
          // vf = usuarios * valorPorUsuario
          // sino si (usuarios >= 30 y usuarios <= 49)
          // valorPorUsuario = 8
          // vf = usuarios * valorPorUsuario
          // sino
          // vf = 300
          // valorPorUsuario = (vf / usuarios)
          // Mostrar "El valor total a pagar es de $vf y por persona es de $valorPorUsuario"
          //Fin

let usuarios = 0, valorPorUsuario = 0, vf = 0;
usuarios = parseInt(prompt("Ingrese el número de usuarios"));
if (usuarios >= 100) {
    valorPorUsuario = 5;
    vf = usuarios * valorPorUsuario;
} else if (usuarios >= 50 && usuarios <= 99){
    valorPorUsuario = 6;
    vf = usuarios * valorPorUsuario;
} else if (usuarios >= 30 && usuarios <= 49){
    valorPorUsuario = 8;
    vf = usuarios * valorPorUsuario;
} else {
    vf = 300
    valorPorUsuario = (vf/usuarios).toFixed(2)
}
alert(`El valor total a pagar es de $${vf} y por persona es de $${valorPorUsuario}`)