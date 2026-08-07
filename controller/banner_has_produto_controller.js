const bannerProdutoModel = require("../model/banner_has_produto_model");

function cadastrar(req, res) {
    const dados = req.body;

    if (!dados.Banner_idBanner || !dados.Produto_idProduto) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe Banner_idBanner e Produto_idProduto."
        });
    }

    bannerProdutoModel.cadastrar(dados, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao vincular banner ao produto." });
        }
        return res.status(201).json({ sucesso: true, mensagem: "Banner vinculado ao produto com sucesso!" });
    });
}

function listar(req, res) {
    bannerProdutoModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar relação banner/produto." });
        }
        res.json(resultado);
    });
}

function excluir(req, res) {
    const { idBanner, idProduto } = req.params;

    bannerProdutoModel.excluir(idBanner, idProduto, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao desvincular banner do produto." });
        }
        res.json({ sucesso: true, mensagem: "Vínculo removido com sucesso." });
    });
}

module.exports = { cadastrar, listar, excluir };