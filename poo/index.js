import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

//Clientes
const cliente1 = new Cliente()

cliente1.nome = "Ricardo"
cliente1.cpf = 14489075600



const cliente2 = new Cliente()

cliente2.nome = "Ullysses"
cliente2.cpf = 14489071232

console.log(cliente1)
console.log(cliente2)


//Contas corrente
const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente1


const conta2 = new ContaCorrente()

contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente2

// Ações
contaCorrenteRicardo.extrato()

console.log("--------Depósito-------")
contaCorrenteRicardo.depositar(10000)
contaCorrenteRicardo.extrato()

console.log("----------Saque-------")
let valorSacado = contaCorrenteRicardo.sacar(400)
console.log("Valor sacado: R$" + valorSacado)
contaCorrenteRicardo.extrato()
valorSacado = contaCorrenteRicardo.sacar(40000000)

console.log("----Transferencia----")
contaCorrenteRicardo.transferir(3230, conta2)
conta2.extrato()
contaCorrenteRicardo.extrato()