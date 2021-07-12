//Tipos

// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 25;
const avaliacao: number = 5.5;

// String
const nome: string = "Evelyn";

// Array
const idades: number[] = [23, 28, 45, 32, 56];
const idades2: Array<number> = [18, 26, 42, 60];

// Tuple
let jogadores: [string, string, string];
jogadores = ["nome1", "nome2", "nome3"];

//Mais tipos no site: https://www.typescriptlang.org/docs/handbook/basic-types.html

// Enum
enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, "Evelyn, false"];
const retornoDaAPI2: any = {
    // ...
};

// Void (usado em funções, quando não tem retorno)
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const und: undefined = undefined;
const n: null = null;

// Object
function criar (objeto: object) {
    // ...
}

criar ({
    propriedade: 1,
});

    // criar ("Evelyn") // Dá erro

// Tipo Never (nunca finaliza)
function loopInfinito (): never {
    while (true) { }
};

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro("Algo falhou");
}

// Union Types
    // const nota: number | string = 5;
function exibirNota (nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Type Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;

}
    //type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: "nome1",
    sobrenome: "sobrenome1",
    dataNascimento: new Date()
}, {
    nome: "nome2",
    sobrenome: "sobrenome2",
    dataNascimento: new Date()
}];

function tratarFuncionarios (funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log("Nome do funcionário: ", funcionario.nome);
    }
}

    //Valores nulos ou opcionais

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

    //O ponto ? define como "undefined"/campo opcional

const contato: Contato = {
    nome: "Evelyn",
    telefone1: "12345678",
}

// Type Assertion
const minhaIdade: any = 25;
(minhaIdade as number).toString();
 //ou:  (<number>minhaIdade).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
 // Ou então, pode escrever assim também: 
 // const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);

