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

// se eu usar a flag --target "versão ES" consigo compilar usando uma versão especifica do ES