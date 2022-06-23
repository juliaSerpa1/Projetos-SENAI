let dataHoje = new Date();

let idade = 18  

let data = 2020/06/26

let listaParticipantes = ["Amanda", "Bruna", "Raquel", "Fabio"]
let quantidadeCadastro = listaParticipantes.length;

    if(data >= dataHoje){
       console.log(`Evento para data ${data} permitido`);
    }else{
        console.log('Data invalida!');
    }
    if(idade >= 18){
        console.log('Idade permitida');
    }else{
        console.log(`A idade ${idade} não é permitida!`);
    }
    if(quantidadeCadastro < 100){
        console.log(`A quantidade ${quantidadeCadastro} é permitida`);
    }else{
        console.log('Evento cheio');
    }

