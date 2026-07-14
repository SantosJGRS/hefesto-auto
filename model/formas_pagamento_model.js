const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Forma de Pagamento
// =========================

function cadastrar(formaPagamento, callback) {

    const sql = `
        INSERT INTO Formas_pagamento
        (nome)
        VALUES (?)
    `;

    conexao.query(
        sql,
        [
            formaPagamento.nome
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Formas_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Formas_pagamento
        WHERE idFormas_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Forma de Pagamento
// =========================

function atualizar(id, formaPagamento, callback) {

    const sql = `
        UPDATE Formas_pagamento
        SET
            nome = ?
        WHERE idFormas_Pagamento = ?
    `;

    conexao.query(
        sql,
        [
            formaPagamento.nome,
            id
        ],
        callback
    );

}

// =========================
// Excluir Forma de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Formas_pagamento
        WHERE idFormas_Pagamento = ?
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