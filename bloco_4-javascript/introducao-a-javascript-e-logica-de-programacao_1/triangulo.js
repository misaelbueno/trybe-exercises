let angulo1 = 90;
let angulo2 = 30;
let angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3;

console.log(`Ângulos: ${angulo1}, ${angulo2}, ${angulo3}`)
console.log('*************************')

console.log("É UM TRIÂNGULO?:")
console.log("-------------------")
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("ângulo inválido!")
}else if (somaAngulos == 180) {
    console.log(true)
} else if (somaAngulos != 180) {
    console.log(false);
}


 