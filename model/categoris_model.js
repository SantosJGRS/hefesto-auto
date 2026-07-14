const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Categoria
// =========================

function cadastrar(categoria, callback) {

    const sql = `
        INSERT INTO Categoria
        (nome)
        VALUES (?)
    `;

    conexao.query(
        sql,
        [
            categoria.nome
        ],
        callback
    );

}

// =========================
// Listar Categorias
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE IdCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Categoria
// =========================

function atualizar(id, categoria, callback) {

    const sql = `
        UPDATE Categoria
        SET
            nome = ?
        WHERE IdCategoria = ?
    `;

    conexao.query(
        sql,
        [
            categoria.nome,
            id
        ],
        callback
    );

}

// =========================
// Excluir Categoria
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Categoria
        WHERE IdCategoria = ?
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