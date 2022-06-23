//Swith
let alimeto = "arroz";

switch (alimeto.toLowerCase()) {
    case "Macarrao":
        console.log('O alimento selecionado é saudavel')
        break;

    case "Batata":
        console.log("o alimento e saudavel")
        break;

    default:
        console.log('alimento não encontrado')
        break;
}
//.toLowerCase() padroniza as letras em minusculo
//.toUpperCase() padroniza as letras para maiusculo
//if else

if(alimeto.toLowerCase() == 'Feijao'){
    console.log('Feijao e rico em ferro e proteinas')
}else if(alimento.toLowerCase() == 'Batata'){
    console.log("Pure de batata e muito bom")
}else{
    console.log('Alimento não eh saudavel')
}

//for
for(let contador = 0; contador < 3; contador ++){
    console.log('senha incorreta, se errala 3 vezes o cartao sera bloqueado')
}
console.log('cartao bloqueado')