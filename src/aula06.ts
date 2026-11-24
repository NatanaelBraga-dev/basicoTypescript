//aula sobre readonly array 

//----------------------------------------------------------------------
//FORMAS DE DECLARAR UM ARRAY

let numeros:number[] = [10,20,30];

// let numeros: Array<number|string> = [10,20,30];

// let numeros: (number|string)[] = [10,20,30, "Bruno"];

//-----------------------------------------------------------------------

numeros.push(40) //Insere no final
numeros.unshift(40) //Insere no inicio do Array
numeros.pop() //Retira o ultimo elemento do Array
numeros.shift() //Retira do inicio do Array

console.log(numeros)

let numeros_ro: ReadonlyArray<number> = [100,200,300] //Array somente para leitura, não é possivel executar métodos para esse Array

console.log(numeros_ro)