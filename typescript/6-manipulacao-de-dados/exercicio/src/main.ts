import transactions from "./fetch.js";
import showTotal from "./total.js";
import showPaymentMethods from "./paymentMethods.js";
import listTransactions from "./transactionsTable.js";
import showStatusQty from "./statusQty.js";
import showDayMoreSales from "./dayMoreSales.js";

showTotal(transactions);
listTransactions(transactions);
showPaymentMethods(transactions);
showStatusQty(transactions);
showDayMoreSales(transactions);
