import db from "../Config/databaseConnection.js";

const database = db;

export default class AlunoServices {
    async listaTodosAlunos() {
        try {
            let result = await database.query('SELECT * FROM logins LIMIT 10');
            return result.rows;
        } catch (error: any) {
            return error.message;
        }
    }
}