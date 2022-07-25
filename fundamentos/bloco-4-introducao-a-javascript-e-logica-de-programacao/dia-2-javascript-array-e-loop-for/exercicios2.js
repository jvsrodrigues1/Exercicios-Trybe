let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1 //

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// Exercicio 2 //

// let somaDosNumeros = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   somaDosNumeros += numbers[index];
// }
// console.log(somaDosNumeros);

// Exercicio 3 //

// let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers1.length; index += 1) {
//   sum += numbers1[index];
// }

// let average = sum / numbers1.length;

// console.log(average);

// Exercicio 4 //

// let numbers1 = [5, 9, 3, 1, 1, 8, 1, 2, 3, 7];
// let sum = 0;

// for (let index = 0; index < numbers1.length; index += 1) {
//   sum += numbers1[index];
// }

// let average = sum / numbers1.length;

// if (average > 20) {
//   console.log("Valor maior que 20");
// } else {
//   console.log("Valor menor que 20");
// }

// Exercicio 5 //

let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);
