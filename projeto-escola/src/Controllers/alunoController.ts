import db from "../Config/databaseConnection.js";
import { Client } from "pg";
import Aluno from "../Models/aluno.js";
import { Request, Response } from "express";
import AlunoServices from "../Services/alunoServices.js";

const database : Client = db;
const alunosServices : AlunoServices = new AlunoServices();

export default class AlunoController {

    static async procurarTodosAlunos(req : Request, res : Response) {
        try {
            let alunos = await alunosServices.listaTodosAlunos();
            return await res.status(200).json(alunos);
        } catch (error: any) {
            return await res.status(400).send(error.message);
        }
    }

    static async procurarAluno(req : Request, res : Response) {
    
    }

    static async adicionarAluno(req : Request, res : Response) {
        try {
            let ans = {Teste:"Teste"};
            return await res.status(200).json(ans);
        } catch (error : any) {
            return await res.status(400).send(error.message);
        }
    }
}