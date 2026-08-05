CREATE DATABASE hefestoauto;
USE hefestoauto;



-- =====================================
-- TABELAS SEM DEPENDÊNCIAS
-- =====================================
CREATE TABLE Lojista(
    idLojista INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,
    cpf varchar(11) NOT NULL,
    cnpj varchar(14) NOT NULL,
    email VARCHAR(120) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    telefone varchar(13) NOT NULL
);

CREATE TABLE Endereco(
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,

    rua VARCHAR(50) NOT NULL,
    cep varchar(10) NOT NULL,
    setor VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    tipo VARCHAR(45) NOT NULL
);

CREATE TABLE Loja (
    idLoja INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(120) NOT NULL,
    whatsapp VARCHAR(50) NOT NULL,
    instagram VARCHAR(100),
    facebook VARCHAR(100),
    linkedin VARCHAR(100),
    telefone varchar(13) NOT NULL,
    email VARCHAR(100) NOT NULL,
    Lojista_idLojista INT,
    Endereco_idEndereco INT,
    FOREIGN KEY (Lojista_idLojista)
        REFERENCES Lojista (idLojista),
    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco (idEndereco)
);

CREATE TABLE Cliente(
    idCliente INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(250) NOT NULL,
    cpf varchar(11) ,
    telefone varchar(13) ,
    email VARCHAR(120) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE ,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja) REFERENCES Loja(idLoja)
);

CREATE TABLE Categoria(
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL
);

CREATE TABLE Marca(
    idMarca INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,
    logo LONGBLOB
);

CREATE TABLE Tamanho(
    idTamanho INT PRIMARY KEY AUTO_INCREMENT,

    tamanho VARCHAR(45) NOT NULL
);

CREATE TABLE Cores(
    idCores INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,
    codigo_cor VARCHAR(45) NOT NULL
);

CREATE TABLE Formas_Pagamento(
    idFormas_Pagamento INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL
);

CREATE TABLE Produto(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    codigo VARCHAR(45) NOT NULL,
    preco_antigo FLOAT NOT NULL,
    preco_promocional FLOAT,
    quantidade_estoque INT NOT NULL,
    ativo TINYINT NOT NULL,

    Loja_idLoja INT,
    Categoria_idCategoria INT,
    Marca_idMarca INT,

    FOREIGN KEY (Loja_idLoja) REFERENCES Loja(idLoja),
    FOREIGN KEY (Categoria_idCategoria) REFERENCES Categoria(idCategoria),
    FOREIGN KEY (Marca_idMarca) REFERENCES Marca(idMarca)
);

CREATE TABLE Banner(
    idBanner INT PRIMARY KEY AUTO_INCREMENT,

    imagem LONGBLOB NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    status_visibilidade TINYINT NOT NULL,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja) REFERENCES Loja(idLoja)
);

CREATE TABLE Promocao(
    idPromocao INT PRIMARY KEY AUTO_INCREMENT,

    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    valor_promocao FLOAT NOT NULL,
    nome VARCHAR(45) NOT NULL,

    Banner_idBanner INT,

    FOREIGN KEY (Banner_idBanner) REFERENCES Banner(idBanner)
);

CREATE TABLE Cupom(
    idCupom INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,
    data_validade DATE NOT NULL,
    quantidade INT NOT NULL,
    desconto FLOAT NOT NULL,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja) REFERENCES Loja(idLoja)
);

CREATE TABLE Carrinho(
    idCarrinho INT PRIMARY KEY AUTO_INCREMENT,

    quantidade_produto INT NOT NULL,
    preco_total FLOAT NOT NULL,

    Cliente_idCliente INT,

    FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente(idCliente)
);

CREATE TABLE Cartao_Pagamento(
    idCartao_Pagamento INT PRIMARY KEY AUTO_INCREMENT,

    numero VARCHAR(19) NOT NULL,
    data_vencimento VARCHAR(7) NOT NULL,
    cvc INT NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    nome_proprietario VARCHAR(200) NOT NULL,
    nome_identificacao VARCHAR(45) NOT NULL,
    bandeira VARCHAR(45) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    ativo TINYINT NOT NULL,

    Cliente_idCliente INT,

    FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente(idCliente)
);

CREATE TABLE Pedidos(
    idPedidos INT PRIMARY KEY AUTO_INCREMENT,

    data DATE NOT NULL,
    nota_fiscal LONGBLOB,
    data_entrega DATE,

    status_entrega VARCHAR(45) NOT NULL,
    status_pagamento VARCHAR(45) NOT NULL,
    codigo VARCHAR(45) NOT NULL,

    Cliente_idCliente INT,
    Loja_idLoja INT,
    Endereco_idEndereco INT,
    Formas_Pagamento_idFormas_Pagamento INT,

    FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente(idCliente),
    FOREIGN KEY (Loja_idLoja) REFERENCES Loja(idLoja),
    FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco(idEndereco),
    FOREIGN KEY (Formas_Pagamento_idFormas_Pagamento) REFERENCES Formas_Pagamento(idFormas_Pagamento)
);

CREATE TABLE Frete(
    idFrete INT PRIMARY KEY AUTO_INCREMENT,

    valor FLOAT NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    bairro VARCHAR(45) NOT NULL,
    entrega_full TINYINT NOT NULL,
    codigo_rastreio VARCHAR(100),

    Pedidos_idPedidos INT,
    Pedidos_Cliente_idCliente INT,
    Pedidos_Loja_idLoja INT,
    Pedidos_Endereco_idEndereco INT,

    FOREIGN KEY (Pedidos_idPedidos) REFERENCES Pedidos(idPedidos),
    FOREIGN KEY (Pedidos_Cliente_idCliente) REFERENCES Cliente(idCliente),
    FOREIGN KEY (Pedidos_Loja_idLoja) REFERENCES Loja(idLoja),
    FOREIGN KEY (Pedidos_Endereco_idEndereco) REFERENCES Endereco(idEndereco)
);

CREATE TABLE Imagem_Produto(
    idImagem_Produto INT PRIMARY KEY AUTO_INCREMENT,

    arquivo LONGBLOB NOT NULL,

    Produto_idProduto INT,

    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto)
);

CREATE TABLE Avaliacao_Produto(
    idAvaliacao_Produto INT PRIMARY KEY AUTO_INCREMENT,

    data DATE NOT NULL,
    nota FLOAT NOT NULL,
    descricao TEXT,

    Produto_idProduto INT,

    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto)
);

CREATE TABLE Produto_has_Cores(
    Produto_idProduto INT,
    Cores_idCores INT,

    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto),
    FOREIGN KEY (Cores_idCores) REFERENCES Cores(idCores)
);

CREATE TABLE Produto_has_Tamanho(
    Produto_idProduto INT,
    Tamanho_idTamanho INT,

    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto),
    FOREIGN KEY (Tamanho_idTamanho) REFERENCES Tamanho(idTamanho)
);

CREATE TABLE Produto_has_Promocao(
    Produto_idProduto INT,
    Promocao_idPromocao INT,

    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto),
    FOREIGN KEY (Promocao_idPromocao) REFERENCES Promocao(idPromocao)
);

CREATE TABLE Produto_has_Carrinho(
    Produto_idProduto INT,
    Carrinho_idCarrinho INT,

    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto),
    FOREIGN KEY (Carrinho_idCarrinho) REFERENCES Carrinho(idCarrinho)
);

CREATE TABLE Pedidos_has_Produto(
    Pedidos_idPedidos INT,
    Produto_idProduto INT,

    FOREIGN KEY (Pedidos_idPedidos) REFERENCES Pedidos(idPedidos),
    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto)
);

CREATE TABLE Banner_has_Produto(
    Banner_idBanner INT,
    Produto_idProduto INT,

    FOREIGN KEY (Banner_idBanner) REFERENCES Banner(idBanner),
    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto)
);

CREATE TABLE Categoria_has_Cupom(
    Categoria_idCategoria INT,
    Cupom_idCupom INT,

    FOREIGN KEY (Categoria_idCategoria) REFERENCES Categoria(idCategoria),
    FOREIGN KEY (Cupom_idCupom) REFERENCES Cupom(idCupom)
);

CREATE TABLE Categoria_has_Promocao(
    Categoria_idCategoria INT,
    Promocao_idPromocao INT,

    FOREIGN KEY (Categoria_idCategoria) REFERENCES Categoria(idCategoria),
    FOREIGN KEY (Promocao_idPromocao) REFERENCES Promocao(idPromocao)
);

CREATE TABLE Cupom_has_Produto(
    Cupom_idCupom INT,
    Produto_idProduto INT,

    FOREIGN KEY (Cupom_idCupom) REFERENCES Cupom(idCupom),
    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto)
);

CREATE TABLE Endereco_has_Cliente(
    Endereco_idEndereco INT,
    Cliente_idCliente INT,

    FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco(idEndereco),
    FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente(idCliente)
);
INSERT INTO Endereco
(rua,cep,setor,numero,complemento,tipo)
values("Rodoviário","77781708","Rodoviário",
1230,"Ao lado do Senac","Comercial");

INSERT INTO Lojista(nome,cpf,email,senha,telefone)
VALUES ("João","09012209022","joao@gmail.com","123abc"
,"3992129510");



-- CADASTRAR OS DADOS DA LOJA
INSERT INTO Loja (nome, whatsapp,telefone,email
,endereco_idendereco,lojista_idLojista)
values("hefestoauto","6399212-9510",
63992129510,"hefestoauto@gmail.com",1,1);


-- LISTAR DADOS DA TABELA
SELECT * FROM Endereco;
SELECT * FROM lOJISTA;
SELECT * FROM Loja;