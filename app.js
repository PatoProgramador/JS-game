// variables
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userNumber = 0;
let attempts = 1;
let maxAttempts = 3;

while (userNumber != secretNumber) {
    userNumber = prompt('Indica un número entre 1 y 10, por favor: ');

    // cuando acierta
    if (userNumber == secretNumber) {
        // si el numero es igual
        alert(`¡Acertaste el número! el número es: ${userNumber}, lo hiciste en ${attempts} ${attempts == 1 ? 'intento' : 'intentos'}`);
    // cuando no acierta
    } else {
        // condicionales anidados
        if (userNumber > secretNumber) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Se incrementa el contador de intentos y reasigna variable
        attempts++
        // numero maximo de intentos
        if (attempts > maxAttempts) {
            alert(`Llegaste al número máximo de ${maxAttempts} intentos`);
            break;
        }
    }
}