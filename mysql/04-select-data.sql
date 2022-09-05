-- Contar a quantidade de clientes
SELECT COUNT(id) AS total_clientes FROM cliente;

-- Selecionar através de um critério
SELECT * FROM cliente WHERE id = 10;

-- Selecionar todas as colunas
SELECT * FROM cliente;

-- Selecionar campos específicos
SELECT nome, email, senha, cpf FROM cliente;

-- Utilizar alias na consulta de dados
SELECT nome AS nome_cliente, email AS email_cliente, cpf AS cpf_cliente FROM cliente;

-- Ordenar clientes em ordem alfabética
SELECT * FROM cliente ORDER BY nome ASC;

-- Calcular o total de pedidos (sem critério)
SELECT SUM(valor_liq) AS faturamento_total FROM pedido;

-- Selecionar todos os pedidos
SELECT * FROM pedido;

-- Selecionar todos os produtos
SELECT * FROM produto;

-- Selecionar produto com operador LIKE 
SELECT * FROM produto WHERE nome LIKE "p%";
SELECT * FROM produto WHERE nome LIKE "%e";
SELECT * FROM produto WHERE nome LIKE "%sodium%";