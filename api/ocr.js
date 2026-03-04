// api/ocr.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ erro: "Método inválido" });
    }

    // Simulação de dados extraídos da nota
    const dados = {
        numero_nota: 1567,
        data_emissao: "2025-03-01",
        cliente: "Cliente Exemplo",
        produtos: [
            { nome: "Adubo", quantidade: 10, preco: 5.50 }
        ],
        valor_total: 55.00,
        status: "nao_pago"
    };

    res.status(200).json(dados);
}
