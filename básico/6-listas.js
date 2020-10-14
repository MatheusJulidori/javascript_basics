console.log("Trabalhando com listas")

const salvador = `Salvador`
const saoPaulo = 'São Paulo'
const rioDeJaneiro = 'Rio de Janeiro'

console.log(`Destino possíveis: ${salvador},${saoPaulo},${rioDeJaneiro}`)


const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "São Paulo",
    "Curitiba"
)

console.log(`Destino possíveis: ${listaDeDestinos}`)

//Adiciona items na lista
listaDeDestinos.push("Belo Horizonte")

console.log(`Destino possíveis: ${listaDeDestinos}`)

//Removendo items da lista 
//  lista.splice(posição do item, numero de items a serem deletados)
listaDeDestinos.splice(4, 1)

console.log(`Destino possíveis: ${listaDeDestinos}`)

//Exibindo valores especificos
console.log(listaDeDestinos[1])