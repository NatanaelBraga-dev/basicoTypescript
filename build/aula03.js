"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curso {
    curso;
    canal;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("CFB Cursos", "TypeScript");
console.log(c1.curso);
console.log(c1.canal);
