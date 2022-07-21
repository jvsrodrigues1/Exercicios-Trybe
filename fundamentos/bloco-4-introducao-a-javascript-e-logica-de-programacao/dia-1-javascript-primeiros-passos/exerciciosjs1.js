// Exercicio 1 //

const a = 5;
const b = 6;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(divisao);

// Exercicio 2 //

const x = 50;
const y = 100;

if (x > y) {
  return x;
} else {
  return y;
}

// Exercicio 3 //

const q = 12;
const w = 1;
const e = 5;

if (q > w && q > e) {
  return q;
} else if (w > q && w > e) {
  return w;
} else if (e > q && e > w) {
  return e;
} else {
  return 0;
}
