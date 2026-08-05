
// express é um framework para criar
// aplicações web com Node.js
const express = require("express");
// cors é um pacote que permite que o servidor
// aceite requisições de outros domínios
const cors = require("cors");
 
// criar uma instância do express
const app = express();
 
// permitir que o servidor aceite requisições de
// outros domínios
app.use(cors());
app.use(express.json());
 
// importar a conexão com o banco de dados
const conexao = require("./conexao");


// Criar uma rota para testar a conexão com o banco de dados
const clienteRoutes = require("../routes//cliente_routes");


app.use("/clientes", clienteRoutes);

app.get("/teste", (req, res) => {
    res.json({
        mensagem: "Servidor funcionando!"
    });
});

console.log("Rotas de clientes carregadas!");


 