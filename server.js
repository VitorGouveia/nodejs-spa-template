//importando dependências do node.js
const express = require("express");
const path = require("path");
const port = 3000

const app = express();

//caso o usuário esteja em uma página da pasta 'static', mostrar conteúdo da pasta static
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//rota específica para o service worker pois o contrário dá conflito
app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "service-worker.js"));
  });

//coloca todas as rotas da aplicação para mostrar o index.html
app.get("/*", (req, res) => {
    //usa path para redirecionar para o index.html
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

//escuta pela porta do servidor atual caso esteja em algum serviço de hositng (AWS, Docker ...)
//caso a porta do servidor não exista, escutar na porta da variável 'port', que é 3000
//executa uma arrow function no console mostrando qual porta está em uso
app.listen(process.env.PORT || port, () => console.log(`Server running on port ${port}...`));