import express, { Express, Request, Response } from "express";
import db from "../Config/databaseConnection.js";
import AlunoController from "../Controllers/alunoController.js";

const router : Express = express();
const database = db;
router.get("/", async(req : Request, res : Response) => {
    const result : any = await database.query("SELECT * FROM logins WHERE id=5");
    return res.json(result.rows);
});
router.get("/teste", AlunoController.procurarTodosAlunos);

export default router;