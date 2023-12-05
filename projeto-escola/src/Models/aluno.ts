import Login from "./login.js";
import Pessoa from "./pessoa.js";

export default class Aluno extends Pessoa {
    constructor(
        id : number, 
        nome : string, 
        cpf : string, 
        dataDeNascimento : Date, 
        email : string, 
        login : Login,
        private serie : string, 
        private escolaridade : string
        ) {
            super(id, nome, cpf, dataDeNascimento, email, login);
            this.serie = serie;
            this.escolaridade = escolaridade;
        }
}