const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relação
// =========================

function cadastrar(relacao, callback) {

    const sql = `
        INSERT INTO Produto_has_Carrinho
        (
            Produto_idProduto,
            Carrinho_idCarrinho
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Produto_idProduto,
            relacao.Carrinho_idCarrinho
        ],
        callback
    );

}

// =========================
// Listar Relações
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Produto_has_Carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(produtoId, carrinhoId, callback) {

    const sql = `
        SELECT *
        FROM Produto_has_Carrinho
        WHERE Produto_idProduto = ?
        AND Carrinho_idCarrinho = ?
    `;

    conexao.query(sql, [produtoId, carrinhoId], callback);

}

// =========================
// Excluir Relação
// =========================

function excluir(produtoId, carrinhoId, callback) {

    const sql = `
        DELETE FROM Produto_has_Carrinho
        WHERE Produto_idProduto = ?
        AND Carrinho_idCarrinho = ?
    `;

    conexao.query(sql, [produtoId, carrinhoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    excluir

};