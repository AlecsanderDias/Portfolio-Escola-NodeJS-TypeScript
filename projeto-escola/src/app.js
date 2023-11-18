import express from "express";
const app = express();
app.get("/", (req, res) => { res.send("Teste"); });
export default app;
