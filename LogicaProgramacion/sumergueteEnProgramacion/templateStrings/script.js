//las condicionales nos ayudan a saber si se cunmple cierta regla o condicion en nuestro script, y apartir de ello tomar alguna desicion
//con el siguiente ejemplo ponemos lo siguiente
//genereamos un numero random, el cual se llama numero secreto, y luego le pedimos al usuario que introduzca uno, si este coincide , dira que es igual sino dira que no es igual mediante un alert

let numeroSecreto  = Math.floor(Math.random()*10)+1

alert('Bienvenido al juego del número secreto');

let numeroUsuario = prompt(" introduce un numero del 1 al 10");
console.log("valor de usuario " + numeroUsuario )
console.log("valor generado aleatoriamente "+numeroSecreto);
if (numeroSecreto == numeroUsuario) { //la condicion se traduce a si el numeroSecreto y numeroUsuario es igual, se ejecuta lo siguiente
    //esto se le llama bloque de codigo, establece un espacio donde se va ejecutar la condidicional

    alert("el numero es el mismo")
    alert("su numero de la suerte es " + numeroSecreto)
} else { //esta condicion es por si no se cumple la condicion del if

    alert('el numero no es el mismo'); /// al no cumplirse, se ejecuta lo siguiente 
    console.log("el valor secreto era "+numeroSecreto);

}