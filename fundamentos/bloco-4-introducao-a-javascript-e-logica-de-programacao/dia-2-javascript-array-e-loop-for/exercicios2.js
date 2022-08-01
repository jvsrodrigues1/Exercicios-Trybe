let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (index in numbers) {
  console.log(numbers[index]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let somaDosNumeros = 0;
for (soma of numbers) {
  somaDosNumeros += soma;
}
console.log(somaDosNumeros);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaArray = 0;
let somaDosNumeros = 0;

for (media of numbers) {
  somaDosNumeros += media;
}
mediaArray = somaDosNumeros / numbers.length;

console.log(mediaArray);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let mediaArray = 0;
let somaDosNumeros = 0;

for (media of numbers) {
  somaDosNumeros += media;
}
mediaArray = somaDosNumeros / numbers.length;

if (mediaArray >= 20) {
  console.log("valor maior que 20");
}
if (mediaArray < 20) {
  console.log("valor menor ou igual a 20");
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (num of numbers) {
  if (num > maiorValor) {
    maiorValor = num;
  }
}
console.log(maiorValor);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddNumbers = 0;

for (odds of numbers) {
  if (odds % 2 !== 0) {
    oddNumbers = odds;
    console.log(oddNumbers);
  } else if (oddNumbers === 0) {
    oddNumbers = "nenhum valor ímpar encontrado";
    console.log(oddNumbers);
  }
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (num of numbers) {
  if (num < menorValor) {
    menorValor = num;
  }
}
console.log(menorValor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
}
