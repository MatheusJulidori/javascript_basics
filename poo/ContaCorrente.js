export class ContaCorrente {
    //public
    agencia;
    cliente;


    //private
    _saldo = 0;

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