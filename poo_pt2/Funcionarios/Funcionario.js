export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._cpf = cpf
        this._salario = salario

        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha) {
        return this._senha == senha
    }

    cadastrarSenha(password) {
        this._senha = password;
    }

    mudarSenha(senhaAntiga, senhaNova) {
        if (senhaAntiga == this._senha) {
            this._senha = senhaNova;
        } else {
            console.log("Senha atual errada")
        }
    }
}