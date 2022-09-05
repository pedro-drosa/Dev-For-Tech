-- Junção simples entre produto e departamento
SELECT * FROM produto INNER JOIN departamento
ON produto.numero_depto = departamento.numero;

-- Junção simples entre cliente e endereço
SELECT * from cliente INNER JOIN endereco
ON endereco.id_cliente = cliente.id;

-- Junção com três ou mais tabelas
SELECT * FROM pedido INNER JOIN item_pedido
ON item_pedido.numero_pedido = pedido.numero
INNER JOIN produto ON produto.codigo = item_pedido.codigo_produto
INNER JOIN cliente ON pedido.id_cliente = cliente.id;

-- Relatório sequencial de todos os pedidos realizados
SELECT 
pedido.numero, 
pedido.data_pedido, 
pedido.valor_bruto, 
pedido.desconto, 
pedido.valor_liq, 
cliente.nome AS cliente, 
produto.nome AS produto 
FROM pedido INNER JOIN item_pedido ON item_pedido.numero_pedido = pedido.numero
INNER JOIN produto ON produto.codigo = item_pedido.codigo_produto
INNER JOIN cliente ON pedido.id_cliente = cliente.id
ORDER BY pedido.numero;

-- Calcular valor total de pedido por cliente
SELECT pedido.id_cliente, cliente.nome, SUM(pedido.valor_liq) FROM pedido 
INNER JOIN cliente ON  pedido.id_cliente = cliente.id
GROUP BY cliente.id;

-- Junção simples entre produto e departamento
SELECT * FROM departamento INNER JOIN produto
ON departamento.numero = produto.numero_depto;

-- Inserir novo departamento - obs: não possui um produto associado
INSERT into departamento VALUES (null,'Adventure','Switchable incremental adventure');

-- Junções Externas
-- Buscar todos os departamentos - inclusive os que não possuem produtos
SELECT * FROM departamento LEFT OUTER JOIN produto
ON departamento.numero = produto.numero_depto;

SELECT * FROM produto RIGHT OUTER JOIN departamento
ON produto.numero_depto = departamento.numero;