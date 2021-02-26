let num1 = 32;
let num2 = 31;
let num3 = 33;

let array = [1, 3, 4];

console.log(num1, num2, num3);

if (num1 > num2 && num1 > num3) {
    console.log(`Maior número: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`Maior número: ${num2}`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`Maior número: ${num3}`);
};
