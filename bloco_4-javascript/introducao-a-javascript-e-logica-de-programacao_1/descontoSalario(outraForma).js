let aliquotINSS;
let aliquotIR = 0;

let salarioBruto = 1730;
// let salarioBruto = 3000;

// cálculo de destonto do INSS
if (salarioBruto <= 1556.94) {    
    aliquotINSS = salarioBruto * 0.08
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotINSS = salarioBruto * 0.09
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotINSS = salarioBruto * 0.11
} else if (salarioBruto > 5189.82) {    
    aliquotINSS = salarioBruto - 570.88
};

let baseSalario = salarioBruto - aliquotINSS;



// cálculo de destonto do IR
if (baseSalario > 1903.99 && baseSalario <= 2826.65) {
    aliquotIR = (baseSalario * 0.075) - 142.80;
} else if (baseSalario > 2826.65 && baseSalario <= 3751.05) {
    aliquotIR = (baseSalario * 0.15) - 354.80;
} else if (baseSalario > 3751.05 && baseSalario <= 4664.68) {
    aliquotIR = (baseSalario * 0.225) - 636.13;
} else if (baseSalario > 4664.68) {
    aliquotIR = (baseSalario * 0.275) - 869.36;
};


console.log(baseSalario - aliquotIR);
