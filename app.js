// variables
let maxNumber = 100
let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
let userNumber = 0;
let attempts = 1;
let maxAttempts = 6;

while (userNumber != secretNumber) {
    userNumber = parseInt(prompt(`Indica un número entre 1 y ${maxNumber}, por favor: `));

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