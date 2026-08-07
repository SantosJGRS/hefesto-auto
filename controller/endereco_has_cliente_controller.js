const enderecoClienteModel = require("../model/endereco_has_cliente_model");

function cadastrar(req, res) {
    const dados = req.body;

    if (!dados.Endereco_idEndereco || !dados.Cliente_idCliente) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe Endereco_idEndereco e Cliente_idCliente."
        });
    }

    enderecoClienteModel.cadastrar(dados, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao vincular endereço ao cliente." });
        }
        return res.status(201).json({ sucesso: true, mensagem: "Endereço vinculado ao cliente com sucesso!" });
    });
}

function listar(req, res) {
    enderecoClienteModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar relação endereço/cliente." });
        }
        res.json(resultado);
    });
}

function excluir(req, res) {
    const { idEndereco, idCliente } = req.params;

    enderecoClienteModel.excluir(idEndereco, idCliente, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao desvincular endereço do cliente." });
        }
        res.json({ sucesso: true, mensagem: "Vínculo removido com sucesso." });
    });
}

module.exports = { cadastrar, listar, excluir };