async function fetchSales() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  showTotal(data);
}
fetchSales();

interface Product {
  marca: string;
  cor: string;
}

type Sale = [string, number, string, Product];

function showTotal(data: Sale[]) {
  const total = data.reduce((prev, sale) => sale[1] + prev, 0);
  document.body.innerHTML += `<p>Valor Total dos Produtos: ${total.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  )}</p>`;
}
