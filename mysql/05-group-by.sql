-- Calcular a quantidade de produtos por departamento
SELECT numero_depto, count(codigo) FROM produto GROUP BY numero_depto;
SELECT numero_depto, SUM(preco * estoque) FROM produto GROUP BY numero_depto;