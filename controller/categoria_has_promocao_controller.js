const categoriaPromocaoModel = require("../model/categoria_has_promocao_model");

function cadastrar(req, res) {
    const dados = req.body;

    if (!dados.Categoria_idCategoria || !dados.Promocao_idPromocao) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe Categoria_idCategoria e Promocao_idPromocao."
        });
    }

    categoriaPromocaoModel.cadastrar(dados, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao vincular categoria à promoção." });
        }
        return res.status(201).json({ sucesso: true, mensagem: "Categoria vinculada à promoção com sucesso!" });
    });
}

function listar(req, res) {
    categoriaPromocaoModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar relação categoria/promoção." });
        }
        res.json(resultado);
    });
}

function excluir(req, res) {
    const { idCategoria, idPromocao } = req.params;

    categoriaPromocaoModel.excluir(idCategoria, idPromocao, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao desvincular categoria da promoção." });
        }
        res.json({ sucesso: true, mensagem: "Vínculo removido com sucesso." });
    });
}

module.exports = { cadastrar, listar, excluir };