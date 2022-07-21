// Exercicio 1 //

const a = 10;
const b = 5;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + (a % b));

//Exercicio 2 //

const c = 20;
const d = 21;

if (c > d) {
  console.log("'c' é maior que 'd'");
} else {
  console.log("'d' é maior que 'c'");
}

// Exercicio 3 //

const e = 6;
const f = 4;
const g = 2;

if (e > f && e > g) {
  console.log("O maior número é: " + e + " (e)");
} else if (f > e && f > g) {
  console.log("O maior número é: " + f + " (f)");
} else {
  console.log("O maior número é: " + g + " (g)");
}

// Exercicio 4 //

const number = 4;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
