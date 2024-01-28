alert('Te encuentras caminando por el bosque... o espera que encontraste?')
alert('Ahhh te has encontrado con un terrible destino')
alert('Un enemigo misterioso te ha asechado, has iniciado la batalla...');

vidaJugador = 100;
vidaEnemigo = 100;
//inicializamos el valor de vida de ambos personajes

while(vidaJugador && vidaEnemigo > 0 ) {
    //mientras la vida del enemigo y el juegador sean mayor a 0
    alert ('se encuentra en la pelea, que desea hacer?');
    alert('1:pelear,2: mochila,3:salir')

    let opcion = Number(prompt('Selecciona tu decision'));

    if(opcion == 1){
        alert('seleccionaste la opcion 1')
    }

    
    
}