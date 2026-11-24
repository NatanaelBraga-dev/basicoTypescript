// Desafio 01 — Analisador de alunos

// Crie um pequeno programa em TypeScript capaz de analisar as notas de vários alunos.

// Cada aluno deve possuir:

// nome
// notas

// Considere que cada aluno possui 3 notas.

// Seu programa deve:

// Calcular a média de cada aluno.
// Determinar sua situação:
// Aprovado → média >= 7
// Recuperação → média >= 5 e < 7
// Reprovado → média < 5
// Exibir o resultado de cada aluno.
// Ao final, informar:
// quantidade de aprovados;
// quantidade de alunos em recuperação;
// quantidade de reprovados;
// média geral da turma.

/**
 * Ana - Média: 8.00 - Aprovado
    Carlos - Média: 5.00 - Recuperação
    Mariana - Média: 4.00 - Reprovado
    João - Média: 9.00 - Aprovado

    Resumo:
    Aprovados: 2
    Recuperação: 1
    Reprovados: 1
    Média da turma: 6.50
 */

interface Aluno {
    nome: string;
    notas: number[];
}

const alunos: Aluno[] = [
    {
        nome: "Renata",
        notas: [10,10,10]
    }
]

function listaMetodos(listaAlunos: Aluno[]){
    for(const aluno of listaAlunos){
        console.log("rodou")
        let verificacaoNotasNegativas = verificarNotasNegativas(aluno.notas)
        if (verificacaoNotasNegativas = false){
            break
        }
        else{   
            const media: number = aluno.notas.reduce((acumulador, nota)=>{
                const soma = (acumulador + nota)
                console.log(aluno.notas)
                return soma
            },0)

            const situacao = situacaoAluno(media)
            
            console.log(`aluno(a) ${aluno.nome} - média: ${media} - ${situacao}`)

        }
    }   
}

function verificarNotasNegativas(notas:number[]){
    for(const nota of notas){
        if(nota <  0){
            console.log("não pode haver um aluno com notas negativas")
            return false
        }
    }
}

function calcularMedia(listaNotas: number[]): number {
    const soma: number = listaNotas.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma/listaNotas.length
}

for(const aluno of alunos){
    let medias = calcularMedia(aluno.notas)
    console.log(medias)
}

function situacaoAluno(media: number){
    if(media >= 7){
        return "Aprovado"
    }
    if(media >=5 && media < 7){
        return "Recuperação"
    }
    if(media < 5){
        return "Reprovado"
    }
}

// listaMetodos(alunos)