//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// function meuNome(nome){
//     nome = 'victor'
//     console.log(`meu nome é ${nome}`)
// }
// meuNome('victor')

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function tabuadaDe6(numero){
    for(let contador of array){
        console.log(`${contador} X ${numero} =  ${contador * numero}`)
    }

}
tabuadaDe6(6)