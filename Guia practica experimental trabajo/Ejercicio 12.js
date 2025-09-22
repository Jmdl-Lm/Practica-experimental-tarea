//Entrada: N (leer), usuarios (leer), valorPorUsuario (asignar), vf (calcular), c (asignar), i(asignar)
//Proceso: Mostrar "Ingrese el número de grupos:"
          // Leer N
          // c = 1
          // i = 0
          // Para i desde 0 hasta N hacer
          // Mostrar "Ingrese el número de usuarios del grupo c:"
          // Leer usuarios[i]
          // Si usuarios[i] >= 100
          // valorPorUsuario[i] = 5
          // vf[i] = usuarios[i] * valorPorUsuario[i]
          // sino si (usuarios[i] >= 50 y usuarios[i] <= 99)
          // valorPorUsuario[i] = 6
          // vf[i] = usuarios[i] * valorPorUsuario[i]
          // sino si (usuarios[i] >= 30 y usuarios[i] <= 49)
          // valorPorUsuario[i] = 8
          // vf[i] = usuarios[i] * valorPorUsuario[i]
          // sino
          // vf[i] = 300
          // valorPorUsuario[i] = vf[i] / usuarios[i]
          // Mostrar "El valor total a pagar del grupo c es de $vf[i] y por persona es de $valorPorUsuario[i]"
          // c = c + 1
          // Fin Para
          //Fin

let usuarios = [], valorPorUsuario = [], vf = [], N = 0, c = 1;
N = parseInt(prompt("Ingrese el número de grupos"));
for(let i = 0; i < N; i++){
    usuarios[i] = parseInt(prompt(`Ingrese el número de usuarios del grupo ${c}`));
    if (usuarios[i] >= 100) {
    valorPorUsuario[i] = 5;
    vf[i] = usuarios[i] * valorPorUsuario[i];
    } else if (usuarios[i] >= 50 && usuarios[i] <= 99){
    valorPorUsuario[i] = 6;
    vf[i] = usuarios[i] * valorPorUsuario[i];
    } else if (usuarios[i] >= 30 && usuarios[i] <= 49){
    valorPorUsuario[i] = 8;
    vf[i] = usuarios[i] * valorPorUsuario[i];
    } else {
    vf[i] = 300
    valorPorUsuario[i] = (vf[i]/usuarios[i]).toFixed(2)
    }
alert(`El valor total a pagar del grupo ${c} es de $${vf[i]} y por persona es de $${valorPorUsuario[i]}`)
c++

}
