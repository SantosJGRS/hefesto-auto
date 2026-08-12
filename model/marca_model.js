const conexao = require("../conexao/conexao.js");


//==========================================
// CADASTRAR MARCA
//==========================================

function cadastrar(marca, callback) {

    const sql = `
        INSERT INTO Marca
        (
            nome
        )
        VALUES (?)
    `;

    conexao.query(
        sql,
        [
            marca.nome
        ],
        callback
    );

}


//==========================================
// LISTAR MARCAS
//==========================================

function listar(callback) {

    const sql = `
        SELECT
            idMarca,
            nome
        FROM Marca
        ORDER BY nome
    `;

    conexao.query(
        sql,
        callback
    );

}


//==========================================
// BUSCAR MARCA POR ID
//==========================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT
            idMarca,
            nome
        FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );

}


//==========================================
// ATUALIZAR MARCA
//==========================================

function atualizar(id, marca, callback) {

    const sql = `
        UPDATE Marca
        SET
            nome = ?
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            id
        ],
        callback
    );

}


//==========================================
// EXCLUIR MARCA
//==========================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );

}


//==========================================
// EXPORTAR FUNÇÕES
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};