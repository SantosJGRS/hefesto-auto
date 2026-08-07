//==========================================
// IMPORTA O MODEL
//==========================================
const produtoCarrinhoModel = require("../model/produto_has_carrinho_model");

//==========================================
// ADICIONAR PRODUTO AO CARRINHO
//==========================================
function cadastrar(req, res) {
    const item = req.body;

    if (
        !item.Produto_idProduto ||
        !item.Carrinho_idCarrinho ||
        !item.quantidade ||
        !item.preco_unitario
    ) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe Produto_idProduto, Carrinho_idCarrinho, quantidade e preco_unitario."
        });
    }

    produtoCarrinhoModel.cadastrar(item, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao adicionar produto ao carrinho." });
        }
        return res.status(201).json({ sucesso: true, mensagem: "Produto adicionado ao carrinho!" });
    });
}

function listar(req, res) {
    produtoCarrinhoModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar itens do carrinho." });
        }
        res.json(resultado);
    });
}

function excluir(req, res) {
    const { idProduto, idCarrinho } = req.params;

    produtoCarrinhoModel.excluir(idProduto, idCarrinho, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao remover produto do carrinho." });
        }
        res.json({ sucesso: true, mensagem: "Produto removido do carrinho com sucesso." });
    });
}

module.exports = { cadastrar, listar, excluir };