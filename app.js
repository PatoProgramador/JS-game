// variables
let secretNumber = 8;
let userNumber = prompt('Indica un número entre 1 y 10, por favor: ');
// comparacion
if (userNumber == secretNumber) {
    // si el numero es igual
    alert(`¡Acertaste el número! el número es: ${userNumber}`);
} else {
    if (userNumber > secretNumber) {
        alert('El número secreto es menor');
    } else {
        alert('El número secreto es mayor');
    }
    // si no acierta el numero
    // alert('Lo siento, no acertaste el número');
}