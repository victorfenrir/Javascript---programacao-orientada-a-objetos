import User from "./User.mjs";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Mariana', 'm@m.com', '2000-01-28');
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '1984-04-22')
console.log(novoAdmin.nome)
novoAdmin.nome = ''
console.log(novoAdmin.nome)