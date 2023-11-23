import express, { Express, Response, Request } from "express";
import db from "./Config/databaseConnection.js";
import { Client } from "pg";

const app : Express = express();
const database : Client = db;
app.get("/", async(req : Request, res : Response) => {
    const result : any = await database.query("SELECT * FROM logins WHERE id=5");
    return res.json(result.rows);
});

export default app;