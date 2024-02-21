// let titulo = document.querySelector("h1");
// titulo.innerHTML = 'juego del numero secreto';
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'indica un numero del 1 al 10';

let numeroIntentos = 0;
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
function asinarTexto(elemento,texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){

    let  numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('numero introducido por el usuario' +numeroUsuario);
    console.log('numero generado por la computadora '+numeroSecreto);

    while(numeroSecreto != numeroUsuario ){
        numeroIntentos++;

        if(numeroSecreto > numeroUsuario) {
            let titulo = document.getElementById("parrafo1");
            titulo.innerHTML = 'el numero secreto es mayor al numero del usuario';
            
        } else {
            let titulo = document.getElementById("parrafo1");
            titulo.innerHTML = 'el numero secreto es menor al del usuario';
            
        }
        break;


       
    }
    if (numeroSecreto == numeroUsuario){
        console.log('los numeros coinciden, felicidades')
         let titulo = document.getElementById("parrafo1");
         titulo.innerHTML = 'el numero secreto es el mismo';
         alert('tuviste ' + numeroIntentos + ' intentos');
    }
   

}



function generarNumeroSecreto(){
     

    return  Math.floor(Math.random()*10)+1;
}
asinarTexto('h1','juego del numero secreto');
asinarTexto('p','indica un numero del 1 al 10');
