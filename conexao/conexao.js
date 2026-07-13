const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // senha do MySQL
    database: "hefestoauto"
});

conexao.connect((erro) => {

    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;
    }

    console.log("Banco conectado com sucesso!");

});

module.exports = conexao;