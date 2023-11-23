import app from "./src/app.js";
import client from "./src/Config/databaseConnection.js";

const port = 8000;

app.listen(port, () => { console.log("Escutando o servidor na porta "+ port);});