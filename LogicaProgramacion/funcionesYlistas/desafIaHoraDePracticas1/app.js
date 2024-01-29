let titulo = document.querySelector("h1");
titulo.innerHTML = 'juego del numero secreto';

function consolaMsg(){
    console.log('el boton de consola ha sido cliekeado')
}

function clickPromp(){

    nombre = prompt('dame el nombre de tu ciudad');
    alert('el nombre de tu ciudad es' + nombre);
    
}

function msgAlerta(){
    alert('has presionado el boton  de alerta');
}

function suma(){
    numero1 = Number(prompt('introduce el numero 1'));
    numero2 = Number(prompt('introduce el numero2'));

    let suma = numero1 + numero2;

    alert('la suma de dos numeros es ' + suma);
}