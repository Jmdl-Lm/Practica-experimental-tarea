//Entrada: N (leer), usuarios (leer), valorPorUsuario (asignar), vf (calcular), i(asignar)
//Proceso: Mostrar "Ingrese el número de grupos:"
          // Leer N
          // i = 1
          // Para i desde 1 hasta N hacer
          // Mostrar "Ingrese el número de usuarios del grupo i:"
          // Leer usuarios
          // Si usuarios >= 100
          // valorPorUsuario = 5
          // vf = usuarios * valorPorUsuario
          // else if (usuarios >= 50 y usuarios <= 99)
          // valorPorUsuario = 6
          // vf = usuarios * valorPorUsuario
          // else if (usuarios >= 30 y usuarios <= 49)
          // valorPorUsuario = 8
          // vf = usuarios * valorPorUsuario
          // else
          // vf = 300
          // valorPorUsuario = vf / usuarios
          // Mostrar "El valor total a pagar del grupo i es de $vf y por persona es de $valorPorUsuario"
          // Fin Para
          //Fin

let usuarios = 0, valorPorUsuario = 0, vf = 0, N = 0;
N = parseInt(prompt("Ingrese el número de grupos"));
for(let i = 1; i <= N; i++){
    usuarios = parseInt(prompt(`Ingrese el número de usuarios del grupo ${i}`));
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
alert(`El valor total a pagar del grupo ${i} es de $${vf} y por persona es de $${valorPorUsuario}`)
}