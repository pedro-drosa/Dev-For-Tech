-- Selecionar o produto mais caro
SELECT * FROM produto ORDER BY preco DESC LIMIT 1;
SELECT * FROM produto HAVING MAX(preco);
SELECT * FROM produto WHERE preco = (SELECT MAX(preco) FROM produto);

-- Selecionar os pedidos que contém o produto mais caro
SELECT * FROM pedido INNER JOIN item_pedido 
ON pedido.numero = item_pedido.numero_pedido
WHERE item_pedido.codigo_produto = (SELECT codigo FROM produto ORDER BY preco DESC LIMIT 1);

-- Selecionar os clientes que compraram o produto mais caro
SELECT * FROM cliente INNER JOIN pedido ON cliente.id = pedido.id_cliente
INNER JOIN item_pedido ON item_pedido.numero_pedido = pedido.numero
WHERE item_pedido.codigo_produto = (SELECT codigo FROM produto ORDER BY preco DESC LIMIT 1);