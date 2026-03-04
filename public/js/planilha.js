function adicionarLinha(nota) {
    const tbody = document.querySelector("#tabela tbody");
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
