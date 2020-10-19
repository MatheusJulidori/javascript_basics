import { Cliente } from "./Cliente.js"

export class ContaCorrente {

    //statics
    static numeroDeContas = 0;

    //public
    agencia;
    ID = ContaCorrente.numeroDeContas + 1;
    //private
    _saldo = 0;
    _cliente;



    //accessors
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo
    }


    constructor(cliente, agencia) {
        this.cliente = cliente //Usando acessor pra poder fazer verificação
        this.agencia = agencia
        ContaCorrente.numeroDeContas += 1; //Incremente 1 no geral numeroDeContas das contas correntes. N usa o this pq o this especifica this obj,ou seja, apenas o objeto criado.
        //ContaCorrente.numeroDeContas especifica todas as contas, ou seja, se chamar um contrutor de conta corrente, ele incrementa o numeroDeContas e mantem salvo por ser static
    }


    //methods
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        } else {
            console.log("Valor inválido")
        }
    }

    sacar(valor) {
        if (this._saldo >= valor)
            this._saldo -= valor;
        else {
            console.log("Saldo insuficiente. Seu saldo atual é de R$" + this._saldo)
        }
        return valor;
    }

    transferir(valor, conta) {
        this.sacar(valor)
        conta.depositar(valor)
    }


}