// variables
let secretNum = 0;
let attempts = 0;
let randomNumbersList = [];
let maxNum = 10;
// funciones
// asignar texto a elementos html
function assignTextElement(elemento, texto) {
    let htmlElement = document.querySelector(elemento);
    htmlElement.innerHTML = texto;
    return;
}
// generador de numero aleatorio
function generateRandomNum() {
    let number = Math.floor(Math.random() * maxNum) + 1;
    // final del juego
    if (randomNumbersList.length === maxNum) {
        assignTextElement('p', '¡Ya haz adivinado todos los números posibles!')
    } else {
        // si el numero generado ya esta en la lista generar uno nuevo
        if (randomNumbersList.includes(number)) {
            return generateRandomNum();
        } else {
            // se añade a la lista para que no se repita
            randomNumbersList.push(number);
            return number;
        }
    }
}
// limpiar la caja
function newBox() {
    document.querySelector('#userValue').value = '';
}
// funcion para reiniciar el juego
function initialConditions() {
    // mensajes iniciales
    assignTextElement('h1', 'Juego del número secreto');
    assignTextElement('p', `Indica un número entre 1 al ${maxNum}`);
    // nuevo numero aleatorio
    secretNum = generateRandomNum();
    // reinicio del numero de intentos
    attempts = 1;
}
// para reiniciar el juego
function restartGame(){
    // limpiar el input
    newBox();
    // condiciones iniciales
    initialConditions();
    // inhabilitar de nuevo el boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
// funcion que compara el numero del input con el random
function verifyAttempt() {
    let userNum = parseInt(document.getElementById('userValue').value);

    // en caso de acertar
    if (userNum === secretNum) {
        assignTextElement('p', `Acertaste el número en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // caso donde no se acierta
        if (userNum > secretNum) {
            assignTextElement('p', 'El número secreto es menor');
        } else {
            assignTextElement('p', 'El número secreto es mayor');
        }
        attempts++;
        newBox();
    }
    return;
}

initialConditions();