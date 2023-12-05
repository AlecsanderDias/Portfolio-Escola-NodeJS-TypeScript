import db from "../Config/databaseConnection.js";
import AlunoServices from "../Services/alunoServices.js";
const database = db;
const alunosServices = new AlunoServices();
export default class AlunoController {
    static async procurarTodosAlunos(req, res) {
        try {
            let alunos = await alunosServices.listaTodosAlunos();
            return await res.status(200).json(alunos);
        }
        catch (error) {
            return await res.status(400).send(error.message);
        }
    }
    static async procurarAluno(req, res) {
    }
    static async adicionarAluno(req, res) {
        try {
            let ans = { Teste: "Teste" };
            return await res.status(200).json(ans);
        }
        catch (error) {
            return await res.status(400).send(error.message);
        }
    }
}
