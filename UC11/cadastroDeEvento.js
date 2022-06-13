function Cadastro(){
    const idade = prompt('Digite um número');
    const data = prompt('Digite uma data');

   if(data >= new Date()){
       console.log(`evento para data ${data} permitido`)
    }else{
        console.log('data não permitida')
    }
    if(idade >= 18){
        console.log('idade permitida')
    }else{
        console.log('idade nao permitida pera evento!')
    }

}