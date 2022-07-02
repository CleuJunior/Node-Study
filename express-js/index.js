import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
    resp.send("Estou sendo chamado pelo VERBO GET");
});


app.post("/", (req, resp) => {

    const a = 3;
    const b = 9;
    
    const result = a + b;

    resp.send(result);
});



app.get("/teste?", (_, resp) => {
    resp.send("/teste?");

});

app.get("/buzz+", (_, resp) => {
    resp.send("/buzz+");

});

app.get("/one*Blue", (_, resp) => {
    resp.send("/oneCleonildoBlue");

});

// app.post("/test(ing)?", (req, resp) => {
//     resp.send("/test(ing)?");

// });


app.post("/test(ing)?", (req, resp) => {
    console.log(req.body);
    resp.send("Me chamaram?");

});

// Parametros na rota
app.get("/testParam/:nome/:idade?", (req, resp) => {
    resp.send(req.params.nome);
    resp.send(req.params.idade);


});

app.listen(3000, () => {
    console.log("Servidor Funcionando!");
});