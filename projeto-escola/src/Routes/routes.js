import express from "express";
import db from "../Config/databaseConnection.js";
import AlunoController from "../Controllers/alunoController.js";
const router = express();
const database = db;
router.get("/", async (req, res) => {
    const result = await database.query("SELECT * FROM logins WHERE id=5");
    return res.json(result.rows);
});
router.get("/teste", AlunoController.procurarTodosAlunos);
export default router;
