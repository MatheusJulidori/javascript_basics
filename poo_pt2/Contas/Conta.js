//Classe abstrata, só serve para ser ehrdada, nunca terá um objeto instanciado a partir dela

import { Cliente } from "../Cliente.js"

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Class 'Conta' is an abstract class and should not be used to directly instance a new object. Use inheriting classes")
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    //Método abstrato
    sacar(valor) {
        //Vazio pois é "abstrato", ou seja, tem que ter o método sacar,mas cada classe herdeira deve sobrescrever esse método com o seu método de scaar pois cada uma tem taxa diferente
        //Deixando esse método vazio, proteje o sistema caso alguem esqueça de sobrescrever o método e acabe usando o da classe pai. Assim, se esquecerem, o método n faz nd
        throw new Error("Abstract method 'sacar' used, subscribe this method in the inherited class.")
    }

    _sacar(valor, taxa) {
        let valorSacado = valor * taxa
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        } else {
            return 0;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo += valor
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)

    }
}