
/*class Data {
    public dia: number;
    private mes: number;
    ano: number;

    constructor (dia: number, mes: number, ano: number = 1970) {
       //1970 = valor default para o ano
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
    }
};
*/

//Outra forma mais simples de escrever:

class Data {
    constructor (public dia: number, public mes: number, public ano: number = 1970) {

    }
}

//Testar o código antes de compilar: Site Typescript Playground
//No javascript, esse código ficará escrito da seguinte maneira:
/*
"use strict";
class Data {
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
*/


const data = new Data (1, 1, 2020);
console.log(data.dia);
console.log(data.mes); //não vai funcionar - privado só é acessado dentro da classe

const data2 = new Data (1, 1);

// -------------------------

/*
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMax: number = 220
    ) {}

    acelerar () {
        const aceleracao = 5;
        if (this.velocidadeAtual + aceleracao <= this.velocidadeMax) {
        this.velocidadeAtual += aceleracao;
        }
    }

    frear () {
        const frenagem = 5;
        this.velocidadeAtual -= frenagem;
    }
}

const carro = new Carro ("Chevrolet", "Prisma", 250);
carro.acelerar();
*/


//Outro modo de escrever (Modificadores de Acesso)

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMax: number = 220
    ) {}

    private alterarVelocidade (delta: number) {
        //FAZER AS VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMax: 0
        }
        
    }

    acelerar() {
        this.alterarVelocidade(5);
        
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro ("Chevrolet", "Prisma", 250);
carro.acelerar();

//-----------------

//Herança

class Camaro extends Carro{
    private turbo = false;

    constructor() {
        super("Chevrolet", "Camaro", 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
