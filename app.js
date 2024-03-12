//Resolución del desafío 2: https://github.com/alura-es-cursos/js-curso/blob/main/2.md
//Resolución del desafío 3: https://github.com/alura-es-cursos/js-curso/blob/main/3.md
//Resolución del desafío 4: https://github.com/alura-es-cursos/js-curso/blob/main/4.md

//let titulo = document.querySelector('h1');  // Document es un puente entre JS y HTML. atribuye la etiqueta h1 a la variable titulo. (objeto)
//titulo.innerHTML = 'Juego del numero secreto'

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Ingrese un número del 1 al 10:';

let numeroSecreto = generarNumeroSecreto();
//console.log(numeroSecreto);
let intentos = 1;
let listaNumerosSorteados = []; //lista
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);  // Document es un puente entre JS y HTML. atribuye la etiqueta h1 a la variable titulo. (objeto)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //alert('Clic desde el botón')
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto); //condicional. devuelve true or false (igual en valor y en tipo de dato (number))

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // reiniciar juego al clickear el botón 'nuevo juego'
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'el número secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario'); // '#' misma función que el getById
    //valorCaja = '';
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //return Math.floor(Math.random()*10)+1;
    //return numeroSecreto;

    // Si ya sorteamos todos los numeeros: condición de salida a la recursividad.
    if (listaNumerosSorteados == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{   

        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //recursividad, se llama a sí misma. Crear condición de salida

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Ingrese un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja/reiniciar
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true' ); // desabilitar boton
    
}


//asignarTextoElemento('h1', 'Juego del número secreto!');
//asignarTextoElemento('p', 'Ingrese un número del 1 al 10:');
condicionesIniciales();
