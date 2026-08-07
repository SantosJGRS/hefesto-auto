const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Avaliação
// =========================

function cadastrar(avaliacao, callback) {

    const sql = `
        INSERT INTO Avaliacao_Produto
        (data_avaliacao, nota, descricao, Produto_idProduto)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            avaliacao.data_avaliacao,
            avaliacao.nota,
            avaliacao.descricao,
            avaliacao.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Avaliações
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Avaliacao_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Avaliacao_Produto
        WHERE idAvaliacao_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Avaliação
// =========================

function atualizar(id, avaliacao, callback) {

    const sql = `
        UPDATE Avaliacao_Produto
        SET
            data_avaliacao = ?,
            nota = ?,
            descricao = ?,
            Produto_idProduto = ?
        WHERE idAvaliacao_Produto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacao.data_avaliacao,
            avaliacao.nota,
            avaliacao.descricao,
            avaliacao.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Avaliação
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Avaliacao_Produto
        WHERE idAvaliacao_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};