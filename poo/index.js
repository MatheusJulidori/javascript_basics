import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

//Clientes
const cliente1 = new Cliente("Ricardo", 14489075600)
const cliente2 = new Cliente("Ullysses", 14489071232)

//Contas corrente
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1001)

// Ações
console.log("----Informações----")
console.log(contaCorrenteRicardo.cliente.nome)
console.log(contaCorrenteRicardo.cliente.cpf)
console.log(contaCorrenteRicardo.agencia)
console.log(contaCorrenteRicardo.saldo)

console.log("--------Depósito-------")
contaCorrenteRicardo.depositar(10000)
console.log(contaCorrenteRicardo.saldo)

console.log("----------Saque-------")
let valorSacado = contaCorrenteRicardo.sacar(400)
console.log("Valor sacado: R$" + valorSacado)
console.log(contaCorrenteRicardo.saldo)
valorSacado = contaCorrenteRicardo.sacar(40000000)

console.log("----Transferencia----")
contaCorrenteRicardo.transferir(3230, conta2)
console.log(conta2.saldo)
console.log(contaCorrenteRicardo.saldo)

console.log("----Geral----")
console.log(contaCorrenteRicardo)
console.log(conta2)
console.log(ContaCorrente.numeroDeContas)