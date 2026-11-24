//Entendendo como funciona UNION TYPES
// let vteste: string | number;
let vteste: any; 
vteste = "Bruno"
vteste = 20 //Note que a variavel foi iniciada aceitando ser atribuída a dois tipos de valor 

let cursos = ["Javascript", "Typescript", "C++",100, false]; //automaticamente identifica o tipo como string e só permite adicionar valores string na lista
let valores = [100,399,222992];

valores.push(321)
cursos.push("Arduino")

console.log(cursos)
console.log(valores)
console.log(vteste)

//O que é o UNION TYPES - o Recurso permite adicionar valores de outro tipo a uma variável (utilizar somente quando necessário)