const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relação
// =========================

function cadastrar(relacao, callback) {

    const sql = `
        INSERT INTO Produto_has_Promocao
        (
            Produto_idProduto,
            Promocao_idPromocao
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Produto_idProduto,
            relacao.Promocao_idPromocao
        ],
        callback
    );

}

// =========================
// Listar Relações
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Produto_has_Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(produtoId, promocaoId, callback) {

    const sql = `
        SELECT *
        FROM Produto_has_Promocao
        WHERE Produto_idProduto = ?
        AND Promocao_idPromocao = ?
    `;

    conexao.query(sql, [produtoId, promocaoId], callback);

}

// =========================
// Excluir Relação
// =========================

function excluir(produtoId, promocaoId, callback) {

    const sql = `
        DELETE FROM Produto_has_Promocao
        WHERE Produto_idProduto = ?
        AND Promocao_idPromocao = ?
    `;

    conexao.query(sql, [produtoId, promocaoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    excluir

};