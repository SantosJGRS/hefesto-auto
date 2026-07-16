
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
const conexao = require("./networking");


// Criar uma rota para testar a conexão com o banco de dados
const clienteRoutes = require("../routes/cliente_routes.js");
app.use("/clientes", clienteRoutes);




// importar as rotas da aplicação
app.listen(3000, () => {
    console.log("Servidor iniciado!");
});
 


 