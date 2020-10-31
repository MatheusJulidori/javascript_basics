import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Contas/ContaCorrente.js"
import { ContaPoupanca } from "./Contas/ContaPoupanca.js"
import { ContaSalario } from "./Contas/ContaSalario.js"

const cliente1 = new Cliente("Ricardo", 11122233309)

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001)
contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
contaPoupanca.sacar(10)

const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(500)
contaSalario.sacar(10)

console.log(contaSalario)