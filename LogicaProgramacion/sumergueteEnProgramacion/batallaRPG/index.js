alert('Te encuentras caminando por el bosque... o espera que encontraste?')
alert('Ahhh te has encontrado con un terrible destino')
alert('Un enemigo misterioso te ha asechado, has iniciado la batalla...');

let vidaJugador = 100;
let vidaEnemigo = 100;



let ataquePersonaje = 100;
let ataque_Enemiego = 15;
let sandwitch = 40;
//inicializamos el valor de vida de ambos personajes

while(vidaJugador && vidaEnemigo > 0 ) {
    //mientras la vida del enemigo y el juegador sean mayor a 0
    alert ('se encuentra en la pelea, que desea hacer?');
    alert('1:pelear,2: mochila,3:salir')

    let opcion = Number(prompt('Selecciona tu decision'));

    if(opcion == 1){
        alert('seleccionaste la opcion 1, has atacado')
        vidaEnemigo = vidaEnemigo - ataquePersonaje
        alert('al enemigo le resta '+vidaEnemigo );
    }
    else if (opcion == 2){
        alert('has selecionado la opcion de mochila')
        vidaJugador = vidaJugador + sandwitch;
        alert('el personaje se ha recuperado, ahora tiene '+vidaJugador+' de vida');
    }

    else if (opcion == 3) {
        alert('has seleccionado la opcion 3')
        alert('te has escadado de la partida');
        break;
    }

    if (vidaEnemigo <= 0 ){
        break;
    }

    alert('es turno del enemigo, el enemigo te ha atacado');
    vidaJugador = vidaJugador - ataque_Enemiego;
    alert('ahora tienes ' + vidaJugador);

}



if(vidaEnemigo <= 0){
    alert('el enemigo  ha sido derrotado');
    alert('has ganado la batalla, felicidades, eres un heroe')
}
else if(vidaJugador <= 0){
    alert('el enemigo te ha derrotado');
    alert('has perdido, has perecido')
} else {
    alert('te has escapado');
}