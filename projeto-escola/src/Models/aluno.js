import Pessoa from "./pessoa.js";
export default class Aluno extends Pessoa {
    serie;
    escolaridade;
    constructor(id, nome, cpf, dataDeNascimento, email, login, serie, escolaridade) {
        super(id, nome, cpf, dataDeNascimento, email, login);
        this.serie = serie;
        this.escolaridade = escolaridade;
        this.serie = serie;
        this.escolaridade = escolaridade;
    }
}
