//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const formasPagamentoModel = require("../model/formas_pagamento_model");

//==========================================
// CADASTRAR FORMA DE PAGAMENTO
//==========================================

function cadastrar(req, res) {

    const formaPagamento = req.body;

    // Validação dos campos obrigatórios

    if (
        !formaPagamento.nome
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Cadastra a forma de pagamento

    formasPagamentoModel.cadastrar(formaPagamento, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar forma de pagamento."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Forma de pagamento cadastrada com sucesso!",
            idFormas_Pagamento: resultado.insertId

        });

    });

}

//==========================================
// LISTAR FORMAS DE PAGAMENTO
//==========================================

function listar(req, res) {

    formasPagamentoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar formas de pagamento."
            });

        }

        // Retorna a lista de formas de pagamento em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR FORMA DE PAGAMENTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    formasPagamentoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar forma de pagamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Forma de pagamento não encontrada."
            });

        }

        // Retorna a forma de pagamento encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR FORMA DE PAGAMENTO
//==========================================

function atualizar(req, res) {

    // Obtém o ID da forma de pagamento a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;

    // Obtém os dados atualizados da forma de pagamento a partir do corpo da requisição
    const formaPagamento = req.body;

    formasPagamentoModel.atualizar(id, formaPagamento, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar forma de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Forma de pagamento atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR FORMA DE PAGAMENTO
//==========================================

function excluir(req, res) {

    // Obtém o ID da forma de pagamento a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    formasPagamentoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir forma de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Forma de pagamento excluída com sucesso."
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