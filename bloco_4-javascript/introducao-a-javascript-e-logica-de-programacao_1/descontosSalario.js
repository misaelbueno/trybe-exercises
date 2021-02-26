let salarioBruto = 1730;

// cálculo de destonto do INSS
if (salarioBruto <= 1556.94) {
    desconto = salarioBruto * 8 / 100
    salarioBruto -= desconto
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    desconto = salarioBruto * 9 / 100
    salarioBruto -= desconto
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    desconto = salarioBruto * 11 / 100
    salarioBruto -= desconto
} else if (salarioBruto > 5189.82) {    
    salarioBruto -= 570.88
};


// cálculo de destonto do IR
if (salarioBruto > 1903.99 && salarioBruto <= 2826.65) {
    desconto = (salarioBruto * 7.5 / 100) - 142.80;
    salarioBruto -= desconto;
} else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
    desconto = (salarioBruto * 15 / 100) - 354.80;
    salarioBruto -= desconto;
} else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
    desconto = (salarioBruto * 22.5 / 100) - 636.13;
    salarioBruto -= desconto;
} else if (salarioBruto > 4664.68) {
    desconto = (salarioBruto * 27.5 / 100) - 869.36;
    salarioBruto -= desconto
};


console.log(salarioBruto.toFixed(2));

