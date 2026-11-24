"use strict";
// Desafio 01 — Analisador de alunos
const alunos = [
    {
        nome: "Renata",
        notas: [10, 10, 10]
    }
];
function listaMetodos(listaAlunos) {
    for (const aluno of listaAlunos) {
        console.log("rodou");
        let verificacaoNotasNegativas = verificarNotasNegativas(aluno.notas);
        if (verificacaoNotasNegativas = false) {
            break;
        }
        else {
            const media = aluno.notas.reduce((acumulador, nota) => {
                const soma = (acumulador + nota);
                console.log(aluno.notas);
                return soma;
            }, 0);
            const situacao = situacaoAluno(media);
            console.log(`aluno(a) ${aluno.nome} - média: ${media} - ${situacao}`);
        }
    }
}
function verificarNotasNegativas(notas) {
    for (const nota of notas) {
        if (nota < 0) {
            console.log("não pode haver um aluno com notas negativas");
            return false;
        }
    }
}
function calcularMedia(listaNotas) {
    const soma = listaNotas.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma / listaNotas.length;
}
for (const aluno of alunos) {
    let medias = calcularMedia(aluno.notas);
    console.log(medias);
}
function situacaoAluno(media) {
    if (media >= 7) {
        return "Aprovado";
    }
    if (media >= 5 && media < 7) {
        return "Recuperação";
    }
    if (media < 5) {
        return "Reprovado";
    }
}
// listaMetodos(alunos)
