import User from "./User.mjs";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '1978-06-22')
console.log(novoAdmin.criarCurso('JS', 20));

