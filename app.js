function assignTextElement(elemento, texto) {
    let htmlElement = document.querySelector(elemento);
    htmlElement.innerHTML = texto;
}

function userAttempt() {
    alert('Click jejejeje');
}

assignTextElement('h1', 'Juego del número secreto');
assignTextElement('p', 'Indica un número del 1 al 100');