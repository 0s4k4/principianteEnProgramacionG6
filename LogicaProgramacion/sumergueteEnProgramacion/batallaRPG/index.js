alert('Te encuentras caminando por el bosque... o espera que encontraste?')
alert('Ahhh te has encontrado con un terrible destino')
alert('Un enemigo misterioso te ha asechado, has iniciado la batalla...');

let vidaJugador = 100;
let vidaEnemigo = 100;

let ataquePersonaje = 10;
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
        
    }
    else if (opcion == 2){
        alert('has selecionado la opcion 2')
    }

    else if (opcion == 3) {
        alert('has seleccionado la opcion 3')
    }
    
    
}