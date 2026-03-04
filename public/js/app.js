async function enviar() {
    const file = document.getElementById("arquivo").files[0];
    if (!file) return alert("Selecione um arquivo");

    const reader = new FileReader();
    reader.onload = async () => {
        const res = await fetch("/api/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                arquivoBase64: reader.result,
                nomeArquivo: file.name
            })
        });

        const data = await res.json();
        alert("Nota enviada com sucesso");
    };
    reader.readAsDataURL(file);
}
