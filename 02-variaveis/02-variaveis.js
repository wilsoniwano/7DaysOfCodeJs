const name = prompt('Qual o seu nome')
const age = prompt('Quantos anos você tem?')
const favoriteLanguage = prompt('Qual linguagem de programação você está estudando?')

alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${favoriteLanguage}!`)

const answer = prompt(`Você gosta de estudar ${favoriteLanguage}? Responda com o número 1 para SIM ou 2 para NÃO.`)

alert(answer == 1 ? 'Muito bom! Continue estudando e você terá muito sucesso.' : 'Ahh que pena... Já tentou aprender outras linguagens?')