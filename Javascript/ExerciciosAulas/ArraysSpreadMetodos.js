//Métodos

//Método tradicional de acessar informações no array

const alunasGama =["Paula","Maria", "Estela", "Clara"];

console.log(alunasGama[2]);

//Operador Spread: (...)

const alunasXp = [...alunasGama, "Evelyn"];

console.log(alunasXp);

//---------------

//Métodos de Iteração tradicionais

for  (let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i]);
}

//Método Map

alunasXp.map(aluna => console.log(aluna));

// Método Filter

const numeros = [34, 45, 67, 90, 55, 76];

const numerosImpares = numeros.filter(numero => numero % 2 != 0);
console.log(numerosImpares);

const numerosPares = numeros.filter(numero => numero % 2 == 0);
console.log(numerosPares);

//Método Sort

const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a);
console.log(numerosOrdenadosDecrescente);

//Método Reduce: reduz o array a um resultado de uma operação matemática

const numbers = [1, 34, 35];

const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0);

console.log(soma);
