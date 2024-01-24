let numeroSecreto = 0;
let numeroUsuario = 0;
let contador = 0;


numeroSecreto  = Math.floor(Math.random()*10)+1;
alert('Bienvenido al juego del numero secreto :3');
alert(numeroSecreto);

let numeroDeIntentos = prompt('Ingresa el numero de intentos permitidos que quieres tener en el juego');
console.log('el numero de intentos que esta permitido es de '+numeroDeIntentos);
console.log('el numero secreto para esta partida es de: '+numeroSecreto);

while(numeroUsuario != numeroSecreto) {
    numeroUsuario = Number(prompt('introduce un numero para el juego'));
    alert('el numero que ingresaste es '+numeroUsuario);
    console.log('el numero secreto es '+numeroSecreto);

    if(numeroSecreto == numeroUsuario) {
        alert('el numero es el correcto felicidades has ganado :)') ;
        break; 
    } else {
        contador++;
        //numeroDeIntentos = numeroDeIntentos + 1

        if(contador > numeroDeIntentos){

            alert('has tenido muchos intentos')
            break;
        }
        // if(contador = numeroDeIntentos ) {
        //     alert('has llegado al limite de los intentos por partida');
        //     break;
        // }
        if (numeroSecreto > numeroUsuario) {
            alert ('el numero secreto es mayor al numero de usuario');
            alert('el numero del secreto es de '+numeroSecreto + ' y el del usuario es de '+numeroUsuario)
        } else{
            alert('el numero secreto es menor al numero del usuario')
            alert('el numero del secreto es de '+numeroSecreto + ' y el del usuario es de '+numeroUsuario)
        }
    }
}

alert('Gracias por jugar');
alert('tu numero de intentos que jugaste durante toda la partida ha sido de '+contador);