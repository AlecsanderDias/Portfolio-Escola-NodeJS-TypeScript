import { Login } from "./login.js";

export abstract class Pessoa {
    constructor(
        private id : number, 
        private nome : string, 
        private cpf : string, 
        private dataDeNascimento : Date, 
        private email : string, 
        private login : Login
        ) {
            this.id = id;
            this.nome = nome;
            this.cpf = cpf;
            this.dataDeNascimento = dataDeNascimento;
            this.email = email;
            this.login = login;
        }
}