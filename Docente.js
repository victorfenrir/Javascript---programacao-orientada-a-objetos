import User from "./User.mjs";

class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante,curso){
        return `O(A) estudante ${estudante} passou no curso ${curso}.`      
    }
}

const novoDocente = new Docente('Mariana', 'm@m.com', '1984-03-09')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))