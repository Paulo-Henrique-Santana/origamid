const showPaymentMethods = (transactions: Transaction[]) => {
  const div = document.querySelector<HTMLDivElement>("#payment-methods");

  if (div) {
    let transactionsMethods: string[] = [];

    transactions.forEach(({ "Forma de Pagamento": method }) => {
      if (!transactionsMethods.includes(method))
        transactionsMethods.push(method);
    });

    div.innerHTML = `
      ${transactionsMethods
        .map(
          (method) =>
            `<p>${method}: ${
              transactions.filter(
                (transaction) => transaction["Forma de Pagamento"] === method
              ).length
            }</p>`
        )
        .join("")}
    `;
  }
};

export default showPaymentMethods;
