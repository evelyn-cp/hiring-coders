//Objetos Destructuring

const pessoa = {
    nome: "Luisa",
    idade: 25,
    cidade: "Rio de Janeiro"
};

// Notação de ponto

console.log(pessoa.nome);

// Notação de colchetes

console.log(pessoa['idade']);

//Como desestruturar objetos

const {nome, idade, cidade} = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);

//-----------------

const filmes = [
    {
        id: 1,
        titulo: "Stuck in love",
        descricao: "An acclaimed writer, his ex-wife, and their teenaged children come to terms with the complexities of love in all its forms over the course of one tumultuous year.",
        duracao: 97
    },
    {
        id: 2,
        titulo: "My neighbor Totoro",
        descricao: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
        duracao: 86
    },
    {
        id: 3,
        titulo: "Your name",
        descricao: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        duracao: 106
    },
]

const [{titulo, descricao, duracao}] = filmes;

console.log(titulo);

filmes.map(filme => console.log(filme.descricao));

