// express é um framework para criar aplicações web com Node.js
const express = require("express");
// cors permite que o servidor aceite requisições de outros domínios
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Importar a conexão (está na mesma pasta 'conexao')
const conexao = require("./conexao");

// ==============================================
// IMPORTAÇÃO DAS ROTAS (subindo 1 nível com '../')
// ==============================================
const clienteRoutes = require("../routes/cliente_routes");
const avaliacaoProdutoRoutes = require("../routes/avaliacao_produto_routes");
const bannerHasProdutoRoutes = require("../routes/banner_has_produto_routes");
const bannerRoutes = require("../routes/banner_routes");
const carrinhoRoutes = require("../routes/carrinho_routes");
const cartaoPagamentoRoutes = require("../routes/cartao_pagamento_routes");
const categoriaHasCupomRoutes = require("../routes/categoria_has_cupom_routes");
const categoriaHasPromocaoRoutes = require("../routes/categoria_has_promocao_routes");
const categoriaRoutes = require("../routes/categoria_routes");
const cupomRoutes = require("../routes/cupom_routes");
const enderecoHasClienteRoutes = require("../routes/endereco_has_cliente_routes");
const enderecoRoutes = require("../routes/endereco_routes");
const formasPagamentoRoutes = require("../routes/formas_pagamento_routes");
const freteRoutes = require("../routes/frete_routes");
const imagemProdutoRoutes = require("../routes/imagem_produto_routes");
const marcaRoutes = require("../routes/marca_routes");
const pedidosRoutes = require("../routes/pedidos_routes");
const produtoHasCarrinhoRoutes = require("../routes/produto_has_carrinho_routes");
const produtoHasPromocaoRoutes = require("../routes/produto_has_promocao_routes");
const produtoRoutes = require("../routes/produto_routes");
const promocaoRoutes = require("../routes/promocao_routes");

// ==============================================
// DEFINIÇÃO DOS ENDPOINTS
// ==============================================
app.use("/clientes", clienteRoutes);
app.use("/avaliacoes-produtos", avaliacaoProdutoRoutes);
app.use("/banners-produtos", bannerHasProdutoRoutes);
app.use("/banners", bannerRoutes);
app.use("/carrinho", carrinhoRoutes);
app.use("/cartoes-pagamento", cartaoPagamentoRoutes);
app.use("/categorias-cupons", categoriaHasCupomRoutes);
app.use("/categorias-promocoes", categoriaHasPromocaoRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/cupons", cupomRoutes);
app.use("/enderecos-clientes", enderecoHasClienteRoutes);
app.use("/enderecos", enderecoRoutes);
app.use("/formas-pagamento", formasPagamentoRoutes);
app.use("/fretes", freteRoutes);
app.use("/imagens-produtos", imagemProdutoRoutes);
app.use("/marcas", marcaRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/produtos-carrinhos", produtoHasCarrinhoRoutes);
app.use("/produtos-promocoes", produtoHasPromocaoRoutes);
app.use("/produtos", produtoRoutes);
app.use("/promocoes", promocaoRoutes);

// ==============================================
// ROTA DE TESTE
// ==============================================
app.get("/teste", (req, res) => {
    res.json({
        mensagem: "Servidor a funcionar perfeitamente!"
    });
});

// ==============================================
// INICIALIZAÇÃO DO SERVIDOR
// ==============================================
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT}`);
    console.log(`Acesse em: http://localhost:${PORT}`);
    console.log("Todas as rotas do sistema Hefesto foram carregadas com sucesso!");
});