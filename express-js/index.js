import express from "express";

const app = express();

app.get("/", (req, resp) => {
    resp.send("Estou sendo chamado pelo VERBO GET");
});


app.post("/", (req, resp) => {

    const a = 3;
    const b = 9;
    
    const result = a + b;

    resp.send(result);
});

app.listen(3000, () => {
    console.log("Servidor Funcionando!");
});