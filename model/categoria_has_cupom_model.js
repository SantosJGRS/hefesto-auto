const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relação
// =========================

function cadastrar(relacao, callback) {

    const sql = `
        INSERT INTO Categoria_has_Cupom
        (
            Categoria_idCategoria,
            Cupom_idCupom
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Categoria_idCategoria,
            relacao.Cupom_idCupom
        ],
        callback
    );

}

// =========================
// Listar Relações
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categoria_has_Cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(categoriaId, cupomId, callback) {

    const sql = `
        SELECT *
        FROM Categoria_has_Cupom
        WHERE Categoria_idCategoria = ?
        AND Cupom_idCupom = ?
    `;

    conexao.query(sql, [categoriaId, cupomId], callback);

}

// =========================
// Excluir Relação
// =========================

function excluir(categoriaId, cupomId, callback) {

    const sql = `
        DELETE FROM Categoria_has_Cupom
        WHERE Categoria_idCategoria = ?
        AND Cupom_idCupom = ?
    `;

    conexao.query(sql, [categoriaId, cupomId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    excluir

};