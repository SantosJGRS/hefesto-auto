//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const cartaoPagamentoModel = require("../model/cartao_pagamento_model");

//==========================================
// CADASTRAR CARTÃO
//==========================================

function cadastrar(req, res) {

    const cartao = req.body;

    // Validação dos campos obrigatórios

    if (
        !cartao.numero ||
        !cartao.data_vencimento ||
        !cartao.cvc ||
        !cartao.cpf ||
        !cartao.nome_proprietario ||
        !cartao.nome_identificacao ||
        !cartao.bandeira ||
        !cartao.tipo ||
        cartao.ativo === undefined ||
        !cartao.Cliente_idCliente
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Cadastra o cartão

    cartaoPagamentoModel.cadastrar(cartao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar cartão."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Cartão cadastrado com sucesso!",
            idCartao_Pagamento: resultado.insertId

        });

    });

}

//==========================================
// LISTAR CARTÕES
//==========================================

function listar(req, res) {

    cartaoPagamentoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cartões."
            });

        }

        // Retorna a lista de cartões em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR CARTÃO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    cartaoPagamentoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cartão."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cartão não encontrado."
            });

        }

        // Retorna o cartão encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CARTÃO
//==========================================

function atualizar(req, res) {

    // Obtém o ID do cartão a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;

    // Obtém os dados atualizados do cartão a partir do corpo da requisição
    const cartao = req.body;

    cartaoPagamentoModel.atualizar(id, cartao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cartão."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CARTÃO
//==========================================

function excluir(req, res) {

    // Obtém o ID do cartão a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    cartaoPagamentoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cartão."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão excluído com sucesso."
        });

    });

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