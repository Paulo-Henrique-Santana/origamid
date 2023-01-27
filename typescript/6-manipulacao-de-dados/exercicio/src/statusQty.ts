const showStatusQty = (transactions: Transaction[]) => {
  const div = document.querySelector<HTMLDivElement>("#status-qty");

  if (div) {
    let statusTypes: string[] = [];

    transactions.forEach(({ Status }) => {
      if (!statusTypes.includes(Status)) statusTypes.push(Status);
    });

    div.innerHTML = `
      ${statusTypes
        .map(
          (status) =>
            `<p>${status}: ${
              transactions.filter(
                (transaction) => transaction.Status === status
              ).length
            }</p>`
        )
        .join("")}
    `;
  }
};

export default showStatusQty;
