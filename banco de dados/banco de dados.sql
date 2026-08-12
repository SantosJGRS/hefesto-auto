-- =========================================================
-- BANCO DE DADOS: HEFESTO AUTO
-- =========================================================

DROP DATABASE IF EXISTS hefestoauto;

CREATE DATABASE hefestoauto;

USE hefestoauto;


-- =========================================================
-- 1. TABELA: LOJISTA
-- =========================================================

CREATE TABLE Lojista (

    idLojista INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,

    cpf VARCHAR(11) UNIQUE,

    cnpj VARCHAR(14) UNIQUE,

    email VARCHAR(120) NOT NULL UNIQUE,

    senha VARCHAR(255) NOT NULL,

    telefone VARCHAR(20) NOT NULL

);


-- =========================================================
-- 2. TABELA: ENDERECO
-- =========================================================

CREATE TABLE Endereco (

    idEndereco INT PRIMARY KEY AUTO_INCREMENT,

    rua VARCHAR(100) NOT NULL,

    cep VARCHAR(10) NOT NULL,

    setor VARCHAR(100) NOT NULL,

    numero INT NOT NULL,

    complemento VARCHAR(150),

    tipo VARCHAR(45) NOT NULL

);


-- =========================================================
-- 3. TABELA: CATEGORIA
-- =========================================================

CREATE TABLE Categoria (

    idCategoria INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL UNIQUE

);


-- =========================================================
-- 4. TABELA: MARCA
-- =========================================================

CREATE TABLE Marca (

    idMarca INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL UNIQUE,

    logo LONGBLOB

);


-- =========================================================
-- 5. TABELA: TAMANHO
-- =========================================================

CREATE TABLE Tamanho (

    idTamanho INT PRIMARY KEY AUTO_INCREMENT,

    tamanho VARCHAR(45) NOT NULL UNIQUE

);


-- =========================================================
-- 6. TABELA: CORES
-- =========================================================

CREATE TABLE Cores (

    idCores INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,

    codigo_cor VARCHAR(45) NOT NULL

);


-- =========================================================
-- 7. TABELA: FORMAS DE PAGAMENTO
-- =========================================================

CREATE TABLE Formas_Pagamento (

    idFormas_Pagamento INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL UNIQUE

);


-- =========================================================
-- 8. TABELA: LOJA
-- Depende de Lojista e Endereco
-- =========================================================

CREATE TABLE Loja (

    idLoja INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(120) NOT NULL,

    whatsapp VARCHAR(20) NOT NULL,

    instagram VARCHAR(100),

    facebook VARCHAR(100),

    linkedin VARCHAR(100),

    telefone VARCHAR(20) NOT NULL,

    email VARCHAR(100) NOT NULL,

    Lojista_idLojista INT NOT NULL,

    Endereco_idEndereco INT NOT NULL,


    FOREIGN KEY (Lojista_idLojista)
        REFERENCES Lojista(idLojista),


    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco)

);


-- =========================================================
-- 9. TABELA: CLIENTE
-- Depende de Loja
-- =========================================================

CREATE TABLE Cliente (

    idCliente INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(250) NOT NULL,

    cpf VARCHAR(11) UNIQUE,

    telefone VARCHAR(20),

    email VARCHAR(120) NOT NULL UNIQUE,

    senha VARCHAR(255) NOT NULL,

    data_nascimento DATE,

    Loja_idLoja INT NOT NULL,


    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)

);


-- =========================================================
-- 10. TABELA: PRODUTO
-- Depende de Loja, Categoria e Marca
-- =========================================================

CREATE TABLE Produto (

    idProduto INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    descricao TEXT,

    codigo VARCHAR(45) NOT NULL UNIQUE,

    preco_antigo DECIMAL(10,2) NOT NULL,

    preco_promocional DECIMAL(10,2),

    quantidade_estoque INT NOT NULL DEFAULT 0,

    ativo TINYINT NOT NULL DEFAULT 1,

    Loja_idLoja INT NOT NULL,

    Categoria_idCategoria INT NOT NULL,

    Marca_idMarca INT NOT NULL,


    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja),


    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria),


    FOREIGN KEY (Marca_idMarca)
        REFERENCES Marca(idMarca)

);


-- =========================================================
-- 11. TABELA: BANNER
-- Depende de Loja
-- =========================================================

CREATE TABLE Banner (

    idBanner INT PRIMARY KEY AUTO_INCREMENT,

    imagem LONGBLOB NOT NULL,

    data_inicio DATE NOT NULL,

    data_final DATE NOT NULL,

    status_visibilidade TINYINT NOT NULL DEFAULT 1,

    Loja_idLoja INT NOT NULL,


    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)

);


-- =========================================================
-- 12. TABELA: PROMOCAO
-- Depende de Banner
-- =========================================================

CREATE TABLE Promocao (

    idPromocao INT PRIMARY KEY AUTO_INCREMENT,

    data_inicio DATE NOT NULL,

    data_final DATE NOT NULL,

    valor_promocao DECIMAL(10,2) NOT NULL,

    nome VARCHAR(100) NOT NULL,

    Banner_idBanner INT,


    FOREIGN KEY (Banner_idBanner)
        REFERENCES Banner(idBanner)

);


-- =========================================================
-- 13. TABELA: CUPOM
-- Depende de Loja
-- =========================================================

CREATE TABLE Cupom (

    idCupom INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,

    data_validade DATE NOT NULL,

    quantidade INT NOT NULL DEFAULT 0,

    desconto DECIMAL(10,2) NOT NULL,

    Loja_idLoja INT NOT NULL,


    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)

);


-- =========================================================
-- 14. TABELA: CARRINHO
-- Depende de Cliente
-- =========================================================

CREATE TABLE Carrinho (

    idCarrinho INT PRIMARY KEY AUTO_INCREMENT,

    quantidade_produto INT NOT NULL DEFAULT 0,

    preco_total DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    Cliente_idCliente INT NOT NULL,


    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)

);


-- =========================================================
-- 15. TABELA: CARTAO DE PAGAMENTO
-- Depende de Cliente
-- =========================================================

CREATE TABLE Cartao_Pagamento (

    idCartao_Pagamento INT PRIMARY KEY AUTO_INCREMENT,

    numero VARCHAR(19) NOT NULL,

    data_vencimento VARCHAR(7) NOT NULL,

    cvc VARCHAR(4) NOT NULL,

    cpf VARCHAR(11) NOT NULL,

    nome_proprietario VARCHAR(200) NOT NULL,

    nome_identificacao VARCHAR(45) NOT NULL,

    bandeira VARCHAR(45) NOT NULL,

    tipo VARCHAR(45) NOT NULL,

    ativo TINYINT NOT NULL DEFAULT 1,

    Cliente_idCliente INT NOT NULL,


    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)

);


-- =========================================================
-- 16. TABELA: PEDIDOS
-- Depende de Cliente, Loja, Endereco e Forma de Pagamento
-- =========================================================

CREATE TABLE Pedidos (

    idPedidos INT PRIMARY KEY AUTO_INCREMENT,

    data DATE NOT NULL,

    nota_fiscal LONGBLOB,

    data_entrega DATE,

    status_entrega VARCHAR(45) NOT NULL,

    status_pagamento VARCHAR(45) NOT NULL,

    codigo VARCHAR(45) NOT NULL UNIQUE,

    Cliente_idCliente INT NOT NULL,

    Loja_idLoja INT NOT NULL,

    Endereco_idEndereco INT NOT NULL,

    Formas_Pagamento_idFormas_Pagamento INT NOT NULL,


    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente),


    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja),


    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco),


    FOREIGN KEY (Formas_Pagamento_idFormas_Pagamento)
        REFERENCES Formas_Pagamento(idFormas_Pagamento)

);


-- =========================================================
-- 17. TABELA: FRETE
-- Depende de Pedidos
-- =========================================================

CREATE TABLE Frete (

    idFrete INT PRIMARY KEY AUTO_INCREMENT,

    valor DECIMAL(10,2) NOT NULL,

    tipo VARCHAR(45) NOT NULL,

    bairro VARCHAR(45) NOT NULL,

    entrega_full TINYINT NOT NULL DEFAULT 0,

    codigo_rastreio VARCHAR(100),

    Pedidos_idPedidos INT NOT NULL,


    FOREIGN KEY (Pedidos_idPedidos)
        REFERENCES Pedidos(idPedidos)

);


-- =========================================================
-- 18. TABELA: IMAGEM DO PRODUTO
-- Depende de Produto
-- =========================================================

CREATE TABLE Imagem_Produto (

    idImagem_Produto INT PRIMARY KEY AUTO_INCREMENT,

    arquivo LONGBLOB NOT NULL,

    Produto_idProduto INT NOT NULL,


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 19. TABELA: AVALIACAO DO PRODUTO
-- Depende de Produto e Cliente
-- =========================================================

CREATE TABLE Avaliacao_Produto (

    idAvaliacao_Produto INT PRIMARY KEY AUTO_INCREMENT,

    data DATE NOT NULL,

    nota DECIMAL(2,1) NOT NULL,

    descricao TEXT,

    Produto_idProduto INT NOT NULL,

    Cliente_idCliente INT NOT NULL,


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),


    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente),


    CHECK (nota >= 0 AND nota <= 5)

);


-- =========================================================
-- 20. RELACIONAMENTO: PRODUTO x CORES
-- =========================================================

CREATE TABLE Produto_has_Cores (

    Produto_idProduto INT NOT NULL,

    Cores_idCores INT NOT NULL,


    PRIMARY KEY (
        Produto_idProduto,
        Cores_idCores
    ),


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),


    FOREIGN KEY (Cores_idCores)
        REFERENCES Cores(idCores)

);


-- =========================================================
-- 21. RELACIONAMENTO: PRODUTO x TAMANHO
-- =========================================================

CREATE TABLE Produto_has_Tamanho (

    Produto_idProduto INT NOT NULL,

    Tamanho_idTamanho INT NOT NULL,


    PRIMARY KEY (
        Produto_idProduto,
        Tamanho_idTamanho
    ),


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),


    FOREIGN KEY (Tamanho_idTamanho)
        REFERENCES Tamanho(idTamanho)

);


-- =========================================================
-- 22. RELACIONAMENTO: PRODUTO x PROMOCAO
-- =========================================================

CREATE TABLE Produto_has_Promocao (

    Produto_idProduto INT NOT NULL,

    Promocao_idPromocao INT NOT NULL,


    PRIMARY KEY (
        Produto_idProduto,
        Promocao_idPromocao
    ),


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),


    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao)

);


-- =========================================================
-- 23. RELACIONAMENTO: PRODUTO x CARRINHO
-- =========================================================

CREATE TABLE Produto_has_Carrinho (

    Produto_idProduto INT NOT NULL,

    Carrinho_idCarrinho INT NOT NULL,

    quantidade INT NOT NULL DEFAULT 1,

    preco_unitario DECIMAL(10,2) NOT NULL,


    PRIMARY KEY (
        Produto_idProduto,
        Carrinho_idCarrinho
    ),


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),


    FOREIGN KEY (Carrinho_idCarrinho)
        REFERENCES Carrinho(idCarrinho)

);


-- =========================================================
-- 24. RELACIONAMENTO: PEDIDOS x PRODUTO
-- =========================================================

CREATE TABLE Pedidos_has_Produto (

    Pedidos_idPedidos INT NOT NULL,

    Produto_idProduto INT NOT NULL,

    quantidade INT NOT NULL,

    preco_unitario DECIMAL(10,2) NOT NULL,


    PRIMARY KEY (
        Pedidos_idPedidos,
        Produto_idProduto
    ),


    FOREIGN KEY (Pedidos_idPedidos)
        REFERENCES Pedidos(idPedidos),


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 25. RELACIONAMENTO: BANNER x PRODUTO
-- =========================================================

CREATE TABLE Banner_has_Produto (

    Banner_idBanner INT NOT NULL,

    Produto_idProduto INT NOT NULL,


    PRIMARY KEY (
        Banner_idBanner,
        Produto_idProduto
    ),


    FOREIGN KEY (Banner_idBanner)
        REFERENCES Banner(idBanner),


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 26. RELACIONAMENTO: CATEGORIA x CUPOM
-- =========================================================

CREATE TABLE Categoria_has_Cupom (

    Categoria_idCategoria INT NOT NULL,

    Cupom_idCupom INT NOT NULL,


    PRIMARY KEY (
        Categoria_idCategoria,
        Cupom_idCupom
    ),


    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria),


    FOREIGN KEY (Cupom_idCupom)
        REFERENCES Cupom(idCupom)

);


-- =========================================================
-- 27. RELACIONAMENTO: CATEGORIA x PROMOCAO
-- =========================================================

CREATE TABLE Categoria_has_Promocao (

    Categoria_idCategoria INT NOT NULL,

    Promocao_idPromocao INT NOT NULL,


    PRIMARY KEY (
        Categoria_idCategoria,
        Promocao_idPromocao
    ),


    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria),


    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao)

);


-- =========================================================
-- 28. RELACIONAMENTO: CUPOM x PRODUTO
-- =========================================================

CREATE TABLE Cupom_has_Produto (

    Cupom_idCupom INT NOT NULL,

    Produto_idProduto INT NOT NULL,


    PRIMARY KEY (
        Cupom_idCupom,
        Produto_idProduto
    ),


    FOREIGN KEY (Cupom_idCupom)
        REFERENCES Cupom(idCupom),


    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 29. RELACIONAMENTO: ENDERECO x CLIENTE
-- =========================================================

CREATE TABLE Endereco_has_Cliente (

    Endereco_idEndereco INT NOT NULL,

    Cliente_idCliente INT NOT NULL,


    PRIMARY KEY (
        Endereco_idEndereco,
        Cliente_idCliente
    ),


    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco),


    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)

);


-- =========================================================
-- DADOS INICIAIS
-- =========================================================


-- =========================================================
-- INSERINDO ENDERECO
-- =========================================================

INSERT INTO Endereco
(
    rua,
    cep,
    setor,
    numero,
    complemento,
    tipo
)
VALUES
(
    'Rodoviário',
    '77781708',
    'Rodoviário',
    1230,
    'Ao lado do Senac',
    'Comercial'
);


-- =========================================================
-- INSERINDO LOJISTA
-- =========================================================

INSERT INTO Lojista
(
    nome,
    cpf,
    cnpj,
    email,
    senha,
    telefone
)
VALUES
(
    'João',
    '09012209022',
    NULL,
    'joao@gmail.com',
    '123abc',
    '63992129510'
);


-- =========================================================
-- INSERINDO LOJA
-- =========================================================

INSERT INTO Loja
(
    nome,
    whatsapp,
    telefone,
    email,
    Endereco_idEndereco,
    Lojista_idLojista
)
VALUES
(
    'Hefesto Auto',
    '63992129510',
    '63992129510',
    'hefestoauto@gmail.com',
    1,
    1
);


-- =========================================================
-- FORMAS DE PAGAMENTO INICIAIS
-- =========================================================

INSERT INTO Formas_Pagamento
(nome)
VALUES
('PIX'),
('Cartão de Crédito'),
('Cartão de Débito'),
('Boleto');


-- =========================================================
-- CONSULTAS PARA TESTAR
-- =========================================================

SELECT * FROM Endereco;

SELECT * FROM Lojista;

SELECT * FROM Loja;

SELECT * FROM Cliente;

SELECT * FROM Categoria;

SELECT * FROM Marca;

SELECT * FROM Produto;

SELECT * FROM Formas_Pagamento;