import express from "express";

const app = express();
const port = 8001;
app.get('/', (req,res) => {
    res.send("Teste mais um");
});

app.listen(port, () => { console.log("Escutando o servidor na porta "+ port);});