
///funciones
function saludoAlIngresar() {
    console.log('Hola mundo');
}

function saludoUsuario(nombre) {
    alert('Hola saludos '+nombre + ' Bienvenido!!')
}

function  dobleNumero(numero1,numero2,numero3){
    return numero1+numero2+numero3 * 2;
}

function promedioNumeros(numero1,numero2,numero3) {
    promedio = (numero1+numero2+numero3)/3;

    return promedio;
}

function numeroMayor(numero1, numero2) {

    if (numero1 > numero2){
        return numero1
    } else {
        return numero2;
    }
}

function numeroMultiplicado (numero) {

    return numero * numero;
}
//codigo

let nombreUsuario = prompt('introduce tu nombre');





saludoAlIngresar();
saludoUsuario(nombreUsuario);
console.log(dobleNumero(2,2,2));
console.log(promedioNumeros(2,2,2));
console.log(numeroMayor(2,4));
console.log(numeroMultiplicado(3));