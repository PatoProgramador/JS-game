// variables
let secretNumber = 8;
let userNumber = 0;
let attemps = 1;
let wordCounter = 'intento';

while (userNumber != secretNumber) {
    userNumber = prompt('Indica un número entre 1 y 10, por favor: ');

    // cuando acierta
    if (userNumber == secretNumber) {
        // si el numero es igual
        alert(`¡Acertaste el número! el número es: ${userNumber}, lo hiciste en ${attemps} ${wordCounter}`);
    // cuando no acierta
    } else {
        // condicionales anidados
        if (userNumber > secretNumber) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Se incrementa el contador de intentos y reasigna variable
        attemps++
        wordCounter = 'intentos';
    }
}
