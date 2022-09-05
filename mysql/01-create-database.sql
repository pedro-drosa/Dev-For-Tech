STATUS;
\! cls; -- Executar comandos no prompt
SHOW DATABASES; -- Exibir todas as bases de dados disponíveis

CREATE DATABASE ecommerce; -- Criar uma nova base de dados
USE ecommerce; -- Selecionar a base de dados criada
SHOW TABLES; -- Exibir as tabelas de uma base de dados

-- Criar uma nova tabela
CREATE TABLE cliente(
   id INTEGER NOT NULL auto_increment PRIMARY KEY,
   nome VARCHAR(100) NOT NULL,
   email VARCHAR(70) NOT NULL UNIQUE,
   senha VARCHAR(20) NOT NULL,
   cpf VARCHAR(15) NOT NULL UNIQUE
 );

CREATE TABLE departamento(
   numero INTEGER NOT NULL auto_increment PRIMARY KEY,
   nome VARCHAR(30) NOT NULL,
   descricao TEXT
 );

CREATE TABLE endereco(
     num_seq INTEGER NOT NULL auto_increment PRIMARY KEY,
     tipo VARCHAR(50) NOT NULL,
     logradouro VARCHAR(50) NOT NULL,
     numero INTEGER,
     complemento VARCHAR(50),
     bairro VARCHAR(50),
     cidade VARCHAR(50),
     estado VARCHAR(5),
     cep VARCHAR(10),
     id_cliente INTEGER NOT NULL,
     CONSTRAINT endereco_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id)
 );

CREATE TABLE pedido(
      numero INTEGER NOT NULL auto_increment PRIMARY KEY,
      status_pedido VARCHAR(1) NOT NULL,
      data_pedido DATE,
      valor_bruto DOUBLE,
      desconto DOUBLE,
      valor_liq DOUBLE,
      id_cliente INTEGER NOT NULL,
      CONSTRAINT cliente_pedido FOREIGN KEY (id_cliente) REFERENCES cliente(id)
  
 );

CREATE TABLE produto(
      codigo INTEGER NOT NULL auto_increment PRIMARY KEY,
      nome VARCHAR(50) NOT NULL,
      descricao TEXT,
      preco DOUBLE,
      estoque INTEGER,
      link_foto VARCHAR(255),
      numero_depto INTEGER NOT NULL,
      produto_column VARCHAR(30),
      CONSTRAINT produto_depto FOREIGN KEY (numero_depto) REFERENCES departamento(numero) 
 );

CREATE TABLE item_pedido(
       seq INTEGER NOT NULL auto_increment PRIMARY KEY,
       quantidade INTEGER,
       preco_unit DOUBLE,
       preco_final DOUBLE,
       codigo_produto INTEGER NOT NULL,
       numero_pedido INTEGER NOT NULL,
       CONSTRAINT item_produto FOREIGN KEY (codigo_produto) REFERENCES produto(codigo),
   	  CONSTRAINT item_pedido FOREIGN KEY (numero_pedido) REFERENCES pedido(numero)
 );

-- Exibir a estrutura das tabelas criadas
DESC cliente;
DESC departamento;
DESC endereco;
DESC pedido;
DESC produto;
DESC item_pedido;

-- Alterar estrutura de uma tabela
ALTER TABLE cliente ADD COLUMN rg VARCHAR(10) NOT NULL AFTER senha; -- Inserir nova coluna
ALTER TABLE produto DROP COLUMN produto_column; -- Remover uma conluna
DROP TABLE cliente; -- Excluir uma tabela
DROP DATABASE ecommerce; -- Excluir uma base de dados
ALTER TABLE cliente MODIFY COLUMN rg VARCHAR(15); -- Modificar as definições de um campo
ALTER TABLE cliente CHANGE COLUMN rg registro_geral VARCHAR(10) NOT NULL; -- Modificar estrutura ou renomear um campo