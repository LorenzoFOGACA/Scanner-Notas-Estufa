-- Banco de Dados: Scanner de Notas Fiscais para Estufa
-- Compatível com PostgreSQL / MySQL

CREATE TABLE notas_fiscais (
    id SERIAL PRIMARY KEY,
    numero_nota INTEGER NOT NULL UNIQUE,
    data_emissao DATE NOT NULL,
    cliente_nome VARCHAR(255) NOT NULL,
    cliente_cnpj VARCHAR(20),
    valor_total DECIMAL(10,2) NOT NULL,
    status_pagamento VARCHAR(10)
        CHECK (status_pagamento IN ('pago', 'nao_pago'))
        NOT NULL,
    saldo_devedor DECIMAL(10,2) NOT NULL,
    arquivo_original TEXT,
    confianca_ocr DECIMAL(5,2),
    nota_validada BOOLEAN DEFAULT FALSE,
    data_importacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE itens_nota (
    id SERIAL PRIMARY KEY,
    nota_id INTEGER NOT NULL,
    produto_nome VARCHAR(255) NOT NULL,
    quantidade DECIMAL(10,2) NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    CONSTRAINT fk_nota
        FOREIGN KEY (nota_id)
        REFERENCES notas_fiscais(id)
        ON DELETE CASCADE
);

CREATE TABLE pagamentos (
    id SERIAL PRIMARY KEY,
    nota_id INTEGER NOT NULL,
    valor_pago DECIMAL(10,2) NOT NULL,
    data_pagamento DATE NOT NULL,
    CONSTRAINT fk_pagamento_nota
        FOREIGN KEY (nota_id)
        REFERENCES notas_fiscais(id)
        ON DELETE CASCADE
);-- Esquema do banco de dados
