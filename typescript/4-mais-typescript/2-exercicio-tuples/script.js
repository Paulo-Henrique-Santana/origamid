"use strict";
async function fetchSales() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    showTotal(data);
}
fetchSales();
function showTotal(data) {
    const total = data.reduce((prev, sale) => sale[1] + prev, 0);
    document.body.innerHTML += `<p>Valor Total dos Produtos: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>`;
}
