import express from "express";
import db from "./Config/databaseConnection.js";
const app = express();
const database = db;
app.get("/", async (req, res) => {
    const result = await database.query("SELECT * FROM logins WHERE id=5");
    return res.json(result.rows);
});
export default app;
