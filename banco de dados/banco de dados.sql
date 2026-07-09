CREATE DATABASE hefestoauto;

DROP database hefestoauto;

use hefestoauto;

-- cria tabela sem chave estrangeira --
CREATE TABLE Lojista(
idLojista INT primary key auto_increment,
nome VARCHAR(200) not null,
cpf MEDIUMINT(11) not null unique,
cnpj MEDIUMINT(14) unique,
email VARCHAR(120) not null,
senha VARCHAR(20) not null,
telefone MEDIUMINT(14)
);

drop table lojista;

CREATE table Endereco(
idEndereco INT primary key auto_increment, 

rua VARCHAR(50) not null,

cep MEDIUMINT(10) not null ,

setor VARCHAR(50) not null,

numero mediumint not null,

complemento VARCHAR(100) not null,

tipo VARCHAR(45)
);

create table Formas_pagamento(
idFormas_Pagamento INT primary key auto_increment,

nome VARCHAR(45)
);

drop table Forma_Pagamento;


create table Pedidos(

idPedidos INT primary key auto_increment,

data_pedido   DATE not null,

nota_fiscal LONGBLOB not null,

data_entrega DATE not null,

status_entrega VARCHAR(45) not null,

status_pagamento VARCHAR(45) not null,

codigo VARCHAR(45),

Cliente_idCliente INT,

Loja_idLoja INT,

Endereco_idEndereco INT,

Formas_Pagamento_idFormas_Pagamento INT,

foreign key (Cliente_idCliente) references Cliente (idCliente),

foreign key (Loja_idLoja) references Loja (idLoja),

foreign key (Endereco_idEndereco) references Endereco (idEndereco),

foreign key (Formas_Pagamento_idFormas_Pagamento) references Formas_Pagamento (idFormas_Pagamento)
 
 
);

create table categoria(
IdCategoria int primary key auto_increment,
nome VARCHAR(100) not null
);

create table Marca(
IdMarca int primary key auto_increment,
nome varchar(100) not null,
logo longblob
);

create table Loja(
idLoja INT primary key auto_increment,

nome VARCHAR(120) not null,

whatsapp VARCHAR(50) not null,

instagram VARCHAR(100),

facebook VARCHAR(100),

linkedin VARCHAR(100),

telefone MEDIUMINT(13) not null,

email VARCHAR(100),

Lojista_idLojista INT,
 
 Endereco_idEndereco INT,
foreign key (Endereco_idEndereco) references Endereco (IdEndereco),
 foreign key  (Lojista_idLojista) references Lojista (IdLojista)
 );
 
 
 
 
 create table Cliente(
 idCliente INT primary key auto_increment,

nome VARCHAR(250),

cpf MEDIUMINT(11),

telefone MEDIUMINT(13),

email VARCHAR(120),

senha VARCHAR(12),

data_nascimento DATE,

Loja_idLoja INT  
  );
  
  
  drop table Cliente;
  
  create table Cupom(

idCupom INT primary key auto_increment,

nome VARCHAR(45) not null,

data_validade DATE not null,

quantidade mediumint not null,

desconto FLOAT not null,

Loja_idLoja INT
);

create table Avaliacao_Produto(

idAvaliacao_Produto INT primary key auto_increment,

data_avaliacao DATE not null,

nota FLOAT,

descricao TEXT(250),

Produto_idProduto INT,

foreign key (Produto_idProduto) references Produto (idProduto)
);


create table Imagem_Produto (

idImagem_Produto INT primary key auto_increment,

arquivo LONGBLOB not null,

Produto_idProduto INT,

foreign key (Produto_idProduto) references Produto (idProduto)

);


create table Frete(

idFrete INT primary key auto_increment,

valor FLOAT not null,

tipo VARCHAR(45) not null,

bairro VARCHAR(45),

entrega_full TINYINT,

codigo_rastreio VARCHAR(100),

Pedidos_idPedidos INT,

Pedidos_Cliente_idCliente INT,

pedidos_loja_idloja int,

pedidos_endereco_idendereco int, 

foreign key (Pedidos_idPedidos) references Pedidos (idPedidos),

foreign key (Pedidos_Cliente_idCliente) references Cliente (idCliente),

foreign key (pedidos_loja_idloja) references Loja (idLoja),

foreign key (pedidos_endereco_idendereco) references Endereco (idEndereco)


);

drop table frete;
 
 create table Carrinho(
 

idCarrinho INT primary key auto_increment,

quantidade_produto INT not null,

preco_total FLOAT not null,

Cliente_idCliente Int,

foreign key (Cliente_idCliente) references Cliente (idCliente)

);

create table Produto(

idProduto INT primary key auto_increment,

nome VARCHAR(100) not null,

descricao TEXT(100) not null,

codigo VARCHAR(45) not null,

preco_antigo FLOAT not null,

preco_promocional FLOAT,

quantidade_estoque INT not null,

ativo TINYINT,

Loja_idLoja INT,

Marca_idMarca INT,

Categoria_idCategoria INT,

foreign key (Loja_idLoja) references Loja (idLoja),

foreign key (Categoria_idCategoria) references Categoria (idCategoria),

foreign key (Marca_idMarca) references Marca (idMarca)


);

drop table produto;

create table Categoria_has_Cupom(

Categoria_idCategoria INT,

Cupom_idCupom INT,

foreign key (Categoria_idCategoria) references Categoria (IdCategoria),
 foreign key  (Cupom_idCupom) references Cupom (Idcupom)
);


create table Banner(

idBanner INT primary key auto_increment,

imagem LONGBLOB not null,

data_inicio DATE not null,

data_final DATE not null,

status_visibilidade TINYINT ,

Loja_idLoja INT,
foreign key (loja_idLoja) references Loja (idLoja)
);

create table Promocao(

idPromocao INT primary key auto_increment,

data_inicio DATE not null,

data_final DATE not null,

valor_promocao FLOAT not null,

nome VARCHAR(45),

Banner_idBanner INT,

foreign key (Banner_idBanner) references Banner (idBanner)
);

create table Cartao_Pagamento(

idCartao_Pagamento INT primary key auto_increment,

numero MEDIUMINT(40) not null,

data_vencimento VARCHAR(45) not null,

cvc INT not null,

cpf MEDIUMINT(12) not null,

nome_proprietario VARCHAR(200) not null,

nome_identificacao VARCHAR(45) not null,

bandeira VARCHAR(45) not null,

tipo VARCHAR(45) not null,

ativo TINYINT,

Cliente_idCliente INT, 

foreign key (Cliente_idCliente) references Cliente (idCliente)
);


CREATE TABLE Cupom_has_Produto(
    Cupom_idCupom INT,
    Produto_idProduto INT,

    FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto),
    FOREIGN KEY (Cupom_idCupom) REFERENCES Cupom (idCupom)
);

create table Produto_has_Carrinho(

Produto_idProduto INT,

Carrinho_idCarrinho INT,


);

create table Pedidos_has_Produto

Pedidos_idPedidos INT

Produto_idProduto INT


create table 