const fetchTransactions = async () => {
  const response = await fetch("https://api.origamid.dev/json/transacoes.json");
  return await response.json();
};

const transactions = await fetchTransactions();

export default transactions;
