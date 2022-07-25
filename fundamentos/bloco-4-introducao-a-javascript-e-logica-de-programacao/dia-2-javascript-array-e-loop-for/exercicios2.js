let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1 //

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// Exercicio 2 //

let somaDosNumeros = 0;

for (let index = 0; index < numbers.length; index += 1) {
  somaDosNumeros += numbers[index];
}
console.log(somaDosNumeros);

// Exercicio 3 //

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers1.length; index += 1) {
  sum += numbers1[index];
}

let average = sum / numbers1.length;

console.log(average);
