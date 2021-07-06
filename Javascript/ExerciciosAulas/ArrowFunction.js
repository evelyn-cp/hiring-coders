//Forma usual de escrever uma função

function soma (a, b) {
    return a + b;
};

console.log(soma(3, 5));

//Forma utilizando Arrow Function

const soma2 = (num1, num2) => num1 + num2;

//Exemplo

const sayHello = name => `Hello ${name}`

console.log(sayHello('Lyn'));