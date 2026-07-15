//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const marcaModel = require("../model/marca_model");

//==========================================
// CADASTRAR MARCA
//==========================================

function cadastrar(req, res) {

    const marca = req.body;

    // Validação dos campos obrigatórios

    if (
        !marca.nome ||
        !marca.logo
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Cadastra a marca

    marcaModel.cadastrar(marca, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar marca."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Marca cadastrada com sucesso!",
            idMarca: resultado.insertId

        });

    });

}

//==========================================
// LISTAR MARCAS
//==========================================

function listar(req, res) {

    marcaModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar marcas."
            });

        }

        // Retorna a lista de marcas em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR MARCA POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    marcaModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar marca."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Marca não encontrada."
            });

        }

        // Retorna a marca encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR MARCA
//==========================================

function atualizar(req, res) {

    // Obtém o ID da marca a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;

    // Obtém os dados atualizados da marca a partir do corpo da requisição
    const marca = req.body;

    marcaModel.atualizar(id, marca, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar marca."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Marca atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR MARCA
//==========================================

function excluir(req, res) {

    // Obtém o ID da marca a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    marcaModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir marca."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Marca excluída com sucesso."
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