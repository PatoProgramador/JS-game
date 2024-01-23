// variables
let secretNum = 0;
let attempts = 0;
// funciones
// asignar texto a elementos html
function assignTextElement(elemento, texto) {
    let htmlElement = document.querySelector(elemento);
    htmlElement.innerHTML = texto;
    return;
}
// generador de numero aleatorio
function generateRandomNum() {
    return Math.floor(Math.random() * 10) + 1;
}
// limpiar la caja
function newBox() {
    document.querySelector('#userValue').value = '';
}
// funcion para reiniciar el juego
function initialConditions() {
    // mensajes iniciales
    assignTextElement('h1', 'Juego del número secreto');
    assignTextElement('p', 'Indica un número entre 1 al 100');
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