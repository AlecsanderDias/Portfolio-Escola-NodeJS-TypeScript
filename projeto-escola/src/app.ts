import express, { Express, Response, Request } from "express";

const app : Express = express();

app.get("/", (req : Request, res : Response) => {res.send("Teste")});

export default app;