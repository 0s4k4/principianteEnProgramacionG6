// let titulo = document.querySelector("h1");
// titulo.innerHTML = 'juego del numero secreto';
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'indica un numero del 1 al 10';
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
    if(numeroUsuario ==  numeroSecreto){
        console.log('los numeros coinciden, felicidades')
    } else {
        console.log('el numero no es el mismo');
    }
    alert('hola click desde el boton');

}

function generarNumeroSecreto(){
     

    return  Math.floor(Math.random()*10)+1;
}
asinarTexto('h1','juego del numero secreto');
asinarTexto('p','indica un numero del 1 al 10');
