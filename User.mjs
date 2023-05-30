export default class User{
    #nome 
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if(novoNome === ''){
            throw new Error('Formato inválido')
        }
        this.#nome = novoNome
    }

    set email(novoEmail){
        if(novoNome === ''){
            throw new Error('Formato inválido')
        }
        this.#email = novoEmail
    }

    set nascimento(novoNascimento){
        if(novoNome === ''){
            throw new Error('Formato inválido')
        }
        this.#nascimento = novoNascimento
    }

    set role(novoRole){
        if(novoNome === ''){
            throw new Error('Formato inválido')
        }
        this.#role = novoRole
    }

    set ativo(novoAtivo){
        if(novoNome === ''){
            throw new Error('Formato inválido')
        }
        this.#ativo = novoAtivo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}
