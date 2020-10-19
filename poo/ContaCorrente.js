import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    //public
    agencia;

    //private
    _saldo = 0;


    get saldo() {
        return this._saldo
    }

    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente;
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

    extrato() {
        console.log(this._saldo)
    }

    transferir(valor, conta) {
        this.sacar(valor)
        conta.depositar(valor)
    }


}