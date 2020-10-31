import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor1 = new Diretor("Matheus", 10000, 14489075600)
const gerente1 = new Gerente("Generico", 6000, 12345678900)
const cliente1 = new Cliente("Mat", 14489075600, 456)

diretor1.cadastrarSenha("senha")
gerente1.cadastrarSenha("senha")

const estaLogado = SistemaAutenticacao.login(diretor1, "senha")
console.log(estaLogado)
const estaLogado2 = SistemaAutenticacao.login(gerente1, "senha")
console.log(estaLogado2)

const estaLogado3 = SistemaAutenticacao.login(cliente1, 456)
console.log(estaLogado3)