import app from "./src/Routes/routes.js";

const port = 8000;

app.listen(port, () => { console.log("Escutando o servidor na porta "+ port);});