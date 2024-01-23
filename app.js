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

function userAttempt() {
    alert('Click jejejeje');
    return;
}

assignTextElement('h1', 'Juego del número secreto');
assignTextElement('p', 'Indica un número del 1 al 100');