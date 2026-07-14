const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Imagem
// =========================

function cadastrar(imagem, callback) {

    const sql = `
        INSERT INTO Imagem_Produto
        (
            arquivo,
            Produto_idProduto
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            imagem.arquivo,
            imagem.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Imagens
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Imagem_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Imagem_Produto
        WHERE idImagem_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Imagem
// =========================

function atualizar(id, imagem, callback) {

    const sql = `
        UPDATE Imagem_Produto
        SET
            arquivo = ?,
            Produto_idProduto = ?
        WHERE idImagem_Produto = ?
    `;

    conexao.query(
        sql,
        [
            imagem.arquivo,
            imagem.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Imagem
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Imagem_Produto
        WHERE idImagem_Produto = ?
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