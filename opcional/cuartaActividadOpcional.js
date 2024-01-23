// variables
let nombre = 'Pato';
let lang;
let valor1 = 1;
let valor2 = 8;
let resultado = 0;
let edad;
let numero;
let count = 1;
let nota = 9;
let numeroRandom = Math.random()
// 1
console.log('Bienvenidas y bienvenidos al programa extraño de consola jeje');
// 2
console.log(`¡Hola, ${nombre}!`);
// 3
alert(`¡Hola, ${nombre}!`);
// 4
lang = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lang);
// 5
resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
// 6
resultado = Math.abs(valor1 - valor2);
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);
// 7
edad = parseInt(prompt('Ingresa tu edad, por favor: '));
if (edad >= 18) {
    console.log('¡Eres mayor de edad!');
} else {
    console.log('¡Eres menos de edad!');
}
// 8
numero = parseInt(prompt('Ingresa un número: '));
if (numero > 0) {
    alert('El número es positivo.');
} else if (numero == 0) {
    alert('El número es igual a 0.');
} else {
    alert('El número es negativo.');
}
// 9
while (count <= 10) {
    console.log(count);
    count++;
}
// 10
if (nota >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}
// 11
console.log(`El número aleatorio es ${numeroRandom}`);
// 12
numeroRandom = Math.floor(Math.random() * 10) + 1;
console.log(`El número random entre 1 y 10 es ${numeroRandom}`);
// 13
numeroRandom = Math.floor(Math.random() * 1000) + 1;
console.log(`El número random entre 1 y 1000 es ${numeroRandom}`);