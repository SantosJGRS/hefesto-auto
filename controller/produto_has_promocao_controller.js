const produtoPromocaoModel = require("../model/produto_has_promocao_model");

function cadastrar(req, res) {
    const dados = req.body;

    if (!dados.Produto_idProduto || !dados.Promocao_idPromocao) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe Produto_idProduto e Promocao_idPromocao."
        });
    }

    produtoPromocaoModel.cadastrar(dados, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao vincular produto à promoção." });
        }
        return res.status(201).json({ sucesso: true, mensagem: "Produto vinculado à promoção com sucesso!" });
    });
}

function listar(req, res) {
    produtoPromocaoModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar relação produto/promoção." });
        }
        res.json(resultado);
    });
}

function excluir(req, res) {
    const { idProduto, idPromocao } = req.params;

    produtoPromocaoModel.excluir(idProduto, idPromocao, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao desvincular produto da promoção." });
        }
        res.json({ sucesso: true, mensagem: "Vínculo removido com sucesso." });
    });
}

module.exports = { cadastrar, listar, excluir };