let custo = 150;
let venda = 250;

if (custo < 0 || venda < 0 ) {
    console.log("ERRO! Valor inválido!")
};

let impostoCusto = (150 * 20) / 100;
let custoTotal = custo + impostoCusto;


let lucroTotal = (venda - custoTotal) * 1000;

console.log(`Lucro na venda de mil produtos: ${lucroTotal}`);