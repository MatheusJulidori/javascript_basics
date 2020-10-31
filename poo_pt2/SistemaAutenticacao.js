export class SistemaAutenticacao {

    static isAuthenticable(autenticavael) {
        return "autenticar" in autenticavael && autenticavael.autenticar instanceof Function
            /*Verifica se "autenticar" existe no objeto "autenticavel" e se "autenticar"
            é método e não atributo*/
    }

    static login(autenticavael, senha) {
        if (SistemaAutenticacao.isAuthenticable(autenticavael)) {
            return autenticavael.autenticar(senha)
        }
        return false;
    }
}