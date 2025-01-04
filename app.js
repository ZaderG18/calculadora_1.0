const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/calculo", (req, res) => {
    const { num1, num2, operacao } = req.body;
    let results;
    switch (operacao) {
        case "soma":
            results = parseFloat(num1) + parseFloat(num2);
            break;
        case "subtracao":
            results = parseFloat(num1) - parseFloat(num2);
            break;
        case "multiplicacao":
            results = parseFloat(num1) * parseFloat(num2);
            break;
        case "divisao":
            results = parseFloat(num1) / parseFloat(num2);
            break;
default:
    results = "Operação inválida";
    }
    res.render("results", {num1, num2, operacao, results});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});