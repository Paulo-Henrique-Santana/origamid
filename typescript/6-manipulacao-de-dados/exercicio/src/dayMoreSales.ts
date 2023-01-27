const showDayMoreSales = (transactions: Transaction[]) => {
  const p = document.querySelector<HTMLParagraphElement>("#day-more-sales");

  if (p) {
    const days = transactions
      .filter(({ Status }) => Status === "Paga")
      .map(({ Data }) => {
        const arrayDate = Data.slice(0, 10).split("/");

        const numberDay = new Date(
          +arrayDate[1],
          +arrayDate[1] - 1,
          +arrayDate[0]
        ).getDay();

        switch (numberDay) {
          case 0:
            return "Segunda";
          case 1:
            return "Terça";
          case 2:
            return "Quarta";
          case 3:
            return "Quinta";
          case 4:
            return "Sexta";
          case 5:
            return "Sábado";
          case 6:
            return "Domingo";
          default:
            return null;
        }
      });

    const daysQty = days.reduce((prev: any, day) => {
      if (day) {
        if (!prev[day]) prev[day] = 1;
        else prev[day]++;
        return prev;
      }
    }, {});

    p.innerText += ` ${Object.keys(daysQty).find(
      (key) => daysQty[key] === Math.max(...Object.values<number>(daysQty))
    )}`;
  }
};

export default showDayMoreSales;
