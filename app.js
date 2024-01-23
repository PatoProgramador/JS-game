// variables
let secretNum = generateRandomNum();
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
// funcion que compara el numero del input con el random
function verifyAttempt() {
    let userNum = parseInt(document.getElementById('userValue').value);

    if (userNum === secretNum) {
        assignTextElement('p', '¡Acertaste el número!');
    } else {
        if (userNum > secretNum) {
            assignTextElement('p', 'El número secreto es menor');
        } else {
            assignTextElement('p', 'El número secreto es mayor');
        }
    }
    return;
}

assignTextElement('h1', 'Juego del número secreto');
assignTextElement('p', 'Indica un número entre 1 al 100');