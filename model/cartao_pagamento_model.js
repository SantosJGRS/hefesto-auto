const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão
// =========================

function cadastrar(cartao, callback) {

    const sql = `
        INSERT INTO Cartao_Pagamento
        (
            numero,
            data_vencimento,
            cvc,
            cpf,
            nome_proprietario,
            nome_identificacao,
            bandeira,
            tipo,
            ativo,
            Cliente_idCliente
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            cartao.numero,
            cartao.data_vencimento,
            cartao.cvc,
            cartao.cpf,
            cartao.nome_proprietario,
            cartao.nome_identificacao,
            cartao.bandeira,
            cartao.tipo,
            cartao.ativo,
            cartao.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Cartões
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cartao_Pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_Pagamento
        WHERE idCartao_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Cartão
// =========================

function atualizar(id, cartao, callback) {

    const sql = `
        UPDATE Cartao_Pagamento
        SET
            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            cpf = ?,
            nome_proprietario = ?,
            nome_identificacao = ?,
            bandeira = ?,
            tipo = ?,
            ativo = ?,
            Cliente_idCliente = ?
        WHERE idCartao_Pagamento = ?
    `;

    conexao.query(
        sql,
        [
            cartao.numero,
            cartao.data_vencimento,
            cartao.cvc,
            cartao.cpf,
            cartao.nome_proprietario,
            cartao.nome_identificacao,
            cartao.bandeira,
            cartao.tipo,
            cartao.ativo,
            cartao.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cartão
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_Pagamento
        WHERE idCartao_Pagamento = ?
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