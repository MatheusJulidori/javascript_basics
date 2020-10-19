import { Cliente } from "./Cliente.js"

export class ContaCorrente {

    //public
    agencia;

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