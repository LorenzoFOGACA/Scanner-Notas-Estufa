function adicionarLinha(nota) {
    const tbody = document.getElementById("tabela-corpo");

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${nota.numero_nota}</td>
        <td>${nota.data_emissao}</td>
        <td>${nota.cliente}</td>
        <td>R$ ${nota.valor_total.toFixed(2)}</td>
        <td>${nota.status}</td>
    `;

    tbody.appendChild(tr);
}

function exportar() {
    let csv = "Numero,Data,Cliente,Valor,Status\n";

    document.querySelectorAll("#tabela-corpo tr").forEach(tr => {
        const cols = tr.querySelectorAll("td");
        const linha = Array.from(cols).map(td => td.innerText).join(",");
        csv += linha + "\n";
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "notas.csv";
    a.click();
}
