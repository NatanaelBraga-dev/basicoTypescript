class Curso {
    curso: null
    canal: null
    constructor(canal: any, curso: any){
        this.canal = canal;
        this.curso = curso;

    }
}

let c1 = new Curso("CFB Cursos", "TypeScript");

console.log(c1.curso)
console.log(c1.canal)