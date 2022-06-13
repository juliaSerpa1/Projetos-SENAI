let pesoPeca = 100
let numeroPeca = 7
let nomePeca = 'Roda'

if(pesoPeca >= 100){
    console.log('Pode cadastrar a peça')
}else{
    console.log('Peso insuficiente')
}

if(numeroPeca  >= 10){
    console.log('Impossivel cadastrar, numero de peças excedido')
}else{
    console.log('Cadastro permitido')
}

if(nomePeca.length < 3){
    console.log('Numero de caracter insuficiente!')
}else{
    console.log('Cadastro permitido')
}