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

// Exercico 7 //

const grade = 100;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// Exercicio 8 //

const numeroA = 10;
const numeroB = 9;
const numeroC = 20;

if (numeroA % 2 === 0 || numeroB % 2 === 0 || numeroC === 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercicio 9 //

const ab = 1;
const bc = 3;
const cd = 5;

let isOdd = false;

if (ab % 2 !== 0 || bc % 2 !== 0 || cd % 2 !== 0) {
  isOdd = true;
}
console.log(isOdd);

// Exercicio 10 //

const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
}

// Exercicio 11 //

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.0;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.8;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.8;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
}

console.log("Salário: " + (baseSalary - aliquotIR));
