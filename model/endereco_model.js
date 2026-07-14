const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Endereço
// =========================

function cadastrar(endereco, callback) {

    const sql = `
        INSERT INTO Endereco
        (
            rua,
            cep,
            setor,
            numero,
            complemento,
            tipo
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            endereco.rua,
            endereco.cep,
            endereco.setor,
            endereco.numero,
            endereco.complemento,
            endereco.tipo
        ],
        callback
    );

}

// =========================
// Listar Endereços
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Endereco
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Endereço
// =========================

function atualizar(id, endereco, callback) {

    const sql = `
        UPDATE Endereco
        SET
            rua = ?,
            cep = ?,
            setor = ?,
            numero = ?,
            complemento = ?,
            tipo = ?
        WHERE idEndereco = ?
    `;

    conexao.query(
        sql,
        [
            endereco.rua,
            endereco.cep,
            endereco.setor,
            endereco.numero,
            endereco.complemento,
            endereco.tipo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Endereço
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Endereco
        WHERE idEndereco = ?
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