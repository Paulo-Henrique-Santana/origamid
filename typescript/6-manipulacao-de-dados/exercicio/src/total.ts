const showTotal = (transactions: Transaction[]) => {
  const p = document.querySelector<HTMLParagraphElement>("#total");

  if (p) {
    const total = transactions.reduce(
      (prev, { Status, ["Valor (R$)"]: value }) => {
        const cleanValue = Number(value.replace(/[-.]/g, "").replace(",", "."));

        if (Status === "Paga") {
          return prev + cleanValue;
        } else if (Status === "Estornada") {
          return prev - cleanValue;
        } else return prev + 0;
      },
      0
    );

    p.innerText += ` ${total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`;
  }
};

export default showTotal;
