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

// Exercicio 5 //

let angleA = 100;
let angleB = 30;
let angleC = 50;

let sumOfAngles = angleA + angleB + angleC;

let allAnglesArePositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesArePositive) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro Angulo Invalido");
}

// Exercicio 6 //

const chessPiece = "bispo";

switch (chessPiece.toLowerCase()) {
  case "rei":
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo-> Diagonal.");
    break;
  case "rainha":
    console.log("Rainha-> Diagonal, horizontal e vertical.");
    break;
  case "cavalo":
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case "torre":
    console.log("Torre -> Horizontal e vertical.");
    break;
  case "peão":
    console.log(
      "Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas."
    );
    break;
  default:
    console.log("Erro, peça inválida!");
    break;
}
