ALTER TABLE cliente ADD column rg VARCHAR(10) NOT NULL AFTER senha; --Adicionar nova coluna após o campo senha
ALTER TABLE produto DROP COLUMN produto_column; --Remover a coluna produto_column da tabela produto
DROP table cliente; --Deletar a tabela cliente
DROP database ecommerce; --Deletar a base de dados ecommerce
ALTER TABLE cliente MODIFY COLUMN rg VARCHAR(15); -- Modificar coluna rg
ALTER TABLE cliente CHANGE COLUMN rg registro_geral VARCHAR(10) NOT NULL; -- Renomear a coluna rg para registro_geral