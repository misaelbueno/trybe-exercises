let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// exercicio 1
/* for (let cont = 0; cont < numbers.length; cont+=1) {
  console.log(numbers[cont]);
}; */

// exercicio 2 
/* soma = 0;
for (let cont = 0; cont < numbers.length; cont+=1) {
  soma += numbers[cont];
};
console.log(soma); */

// exercicio 3 e 4
/* let soma = 0;
let total = 0;
for (let cont = 0; cont < numbers.length; cont+=1) {
  soma += numbers[cont];
  total += 1
};

let media = soma / total
console.log(media);

if (media > 20) {
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor que 20")
} */

// exercicio 5
/* let maior = numbers[0]
for (let cont = 0; cont < numbers.length; cont+=1) {
  if (numbers[cont] > maior) {
    maior = numbers[cont];
  }
console.log(`Maior número: ${maior}`) */

// exercicio 6
/* let totImpar = 0;
for (let cont = 0; cont < numbers.length; cont+=1) {
  if (numbers[cont] % 2 != 0) {
    totImpar += 1
  }
}

if (totImpar != 0) {
  console.log(`Total de número impares: ${totImpar}`)
} else {
  console.log("Nenhum valor ímpar encontrado!")
} */

// exercicio 7
/* let menor = numbers[0]
for (let cont = 0; cont < numbers.length; cont+=1) {
  if (numbers[cont] < menor) {
    menor = numbers[cont];
  }
}

console.log(menor); */

// exercicio 8 e 9
let array = [];
for (let c = 1; c <= 25; c+=1) {
  array.push(c);
}

console.log(array)

let array2 = [];
let numDIv = 0;
for (let c = 0; c < array.length; c+=1) {
  numDIv = (array[c] / 2)
  array2.push(numDIv);
}; 


console.log(array2)