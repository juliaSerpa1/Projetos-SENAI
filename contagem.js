let listaAlunos = ['Icaro', 'elisama', 'tamires', 'willian'];

for(let numero = 0; numero < listaAlunos.length; numero ++){
    if(numero == 0){
        console.log('o numero eh zero!')
    }else if(numero % 2 == 0){
        console.log(`o numero ${numero} é par!`)
    }else if(numero % 2 == 1){
        console.log(`o numero ${numero} é impar!`)
    }
}