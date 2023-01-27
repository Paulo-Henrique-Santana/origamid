const listTransactions = (transactions: Transaction[]) => {
  const tbody = document.querySelector<HTMLTableSectionElement>(
    "#transactions-table tbody"
  );
  if (tbody) {
    transactions.forEach((transaction) => {
      tbody.innerHTML += `
        <tr>
          <td>${transaction.Nome}</td>
          <td>${transaction.Email}</td>
          <td>R$ ${transaction["Valor (R$)"]}</td>
          <td>${transaction["Forma de Pagamento"]}</td>
          <td>${transaction.Status}</td>
        </tr>
      `;
    });
  }
};

export default listTransactions;
