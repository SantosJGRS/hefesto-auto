//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const imagemProdutoModel = require("../model/imagem_produto_model");

//==========================================
// CADASTRAR IMAGEM
//==========================================

function cadastrar(req, res) {

    const imagem = req.body;

    // Validação dos campos obrigatórios

    if (
        !imagem.arquivo ||
        !imagem.Produto_idProduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Cadastra a imagem

    imagemProdutoModel.cadastrar(imagem, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar imagem."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Imagem cadastrada com sucesso!",
            idImagem_Produto: resultado.insertId

        });

    });

}

//==========================================
// LISTAR IMAGENS
//==========================================

function listar(req, res) {

    imagemProdutoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar imagens."
            });

        }

        // Retorna a lista de imagens em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR IMAGEM POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    imagemProdutoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar imagem."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Imagem não encontrada."
            });

        }

        // Retorna a imagem encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR IMAGEM
//==========================================

function atualizar(req, res) {

    // Obtém o ID da imagem a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;

    // Obtém os dados atualizados da imagem a partir do corpo da requisição
    const imagem = req.body;

    imagemProdutoModel.atualizar(id, imagem, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar imagem."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR IMAGEM
//==========================================

function excluir(req, res) {

    // Obtém o ID da imagem a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    imagemProdutoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir imagem."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem excluída com sucesso."
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