// variables
let day;
let num;
let score;
let saldo = 50000;
let name;
// 1
day = prompt('¿Qué dia de la semana es hoy?');

if (day == 'Sábado' || day == 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
// 2
num = prompt('Ingresa un número, por favor: ');

if (num < 0) {
    alert('El número es negativo');
} else {
    alert('El número es positivo');
}
// 3
score = prompt('Ingresa tu puntuación del juego: ')

if (score >= 100) {
    alert('¡Felicidades, has ganado!');
} else {
    alert('Intenta nuevamente para ganar.');
}
// 4
alert(`Su saldo es de ${saldo} COP`)
// 5
name = prompt('Ingresa tu nombre, por favor: ')

alert(`Bienvenida/o ${name}`)