const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relação
// =========================

function cadastrar(relacao, callback) {

    const sql = `
        INSERT INTO Banner_has_Produto
        (
            Banner_idBanner,
            Produto_idProduto
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Banner_idBanner,
            relacao.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Relações
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Banner_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(bannerId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [bannerId, produtoId], callback);

}

// =========================
// Excluir Relação
// =========================

function excluir(bannerId, produtoId, callback) {

    const sql = `
        DELETE FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [bannerId, produtoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    excluir

};
