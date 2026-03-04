// api/upload.js

import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ erro: "Método não permitido" });
    }

    try {
        const { arquivoBase64, nomeArquivo } = req.body;

        if (!arquivoBase64) {
            return res.status(400).json({ erro: "Arquivo não enviado" });
        }

        const buffer = Buffer.from(
            arquivoBase64.replace(/^data:.*;base64,/, ""),
            "base64"
        );

        const pasta = path.join(process.cwd(), "storage/notas");
        if (!fs.existsSync(pasta)) fs.mkdirSync(pasta, { recursive: true });

        const caminho = path.join(pasta, nomeArquivo);
        fs.writeFileSync(caminho, buffer);

        res.status(200).json({ sucesso: true, caminho });
    } catch (erro) {
        res.status(500).json({ erro: "Falha no upload" });
    }
}
