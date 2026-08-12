const conexao = require("../conexao/conexao.js");


//==========================================
// CADASTRAR IMAGEM
//==========================================

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


//==========================================
// LISTAR IMAGENS
//==========================================

function listar(callback) {

    const sql = `
        SELECT
            idImagem_Produto,
            arquivo,
            Produto_idProduto
        FROM Imagem_Produto
    `;

    conexao.query(
        sql,
        callback
    );

}


//==========================================
// BUSCAR IMAGEM POR ID
//==========================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT
            idImagem_Produto,
            arquivo,
            Produto_idProduto
        FROM Imagem_Produto
        WHERE idImagem_Produto = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );

}


//==========================================
// ATUALIZAR IMAGEM
//==========================================

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


//==========================================
// EXCLUIR IMAGEM
//==========================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Imagem_Produto
        WHERE idImagem_Produto = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};