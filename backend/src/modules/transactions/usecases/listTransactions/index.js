import  {TransactionsRepository }  from "../../repositories/TransactionsRepository.js";
import { ListTransactions } from "./listTransactions.js"
import  { listTransactionsController}  from "./listTransactionController.js";

const transactionsRepository = TransactionsRepository.getInstance();
const listTransactions = new ListTransactions(transactionsRepository);
const ListTransactionController = new listTransactionsController(listTransactions);

export {ListTransactionController}