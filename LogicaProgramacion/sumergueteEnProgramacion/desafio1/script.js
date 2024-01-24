alert("¡Bienvenida y bievenido a nuestro sitio web!")

let nombre = 'Luna';

let edad = 25;

const mayoriaEdad = 18;
const numeroDeVentas = 25;

let saldoDisponible = 1000;

let mensajeDeError = "¡Error! Completa todos los campos";

console.log(mensajeDeError)

nombre = prompt("Cual es tu nombre ");

edad = prompt("Indica cual es tu edad")

if(edad >= mayoriaEdad ){
    alert(nombre+" !Puedes obtener tu licencia de conducir")
} else {
    alert(nombre+" No puedes obtenerla")
}