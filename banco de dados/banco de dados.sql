CREATE DATABASE hefestoauto;
USE hefestoauto;


<<<<<<< HEAD
-- =========================================================
-- TABELA: LOJISTA
-- =========================================================

CREATE TABLE Lojista(
    idLojista INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(11) UNIQUE,
    cnpj VARCHAR(14) UNIQUE,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL
=======

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
>>>>>>> 48fdd0f6bd62eb90656d24951ca4359194c3b6f2
);

CREATE TABLE Formas_Pagamento(
    idFormas_Pagamento INT PRIMARY KEY AUTO_INCREMENT,

<<<<<<< HEAD
-- =========================================================
-- TABELA: ENDERECO
-- =========================================================

CREATE TABLE Endereco(
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,

    rua VARCHAR(50) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    setor VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    tipo VARCHAR(45) NOT NULL
=======
    nome VARCHAR(45) NOT NULL
>>>>>>> 48fdd0f6bd62eb90656d24951ca4359194c3b6f2
);

CREATE TABLE Produto(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,

<<<<<<< HEAD
-- =========================================================
-- TABELA: LOJA
-- =========================================================

CREATE TABLE Loja(
    idLoja INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(120) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    instagram VARCHAR(100),
    facebook VARCHAR(100),
    linkedin VARCHAR(100),
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,

    Lojista_idLojista INT,
    Endereco_idEndereco INT,

    FOREIGN KEY (Lojista_idLojista)
        REFERENCES Lojista(idLojista),

    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco)
=======
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
>>>>>>> 48fdd0f6bd62eb90656d24951ca4359194c3b6f2
);

CREATE TABLE Carrinho(
    idCarrinho INT PRIMARY KEY AUTO_INCREMENT,

<<<<<<< HEAD
-- =========================================================
-- TABELA: CLIENTE
-- =========================================================

CREATE TABLE Cliente(
    idCliente INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(250) NOT NULL,
    cpf VARCHAR(11) UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
);


-- =========================================================
-- TABELA: CATEGORIA
-- =========================================================

CREATE TABLE Categoria(
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL UNIQUE
);


-- =========================================================
-- TABELA: MARCA
-- =========================================================

CREATE TABLE Marca(
    idMarca INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL UNIQUE,
    logo LONGBLOB
=======
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
>>>>>>> 48fdd0f6bd62eb90656d24951ca4359194c3b6f2
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

-- =========================================================
-- TABELA: TAMANHO
-- =========================================================

CREATE TABLE Tamanho(
    idTamanho INT PRIMARY KEY AUTO_INCREMENT,

    tamanho VARCHAR(45) NOT NULL UNIQUE
);


-- =========================================================
-- TABELA: CORES
-- =========================================================

CREATE TABLE Cores(
    idCores INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,
    codigo_cor VARCHAR(45) NOT NULL
);


-- =========================================================
-- TABELA: FORMAS DE PAGAMENTO
-- =========================================================

CREATE TABLE Formas_Pagamento(
    idFormas_Pagamento INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL UNIQUE
);


-- =========================================================
-- TABELA: PRODUTO
-- =========================================================

CREATE TABLE Produto(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    codigo VARCHAR(45) NOT NULL UNIQUE,

    preco_antigo DECIMAL(10,2) NOT NULL,
    preco_promocional DECIMAL(10,2),

    quantidade_estoque INT NOT NULL,
    ativo TINYINT NOT NULL DEFAULT 1,

    Loja_idLoja INT,
    Categoria_idCategoria INT,
    Marca_idMarca INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja),

    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria),

    FOREIGN KEY (Marca_idMarca)
        REFERENCES Marca(idMarca)
);


-- =========================================================
-- TABELA: BANNER
-- =========================================================

CREATE TABLE Banner(
    idBanner INT PRIMARY KEY AUTO_INCREMENT,

    imagem LONGBLOB NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    status_visibilidade TINYINT NOT NULL DEFAULT 1,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
);


-- =========================================================
-- TABELA: PROMOCAO
-- =========================================================

CREATE TABLE Promocao(
    idPromocao INT PRIMARY KEY AUTO_INCREMENT,

    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    valor_promocao DECIMAL(10,2) NOT NULL,
    nome VARCHAR(45) NOT NULL,

    Banner_idBanner INT,

    FOREIGN KEY (Banner_idBanner)
        REFERENCES Banner(idBanner)
);


-- =========================================================
-- TABELA: CUPOM
-- =========================================================

CREATE TABLE Cupom(
    idCupom INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,
    data_validade DATE NOT NULL,
    quantidade INT NOT NULL,
    desconto DECIMAL(10,2) NOT NULL,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
);


-- =========================================================
-- TABELA: CARRINHO
-- =========================================================

CREATE TABLE Carrinho(
    idCarrinho INT PRIMARY KEY AUTO_INCREMENT,

    quantidade_produto INT NOT NULL DEFAULT 0,
    preco_total DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    Cliente_idCliente INT,

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
);


-- =========================================================
-- TABELA: CARTAO DE PAGAMENTO
-- =========================================================

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
    ativo TINYINT NOT NULL DEFAULT 1,

    Cliente_idCliente INT,

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
);


-- =========================================================
-- TABELA: PEDIDOS
-- =========================================================

CREATE TABLE Pedidos(
    idPedidos INT PRIMARY KEY AUTO_INCREMENT,

    data DATE NOT NULL,
    nota_fiscal LONGBLOB,
    data_entrega DATE,

    status_entrega VARCHAR(45) NOT NULL,
    status_pagamento VARCHAR(45) NOT NULL,
    codigo VARCHAR(45) NOT NULL UNIQUE,

    Cliente_idCliente INT,
    Loja_idLoja INT,
    Endereco_idEndereco INT,
    Formas_Pagamento_idFormas_Pagamento INT,

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
-- TABELA: FRETE
-- =========================================================

CREATE TABLE Frete(
    idFrete INT PRIMARY KEY AUTO_INCREMENT,

    valor DECIMAL(10,2) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    bairro VARCHAR(45) NOT NULL,
    entrega_full TINYINT NOT NULL DEFAULT 0,
    codigo_rastreio VARCHAR(100),

    Pedidos_idPedidos INT,

    FOREIGN KEY (Pedidos_idPedidos)
        REFERENCES Pedidos(idPedidos)
);


-- =========================================================
-- TABELA: IMAGEM DO PRODUTO
-- =========================================================

CREATE TABLE Imagem_Produto(
    idImagem_Produto INT PRIMARY KEY AUTO_INCREMENT,

    arquivo LONGBLOB NOT NULL,

    Produto_idProduto INT,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);


-- =========================================================
-- TABELA: AVALIACAO DO PRODUTO
-- =========================================================

CREATE TABLE Avaliacao_Produto(
    idAvaliacao_Produto INT PRIMARY KEY AUTO_INCREMENT,

    data DATE NOT NULL,
    nota DECIMAL(2,1) NOT NULL,
    descricao TEXT,

    Produto_idProduto INT,
    Cliente_idCliente INT,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente),

    CHECK (nota >= 0 AND nota <= 5)
);


-- =========================================================
-- RELACIONAMENTO: PRODUTO x CORES
-- =========================================================

CREATE TABLE Produto_has_Cores(
    Produto_idProduto INT,
    Cores_idCores INT,

    PRIMARY KEY (Produto_idProduto, Cores_idCores),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Cores_idCores)
        REFERENCES Cores(idCores)
);


-- =========================================================
-- RELACIONAMENTO: PRODUTO x TAMANHO
-- =========================================================

CREATE TABLE Produto_has_Tamanho(
    Produto_idProduto INT,
    Tamanho_idTamanho INT,

    PRIMARY KEY (Produto_idProduto, Tamanho_idTamanho),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Tamanho_idTamanho)
        REFERENCES Tamanho(idTamanho)
);


-- =========================================================
-- RELACIONAMENTO: PRODUTO x PROMOCAO
-- =========================================================

CREATE TABLE Produto_has_Promocao(
    Produto_idProduto INT,
    Promocao_idPromocao INT,

    PRIMARY KEY (Produto_idProduto, Promocao_idPromocao),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao)
);


-- =========================================================
-- RELACIONAMENTO: PRODUTO x CARRINHO
-- =========================================================

CREATE TABLE Produto_has_Carrinho(
    Produto_idProduto INT,
    Carrinho_idCarrinho INT,

    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (Produto_idProduto, Carrinho_idCarrinho),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Carrinho_idCarrinho)
        REFERENCES Carrinho(idCarrinho)
);


-- =========================================================
-- RELACIONAMENTO: PEDIDOS x PRODUTO
-- =========================================================

CREATE TABLE Pedidos_has_Produto(
    Pedidos_idPedidos INT,
    Produto_idProduto INT,

    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (Pedidos_idPedidos, Produto_idProduto),

    FOREIGN KEY (Pedidos_idPedidos)
        REFERENCES Pedidos(idPedidos),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);


-- =========================================================
-- RELACIONAMENTO: BANNER x PRODUTO
-- =========================================================

CREATE TABLE Banner_has_Produto(
    Banner_idBanner INT,
    Produto_idProduto INT,

    PRIMARY KEY (Banner_idBanner, Produto_idProduto),

    FOREIGN KEY (Banner_idBanner)
        REFERENCES Banner(idBanner),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);


-- =========================================================
-- RELACIONAMENTO: CATEGORIA x CUPOM
-- =========================================================

CREATE TABLE Categoria_has_Cupom(
    Categoria_idCategoria INT,
    Cupom_idCupom INT,

    PRIMARY KEY (Categoria_idCategoria, Cupom_idCupom),

    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria),

    FOREIGN KEY (Cupom_idCupom)
        REFERENCES Cupom(idCupom)
);


-- =========================================================
-- RELACIONAMENTO: CATEGORIA x PROMOCAO
-- =========================================================

CREATE TABLE Categoria_has_Promocao(
    Categoria_idCategoria INT,
    Promocao_idPromocao INT,

    PRIMARY KEY (Categoria_idCategoria, Promocao_idPromocao),

    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria),

    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao)
);


-- =========================================================
-- RELACIONAMENTO: CUPOM x PRODUTO
-- =========================================================

CREATE TABLE Cupom_has_Produto(
    Cupom_idCupom INT,
    Produto_idProduto INT,

<<<<<<< HEAD
    PRIMARY KEY (Cupom_idCupom, Produto_idProduto),

    FOREIGN KEY (Cupom_idCupom)
        REFERENCES Cupom(idCupom),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);


-- =========================================================
-- RELACIONAMENTO: ENDERECO x CLIENTE
-- =========================================================

CREATE TABLE Endereco_has_Cliente(
    Endereco_idEndereco INT,
    Cliente_idCliente INT,

    PRIMARY KEY (Endereco_idEndereco, Cliente_idCliente),

    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco),

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
=======
    FOREIGN KEY (Cupom_idCupom) REFERENCES Cupom(idCupom),
    FOREIGN KEY (Produto_idProduto) REFERENCES Produto(idProduto)
);

CREATE TABLE Endereco_has_Cliente(
    Endereco_idEndereco INT,
    Cliente_idCliente INT,

    FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco(idEndereco),
    FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente(idCliente)
>>>>>>> 48fdd0f6bd62eb90656d24951ca4359194c3b6f2
);
INSERT INTO Endereco
(rua,cep,setor,numero,complemento,tipo)
values("Rodoviário","77781708","Rodoviário",
1230,"Ao lado do Senac","Comercial");

<<<<<<< HEAD

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
-- CONSULTAS
-- =========================================================

SELECT * FROM Endereco;

SELECT * FROM Lojista;

=======
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
>>>>>>> 48fdd0f6bd62eb90656d24951ca4359194c3b6f2
SELECT * FROM Loja;